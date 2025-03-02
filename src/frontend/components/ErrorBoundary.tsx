import React, { ReactNode } from "react";

// define props interface

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

// define state interface
interface ErrorBoundaryState {
    hasError:boolean;
    error:Error|null;
    errorInfo:React.ErrorInfo|null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state:ErrorBoundaryState = {
        hasError: false,
        error: null,
        errorInfo: null,
    }

    // static methods to catch error
    static getDerivedStateFromError(error:Error):Partial<ErrorBoundaryState> {
        return {
            hasError: true,
            error: error,
        }
    }

    // Log error details
    componentDidCatch(error:Error, errorInfo:React.ErrorInfo):void {
        console.error("Error occurred:", error, errorInfo);
        this.setState({
            error,
            errorInfo
        })
    }

    render():ReactNode {
        if (this.state.hasError) {
            // Use custom fallback if provided, otherwise default UI
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h1>Something went wrong!</h1>
                    <p>We apologize for the inconvenience.</p>

                    {this.state.error && (
                        <pre style={{ color: "red" }}>{this.state.error.message}</pre>
                    )}

                    {this.state.errorInfo && (
                        <details style={{ whiteSpace: "pre-wrap" }}>
                            {this.state.errorInfo.componentStack}
                        </details>
                    )}
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;