import React, { useState } from "react";
import { isUri } from "valid-url";
import "./css/UrlShortener.css";
import { writeLink } from "./firebase/databaseMethods";

const BASE_URI = window.location.origin;

const UrlShortener = () => {
  const [uri, setUri] = useState("");
  const [error, setError] = useState(null);
  const [shortLink, setShortLink] = useState(null);

  const shortenLink = () => {
    if (isUri(uri)) {
      setError(null);
      const newLinkObj = writeLink(uri);
      setShortLink(BASE_URI + "/" + newLinkObj.shortLink);
    } else {
      setError("Please enter a valid URL.");
    }
  };

  return (
    <div className="UrlShortener-wrapper">
      <div className="container">
        <div className="UrlShortener">
          <label htmlFor="url-field">URL:</label>
          <div className="field d-flex">
            <input
              id="url-field"
              className="url-field"
              placeholder="Enter URL..."
              onChange={e => setUri(e.target.value)}
            />
            <span className="field-focus"></span>
          </div>
          <div>{error}</div>
          <div className="d-flex">
            <button className="shorten-button c-pointer" onClick={shortenLink}>
              Shorten
            </button>
          </div>
        </div>
        {shortLink ? (
          <div className="short-link">
            <p aria-live="polite">
              Your generated link is: <a href={shortLink}>{shortLink}</a>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
