FROM minio/minio:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./storage-init.sh /usr/src/app/storage-init.sh
CMD ["/usr/src/app/storage-init.sh"]

CMD ["minio", "server", "/data"]
