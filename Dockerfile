FROM node:20.12.1

# Copy package.json and package-lock.json to the container.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the frontend app.
RUN npm run build

# Expose the frontend port.
EXPOSE 5173

# Serve the frontend build using 'vite preview'.
CMD ["npm", "run", "dev"]
