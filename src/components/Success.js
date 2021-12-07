import React from "react";
import { ReactComponent as Happy } from "../images/happy-face.svg";

const Success = ({ hasToken }) => (
  <div className="pa4 bc mb2">
    <div className="success-container bc orange">
      {hasToken && (
        <>
          <Happy />
          <h4 className="success-message">We are excited!</h4>
          <p className="success-message-sub">
            We will listen to your suggestion. Meanwhile, check out{" "}
            <a href="/archive" className="archive-link">
              Falafel Archive
            </a>
          </p>
        </>
      )}
    </div>
  </div>
);

export default Success;
