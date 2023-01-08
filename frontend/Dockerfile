

FROM node:16.17.1-alpine3.16 as build
ENV NODE_ENV development
# Add a work directory
WORKDIR /frontend
# Cache and Install dependencies
COPY package.json .
# COPY package-lock.lock .
RUN yarn install
# Copy App files
COPY . .


FROM build AS development
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]


FROM build AS production

RUN npm ci
RUN npm run build
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "preview" ]