// app/store/middleware/errorHandler1.ts

// simple error handler

import { isAction, Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const errorHandler: Middleware<object, RootState> = (store) => (next) => (action: unknown) => {
  try {
    const currentState = store.getState();
    
    // Only proceed with authenticated users if needed
    if (currentState.user.isAuthenticated) {
      return next(action);
    }

    return next(action);
  } catch (err) {
    console.error("Caught an exception:", err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    
    store.dispatch({
      type: "error/occurred",
      payload: {
        error: errorMessage,
        actionType: isAction(action) ? action.type : 'unknown',
      },
    });
    
    throw err;
  }
};