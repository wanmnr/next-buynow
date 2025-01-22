/**
 * @file errorHandler.ts
 * @description Redux middleware for handling errors and state changes in the application
 */

import { Middleware, Action, isAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

/** Action type constants */
const ACTION_TYPES = {
  ERROR_OCCURRED: "error/occurred",
  ERROR_LOGGED: "error/logged",
  STATE_CHANGED: "state/changed",
} as const;

/**
 * Interface for error action payload
 */
interface ErrorActionPayload {
  error: string;
  action: string;
}

/**
 * Interface for error action
 * @extends {Action<typeof ACTION_TYPES.ERROR_OCCURRED>}
 */
interface ErrorAction extends Action<typeof ACTION_TYPES.ERROR_OCCURRED> {
  payload: ErrorActionPayload;
  [key: string]: unknown;
}

/**
 * Interface for error logged action
 * @extends {Action<typeof ACTION_TYPES.ERROR_LOGGED>}
 */
interface ErrorLoggedAction extends Action<typeof ACTION_TYPES.ERROR_LOGGED> {
  payload: unknown;
  [key: string]: unknown;
}

/**
 * Interface for state changed action
 * @extends {Action<typeof ACTION_TYPES.STATE_CHANGED>}
 */
interface StateChangedAction extends Action<typeof ACTION_TYPES.STATE_CHANGED> {
  [key: string]: unknown;
}

/**
 * Error handler middleware for Redux
 * Handles error logging, state changes, and authenticated user actions
 *
 * @type {Middleware}
 *
 * @param store - The Redux store instance
 * @returns {Function} Middleware function
 */
export const errorHandler: Middleware =
  (store) => (next) => (action: unknown) => {
    try {
      const currentState = store.getState() as RootState;

      // Handle authenticated user actions
      if (currentState.user.isAuthenticated) {
        // Implement authenticated user specific logic here
      }

      // Handle error logging
      if (isAction(action) && action.type === "error/action") {
        const errorLoggedAction: ErrorLoggedAction = {
          type: ACTION_TYPES.ERROR_LOGGED,
          payload: action,
        };
        store.dispatch(errorLoggedAction);
      }

      // Process the action
      const result = next(action);

      // Monitor state changes
      const newState = store.getState() as RootState;
      if (newState.user !== currentState.user) {
        const stateChangedAction: StateChangedAction = {
          type: ACTION_TYPES.STATE_CHANGED,
        };
        store.dispatch(stateChangedAction);
      }

      return result;
    } catch (err) {
      console.error("Middleware Error:", err);

      // Create error action
      const errorAction: ErrorAction = {
        type: ACTION_TYPES.ERROR_OCCURRED,
        payload: {
          error: err instanceof Error ? err.message : "Unknown error occurred",
          action: isAction(action) ? action.type : "unknown",
        },
      };

      store.dispatch(errorAction);
      throw err;
    }
  };

export const createErrorAction = (
  error: string,
  actionName: string
): ErrorAction => ({
  type: ACTION_TYPES.ERROR_OCCURRED,
  payload: {
    error,
    action: actionName,
  },
});
