FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get install -y wget
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get -y install google-chrome-stable

# RUN npm i -g pm2

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD [ "node" , "index.js" ]

