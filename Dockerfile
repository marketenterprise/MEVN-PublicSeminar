FROM golang:1.15.2

COPY ./src/mevn /usr/local/go/src

WORKDIR /go/src/app
COPY ./src/app .

RUN go get -d -v ./...
RUN go install -v ./...
RUN go install marketenterprise.vn/router

EXPOSE 8081

CMD ["app"]