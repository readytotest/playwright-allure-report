#!/bin/bash

#-------
# INSTRUCTIONS
# Make sure you are in the root directory of the repo
# To make the script executable, run:
# chmod +x start-server.sh
# You only need to run the above command the very first time
# Then to run the script just type in ./start-server.sh from the
# root of this repo in the VS Code terminal
# Leave the terminal open while the server is running
# Go to http://localhost:3000
# Press CTRL+C to stop the server
#-------

# Check if port 3000 is already in use
if lsof -i:3000 | grep -q LISTEN; then
  echo "### 🚫 Port 3000 is already in use."
  echo "### 🌐 Go to http://localhost:3000 and see what happens."
  echo "### 🔍 Type in lsof -i:3000 in your terminal to find the PID of what's running."
  echo "### 💀 Type kill -9 (PID) in your terminal to end service."
  echo "### ❌ Script will now exit!"
  exit 1
fi

# Start the Node server and store its process ID (PID)
node server.js &
NODE_PID=$!

# Print the initial message
echo "### 🚀 The server is attempting to start..."

# Function to handle termination and clean up
cleanup() {
  echo "🛑 Stopping Node server..."
  kill $NODE_PID
  exit 1
}

# Trap SIGINT (Ctrl+C) and call the cleanup function
trap cleanup SIGINT

echo "### ⏳ Waiting 5 seconds for server to start."
sleep 5

# Check if the server is running on port 3000
if lsof -i:3000 | grep -q LISTEN; then
  echo "### ✅ Open your browser and type in http://localhost:3000"
  echo "### ❕ Press CTRL+C to stop the server."
else
  echo "❌ Node server failed to start."
  cleanup
fi

# Keep the script running indefinitely until you manually stop it
wait $NODE_PID
