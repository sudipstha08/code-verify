# frontend/Dockerfile
# Build stage
FROM node:14-alpine as build

WORKDIR /app/frontend

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/frontend/build ./frontend/build

# Install serve to serve static files
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "frontend/build", "-l", "3000"]
