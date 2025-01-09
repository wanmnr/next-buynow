// app/store/middleware/errorHandler.ts

// check the state before/after actions
// dispatch additional actions in response to errors
// implementing complex error handling logic that depends on the current state

import { Middleware } from "@reduxjs/toolkit";

export const errorHandler: Middleware = (store) => (next) => (action) => {
  // Complex version
  try {
    // Access current state
    const currentState = store.getState();

    // You can check state before proceeding
    if (currentState.user.isAuthenticated) {
      // Do something with authenticated user
    }

    // You can dispatch additional actions
    if (action.type === "some/errorAction") {
      store.dispatch({ type: "error/logged", payload: action.payload });
    }

    // Proceed with the original action
    const result = next(action);

    // You can also check state after the action
    const newState = store.getState();
    if (newState.someValue !== currentState.someValue) {
      // React to state changes
      store.dispatch({ type: "state/changed" });
    }

    return result;
  } catch (err) {
    console.error("Caught an exception:", err);
    // You could dispatch error-specific actions
    store.dispatch({
      type: "error/occurred",
      payload: {
        error: err.message,
        action: action.type,
      },
    });
    throw err;
  }
};
