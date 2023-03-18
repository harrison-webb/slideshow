#!/bin/bash

# Function to stop the Node server and the React app
cleanup() {
  echo "Stopping Node server and React app..."
  kill $NODE_PID $REACT_PID
}

# Capture the SIGINT signal to perform cleanup
trap cleanup SIGINT

# Navigate to the project directory
cd ~/Laboratory/slideshow

# Start the Node server in the background
node server.js &
NODE_PID=$!

# Start the React app in a new process
npm start &
REACT_PID=$!

# Wait for the server to start and then open the app in Safari
sleep 3
open -a Safari http://localhost:3000

# Wait for the React app to exit before stopping the script
wait $REACT_PID

# Cleanup when the script exits
cleanup
