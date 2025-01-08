// app/store/features/user/userThunks.ts

import { LoginCredentials, RegisterCredentials } from "../../../types/user";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { AppDispatch } from "../../store";

export const loginUser =
  (credentials: LoginCredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());

      // Replace with your actual API call
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
      dispatch(loginSuccess(user));

      // Store token in localStorage
      localStorage.setItem("token", user.token);
    } catch (error) {
      dispatch(
        loginFailure(error instanceof Error ? error.message : "Login failed")
      );
    }
  };

export const registerUser =
  (credentials: RegisterCredentials) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginStart());

      // Replace with your actual API call
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
      dispatch(loginSuccess(user));

      // Store token in localStorage
      localStorage.setItem("token", user.token);
    } catch (error) {
      dispatch(
        loginFailure(
          error instanceof Error ? error.message : "Registration failed"
        )
      );
    }
  };
