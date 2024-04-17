FROM node:latest
RUN apt-get update && apt-get install git -y
RUN git clone https://github.com/jbahyrycz/ReactHotCold.git
WORKDIR /ReactHotCold
RUN npm i
RUN npm run-script build