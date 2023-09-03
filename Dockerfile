FROM node:14
# Set the working directory in the container
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .env ./
COPY . .
# Build the TypeScript code
RUN npm run build
EXPOSE 8000
CMD ["node", "build/index.js"]
