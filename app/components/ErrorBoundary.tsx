'use client'

import React, { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error silently in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-warm-beige px-6">
          <div className="text-center">
            <p className="text-2xl font-serif text-soft-charcoal mb-4">
              Something went wrong
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-3 bg-muted-rose text-white rounded-full"
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

