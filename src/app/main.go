package main

import (
	"fmt"
	"marketenterprise.vn/router"
	"net/http"
)

func main() {
	fmt.Println(router.Routes())
	http.ListenAndServe(":8081", nil)
}