// Define the Store class to manage state, dispatch actions, and handle subscribers
class Store {
    constructor(reducer) {
      this.reducer = reducer; // Reducer function to manage state updates
      this.state = this.reducer(undefined, {}); // Initialize state using the reducer with an empty action
      this.listeners = []; // Array to hold subscriber functions
    }
  
    // Method to get the current state
    getState() {
      return this.state;
    }
  
    // Method to dispatch actions and update the state
    dispatch(action) {
      this.state = this.reducer(this.state, action); // Update the state using the reducer and action
      this.listeners.forEach(listener => listener()); // Notify all subscribers of the state change
    }
  
    // Method to subscribe to state changes
    subscribe(listener) {
      this.listeners.push(listener); // Add the listener to the array
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener); // Return a function to remove the listener
      };
    }
  }
  
  // Define the initial state and reducer function
  const initialState = { count: 0 };
  
  function counterReducer(state = initialState, action) {
    // Handle actions to update the state
    switch (action.type) {
      case 'ADD':
        return { count: state.count + 1 }; // Increment the count
      case 'SUBTRACT':
        return { count: state.count - 1 }; // Decrement the count
      case 'RESET':
        return { count: 0 }; // Reset the count to 0
      default:
        return state; // Return the current state if action is unrecognized
    }
  }
  
  // Create an instance of the Store with the counterReducer
  const store = new Store(counterReducer);
  
  // Subscribe to state changes and log the new state to the console
  store.subscribe(() => {
    console.log('State:', store.getState()); // Log the current state whenever it changes
  });
  
  // Function to dispatch actions demonstrating the scenarios
  function dispatchActions() {
    console.log('Initial state:', store.getState()); // Log the initial state (Scenario 1)
  
    // Scenario 2: Dispatch ADD actions to increment the counter
    store.dispatch({ type: 'ADD' }); // Increment the count by 1
    store.dispatch({ type: 'ADD' }); // Increment the count by another 1, resulting in 2
  
    // Scenario 3: Dispatch SUBTRACT action to decrement the counter
    store.dispatch({ type: 'SUBTRACT' }); // Decrement the count by 1, resulting in 1
  
    // Scenario 4: Dispatch RESET action to reset the counter
    store.dispatch({ type: 'RESET' }); // Reset the count to 0
  }
  
  // Run the function to dispatch actions and demonstrate the scenarios
  dispatchActions();
  