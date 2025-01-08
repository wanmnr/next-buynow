// app/store/features/user/userThunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentials, RegisterCredentials } from "../../../types/user";

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials: LoginCredentials) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const user = await response.json();
    localStorage.setItem("token", user.token);
    return user;
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (credentials: RegisterCredentials) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    const user = await response.json();
    localStorage.setItem("token", user.token);
    return user;
  }
);
