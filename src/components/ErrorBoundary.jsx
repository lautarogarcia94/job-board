import React from 'react';
import ErrorPage from '../pages/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          errorMessage={
            this.props.errorMessage || 'Oops! Something went wrong.'
          }
          errorDescription={
            this.props.errorDescription ||
            'We are working to fix it. Please try reloading the page.'
          }
          buttonAction={this.props.action}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
