FROM node:16

COPY .bashrc /root/.bashrc
RUN apt-get -y update
RUN apt-get -y install git

ENTRYPOINT tail -f /dev/null