#Use official Node,js image
FROM node:18

#set working directory inside container
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy all project files
COPY . .

#Expose the port (Your app runs on 300)
EXPOSE 3000

#Start the app
CMD ["node", "server.js"]









