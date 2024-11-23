// components/shared/ErrorBoundary.tsx
"use client";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

interface ErrorFallbackProps {
  readonly error?: Error;
  readonly reset: () => void;
}

const ErrorFallback = ({ error, reset }: ErrorFallbackProps) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Oops, something went wrong!
      </h2>
      {process.env.NODE_ENV === "development" && error?.message && (
        <p className="text-red-600 mb-4">{error.message}</p>
      )}
      <button
        type="button"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  </div>
);

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    // Log to an error reporting service here
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("ErrorBoundary caught an error:", errorInfo);
    }
  }

  private readonly handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <ErrorFallback 
            error={this.state.error}
            reset={this.handleReset}
          />
        )
      );
    }

    return this.props.children;
  }
}