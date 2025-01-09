// app/store/middleware/errorHandler.ts

// basic error catching and logging
// For simple pass-through scenarios where you just want to monitor actions
// error handling is limited to logging and re-throwing

import { Middleware } from '@reduxjs/toolkit';

export const errorHandler: Middleware = () => (next) => (action) => {
    // Simple version
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception:', err);
        throw err;
    }
};