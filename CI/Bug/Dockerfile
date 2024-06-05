FROM node:latest
RUN apt-get update && apt-get install git -y
RUN git clone https://github.com/jbahyrycz/ReactHotCold.git
WORKDIR /ReactHotCold
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD kompletna_bzdura