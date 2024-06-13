import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:any) {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo:any) {
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  