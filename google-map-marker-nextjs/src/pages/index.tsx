
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import MARKER_DATA from "../../public/markers_data.json";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import ReactDOMServer from "react-dom/server";
import { PopupMarker } from "@/components/PopupMarker";
import { REACT_APP_GOOGLE_MAPS_API_KEY } from "@/constant";

const centerJapan = { lat: 35.3414603, lng: 135.2688735 };
// const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);


export default function Home() {
    const mapRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const loader = new Loader({
        apiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"],
    });
    

    const setMarkets = (map: google.maps.Map) => {
        let markerCluster: MarkerClusterer;
        markerCluster = new MarkerClusterer({ map });
        const bounds = new google.maps.LatLngBounds();
        MARKER_DATA.forEach((item) => {
            if (item) {
                bounds.extend(new google.maps.LatLng(item.lat, item.lng));
            }
            const marker = new google.maps.Marker({
                position: item,
                animation: google.maps.Animation.DROP,
            });
            // Render popup with shop's info
            let contentString = ReactDOMServer.renderToString(
                <PopupMarker
                    shopName={item.shopName || ""}
                    time={item.time || ""}
                    companyUrl={`https://www.marketenterprise.vn/`}
                />
            );
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            // Add event click for each marker the popup will be opened
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
            markerCluster.addMarker(marker);
        });
    };

    const goToLocation = (map: google.maps.Map, latPlace: number, lngPlace: number, radius: number) => {
        const center = { lat: latPlace, lng: lngPlace };
        const circle = new google.maps.Circle({
            center,
            radius,
        });
        const boundsCircle = circle.getBounds();
        if (boundsCircle !== null) {
            map.fitBounds(boundsCircle);
        }
    };

    const getLatLogAddress = async (address: string): Promise<google.maps.GeocoderResult | null> => {
        const geocoder = new google.maps.Geocoder();
        const result = await new Promise<google.maps.GeocoderResult | null>((resolve) => {
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK" && results && results[0]) {
                    resolve(results[0]);
                } else {
                    resolve(null);
                }
            });
        });
        return result;
    };

    const goToAddress = async (address: string, radius: number) => {
        const geoAddress: google.maps.GeocoderResult | null = await getLatLogAddress(address);
        if (!geoAddress) {
            return;
        }
        const map = new google.maps.Map(mapRef.current!, {
            mapTypeControl: false,
            streetViewControl: false,
        });
        goToLocation(map, geoAddress.geometry.location.lat(), geoAddress.geometry.location.lng(), radius);
        setMarkets(map);
    };

    useEffect(() => {
        loader.load().then(() => {
            if (!google?.maps?.places?.SearchBox) {
                throw new Error("SearchBox class not found in Google Maps API");
            }
            let map: google.maps.Map;
            map = new google.maps.Map(mapRef.current!, {
                center: centerJapan,
                zoom: 5,
                mapTypeControl: false,
                streetViewControl: false,
            });
            setMarkets(map);
            // add search box to the map
            const searchBox = new google.maps.places.SearchBox(searchInputRef.current! || "");
            map.addListener("bounds_changed", () => {
                searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
            });
            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();
                if (places && places[0]) {
                    goToAddress(places[0].formatted_address || "", 3000);
                }
            });
        });
    }, []);
    return (
        <main>
            <div className="container mx-auto mt-5">
                <div
                    className="text-lg leading-none lg:text-2xl flex justify-center lg:justify-start text-brown-dark font-bold"
                    id="map"
                >
                    Google map API demo
                </div>
                <div className="h-fit my-2">
                    {" "}
                    <input
                        type="text"
                        id="google-map-search"
                        placeholder="Where do you want to go?"
                        className="px-4 py-2 border border-primary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-2"
                        ref={searchInputRef}
                    />
                    <div className="h-[500px] rounded-md z-20 mb-4" ref={mapRef} />
                </div>
            </div>
        </main>
    );
}
