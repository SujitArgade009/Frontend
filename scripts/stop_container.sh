#!/bin/bash
set -e

# Stop the running container (if any)
containerid=$(docker ps -q)  # Get the container ID of the running container

if [ -n "$containerid" ]; then
    echo "Stopping container with ID: $containerid"
    docker rm -f $containerid  # Force stop and remove the container
else
    echo "No running container found."
fi
