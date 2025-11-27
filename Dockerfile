FROM cypress/included:12.8.1

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

RUN ["npm","run","prereport"]