#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull sujitargade007/sujit-github-frontend:latest

# Run the Docker image as a container
docker run -d -p 8000:8000 sujitargade007/sujit-github-frontend:latest