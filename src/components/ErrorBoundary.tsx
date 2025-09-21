import React, { Component, ReactNode } from 'react';
import ErrorPage from '../pages/ErrorPage';
import { ButtonAction } from '../types/ui';

type ErrorBoundaryProps = {
  children: ReactNode;
  errorMessage?: string;
  errorDescription?: string;
  actionLabel?: string;
  action?: () => void;
  linkTo?: string;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: unknown | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  resetBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const buttonAction: ButtonAction | undefined = this.props.actionLabel
        ? {
            label: this.props.actionLabel,
            onClick: () => {
              if (this.props.action) {
                this.props.action();
              }
              this.resetBoundary();
            },
            linkTo: this.props.linkTo,
          }
        : undefined;

      try {
        return (
          <ErrorPage
            errorMessage={
              this.props.errorMessage || 'Oops! Something went wrong.'
            }
            errorDescription={
              this.props.errorDescription ||
              'We are working to fix it. Please try reloading the page.'
            }
            buttonAction={buttonAction}
          />
        );
      } catch (e) {
        console.error('Error rendering ErrorPage', e);
        return <div style={{ padding: 20 }}>Something went wrong</div>;
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
