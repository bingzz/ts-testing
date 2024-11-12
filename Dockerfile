# Select Node Version
FROM node:16.14.2-alpine

# COPY <local file> <destination file>
COPY ./package*.json ./

# SHELL FORM
RUN npm install

# COPY . . -> commonly used
COPY ./dist /dist

# Environment Variable
ENV PORT=3000

EXPOSE 8080

# EXEC FORM
CMD ["node", "dist/server.js"]

# Commands
# docker build -t <username/imagename> .
# docker run -p <local port>: <container port> <image id>
