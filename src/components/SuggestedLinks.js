import React from "react";
import { FirestoreCollection } from "react-firestore";
import { getToken } from "../lib/tokenServices";
import { ReactComponent as Loader } from "../images/loader.svg";

const SuggestedLinks = () => {
  return (
    <FirestoreCollection
      path="Urls"
      filter={["token", "==", getToken()]}
      render={({ isLoading, data }) => {
        return isLoading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          <div>
            <ul>
              {data.map((url) => (
                <li key={url.id} className="list-item">
                  <div className="name">{url.name}</div>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
};

export default SuggestedLinks;
