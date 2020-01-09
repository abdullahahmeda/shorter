import React from "react";
import { navigate } from "@reach/router";
import { readLink } from "./firebase/databaseMethods";

class Redirector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      originalLink: "",
      error: null
    };
  }

  componentDidMount() {
    readLink(this.props.link).then(res => {
      this.setState({
        originalLink: res
      });

      if (this.state.originalLink) {
        navigate(this.state.originalLink);
      } else {
        this.setState({
          error: true
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.error ? (
            <div>
              <h1>Error 404</h1>
              <p>
                Sorry, but the link you requested may be broken or does not
                exist.
              </p>
            </div>
          ) : (
            <p>Redirecting...</p>
          )}
        </div>
      </div>
    );
  }
}
export default Redirector;
