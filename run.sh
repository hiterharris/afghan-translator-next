#!/bin/bash

# Initialize variables
VAR1="npm run start-local"
VAR2="npm run start-dev"
VAR3="npm run start-prod"

# Function to display usage information
usage() {
  echo "Usage: $0 [-l | -d | -p]"
  exit 1
}

# Parse options
while getopts ":ldp" opt; do
  case $opt in
    l)
      FLAG="LOCAL"
      ;;
    d)
      FLAG="DEV"
      ;;
    p)
      FLAG="PROD"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      usage
      ;;
  esac
done

# Check if a flag is provided
if [ -z "$FLAG" ]; then
  echo "No flag provided."
  usage
fi

# Determine which variable to use based on the flag
if [ "$FLAG" == "LOCAL" ]; then
  VARIABLE_TO_USE=$VAR1
elif [ "$FLAG" == "DEV" ]; then
  VARIABLE_TO_USE=$VAR2
elif [ "$FLAG" == "PROD" ]; then
  VARIABLE_TO_USE=$VAR3
else
  echo "Invalid flag."
  usage
fi

# Function to handle termination signals
cleanup() {
  echo "Terminating both processes..."
  kill $PID_API
  kill $PID_NEXT
  wait $PID_API
  wait $PID_NEXT
  echo "Both processes terminated."
  exit 0
}

# Set up the trap for termination signals
trap cleanup SIGINT SIGTERM EXIT

# Run the commands for both projects
cd ../afghan-translator-api && npm start &
PID_API=$!

cd ~/Desktop/afghan-translator/afghan-translator-next && $VARIABLE_TO_USE &
PID_NEXT=$!

# Wait for both processes to finish
wait $PID_API
wait $PID_NEXT
