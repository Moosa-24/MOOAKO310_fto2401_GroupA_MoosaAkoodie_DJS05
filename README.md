# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

# Tally App State Management

## How to Run the Code

1. Save the code into a JavaScript file, e.g., `tallyApp.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory where the file is saved.
4. Run the file using Node.js by executing `node tallyApp.js`.

## Overview

This project demonstrates a Redux-inspired store to manage the state of a Tally App. The store handles state changes and logs them to the console. The core functionalities include incrementing, decrementing, and resetting a counter.

## Approach

- Implemented a Store class to manage state, handle actions, and notify subscribers.
- Defined a pure reducer function to specify how the state changes in response to actions.
- Created and subscribed to the store to log state changes.
- Dispatched actions to demonstrate state management.

## Challenges

- Ensuring immutability in the state updates.
- Keeping the reducer function pure and handling actions appropriately.

The implementation successfully follows functional programming principles and the Observer pattern.

