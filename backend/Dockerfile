FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy source and build
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --only=production

EXPOSE 5000

CMD ["node", "dist/index.js"]