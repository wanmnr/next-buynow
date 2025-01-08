// lib/validation.ts

// Security:
// Password validation is crucial for user account security
// Helps prevent weak passwords
// Reduces security vulnerability risks

// User Experience:
// Email validation prevents typos in email addresses
// Clear password requirements help users create valid passwords
// Immediate feedback on input errors

export function validateEmail(email: string): {
  isValid: boolean;
  error?: string;
} {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    error: emailRegex.test(email)
      ? undefined
      : "Please enter a valid email address",
  };
}

export function validatePassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const requirements = [
    {
      test: (pwd: string) => pwd.length >= 8,
      message: "Password must be at least 8 characters long",
    },
    {
      test: (pwd: string) => /[A-Z]/.test(pwd),
      message: "Password must contain at least one uppercase letter",
    },
    {
      test: (pwd: string) => /[a-z]/.test(pwd),
      message: "Password must contain at least one lowercase letter",
    },
    {
      test: (pwd: string) => /[0-9]/.test(pwd),
      message: "Password must contain at least one number",
    },
    {
      test: (pwd: string) => /[!@#$%^&*]/.test(pwd),
      message:
        "Password must contain at least one special character (!@#$%^&*)",
    },
  ];

  requirements.forEach(({ test, message }) => {
    if (!test(password)) {
      errors.push(message);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateUsername(username: string): {
  isValid: boolean;
  error?: string;
} {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return {
    isValid: usernameRegex.test(username),
    error: usernameRegex.test(username)
      ? undefined
      : "Username must be 3-20 characters and may contain letters, numbers, underscores, and hyphens",
  };
}
