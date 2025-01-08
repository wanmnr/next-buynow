// app/components/auth/LoginForm.tsx

import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
} from "../../store/features/user/userSelectors";
import { loginUser } from "../../store/features/user/userThunks";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};
