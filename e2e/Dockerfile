FROM node:alpine
WORKDIR /usr/src/app
COPY . .
RUN npm i -g pnpm
RUN pnpm install
CMD ["pnpm", "test"]