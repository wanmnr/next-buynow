// constants/errors.ts
export const ERROR_MESSAGES = {
    general: 'Something went wrong. Please try again later.',
    notFound: 'The requested resource was not found.',
    unauthorized: 'You must be logged in to access this resource.',
    forbidden: 'You do not have permission to access this resource.',
    validation: {
      required: 'This field is required.',
      email: 'Please enter a valid email address.',
      password: 'Password must be at least 8 characters long.',
      passwordMatch: 'Passwords do not match.',
    },
  }