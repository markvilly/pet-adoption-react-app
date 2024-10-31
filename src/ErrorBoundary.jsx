import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
    //static can be called directly on the class itself.
  }

  ComponentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    console.log(this.state);
    if (this.state.hasError)
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
