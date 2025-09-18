# Use official Playwright base image (with browsers already installed)
FROM mcr.microsoft.com/playwright:v1.55.0-jammy

# Set working directory inside container
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci
RUN npm install -g allure-commandline --save-dev

# Copy rest of project files
COPY . .

# Create results folder
RUN mkdir -p /app/allure-results

# Add shell script to run tests and generate Allure report
COPY run-tests.sh ./
RUN chmod +x run-tests.sh

# Use the shell script as entrypoint
ENTRYPOINT ["./run-tests.sh"]
