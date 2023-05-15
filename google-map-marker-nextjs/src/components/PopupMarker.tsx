import { IconNext } from '@/components/IconNext';

type PopupMarkerProps = {
  shopName: string;
  time: string;
  companyUrl: string;
};

export const PopupMarker = ({
  shopName,
  time,
  companyUrl,
}: PopupMarkerProps) => {
  return (
    <div className="min-w-[200px]">
      <div className="bg-brown fixed w-full top-0 px-2 py-1 -ml-3 flex items-end gap-1">
        <div className="font-bold text-white text-[14px] w-[90%] overflow-hidden truncate text-overflow-ellipsis inline-block">
          {shopName}{' '}
        </div>
      </div>
      <div className="px-2 mt-6 flex text-xs gap-2">
        <div className="font-bold flex-none flex items-start align-top">
          営業時間
        </div>
        <div className=" flex-none justify-center items-center border-l border-brown ml-2 pl-2">
          {time.split('\n').map((item, index) => {
            return <p key={index}>{item.trim() || 'No data'}</p>;
          })}
        </div>
      </div>
      <div className="pt-2 lg:w-fit ">
        <a
          className="max-w-[300px]"
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="group border-primary-700 h-full rounded-[5px] duration-300
                  ease-in-out lg:border-[3px] border-2 lg:shadow-sm lg:rounded-lg"
          >
            <div
              className="flex justify-center relative lg:px-5 px-2 h-full rounded-[2px]
                  lg:rounded-[5px]  bg-primary-700 border-2 border-white duration-100 ease-in-out"
            >
              <span className="text-xss text-center font-semibold group-hover:text-cream-600 text-white duration-300 ease-in-out lg:text-base lg:mr-5">
                公式ページはこちら
              </span>
              <span>
                <IconNext
                  classNameI={
                    'absolute w-[10px] h-[10px] top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 lg:w-3 lg:h-3'
                  }
                  classNameSvg={
                    'group-hover:text-cream-600 text-white duration-300 ease-in-out'
                  }
                />
                <IconNext
                  classNameI={
                    'absolute w-[10px] h-[10px] top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 lg:w-3 lg:h-3'
                  }
                  classNameSvg={
                    'animate-ping group-hover:text-cream-600 text-white duration-300 ease-in-out'
                  }
                />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
