FROM golang:1.16-alpine as builder

WORKDIR /go/src/app

COPY ./app.go .
RUN go build -ldflags="-w -s" -o app app.go

FROM scratch

WORKDIR /go/src/app

COPY --from=builder /go/src/app/app .

CMD ["./app"]