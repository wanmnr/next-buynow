// app/store/middleware/errorHandler.ts
import { Middleware } from '@reduxjs/toolkit';

export const errorHandler: Middleware = () => (next) => (action) => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception:', err);
        throw err;
    }
};