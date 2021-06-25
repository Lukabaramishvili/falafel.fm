import React, { useState } from "react";
import { db } from "../firebase";
// import SuggestedLinks from "./SuggestedLinks";
import generateToken from "../lib/tokens";
import { setToken, checkToken, getToken } from "../lib/tokenServices";

import { ReactComponent as Happy } from "../images/happy-face.svg";

const Success = () => (
  <div className="pa4 bc mb2">
    <div className="success-container bc orange">
      <Happy />
      <h4 className="success-message">We are excited!</h4>
      <p className="success-message-sub">
        We will listen to your suggestion. Meanwhile, check out{" "}
        <a href="/archive" className="archive-link">
          Falafel Archive
        </a>
      </p>
    </div>
  </div>
);

const Suggest = () => {
  const userInput = {
    name: "",
    link: "",
    date: null
  };

  const [enteredValue, setEnteredValue] = useState(userInput);
  const [showForm, setShowForm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hasToken, setHasToken] = useState(checkToken());

  const handleInputChange = (e) => {
    setEnteredValue({ ...enteredValue, [e.target.name]: e.target.value });
  };

  const addToDatabase = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
    db.collection("Urls")
      .add({
        name: enteredValue.name,
        link: enteredValue.link,
        token: getToken(),
        date: new Date()
      })
      .then((res) => {
        setShowSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
    resetInputs();
  };

  const resetInputs = () => {
    setEnteredValue(userInput);
  };

  const slideUp = () => {
    setShowForm("slide-up");
  };

  const handleSetToken = () => {
    if (getToken()) return;
    else {
      const token = generateToken();
      setToken(token);
      setHasToken(true);
    }
  };

  return (
    <div className="ph3 ph4-l pad-bottom">
      <h2 className="suggestion-title">Suggest</h2>
      {showSuccess ? (
        <Success />
      ) : (
        <div className="flex flex-wrap mb2 mb3-ns">
          <div className="suggest-form relative bc orange">
            <div
              className={`front location flex flex-wrap pa4 items-center bc relative z-2 ${
                showForm ? "slide-up" : ""
              }`}
            >
              <p className="mt0 mb4">
                Suggestion is the most exciting part of Falafel.fm. Here you can
                provide a link of the mix or the set that you recently listened
                and liked.
              </p>
              <p className="mt0 mb4">
                After you submit your link, we will listen and see if the music
                fits the overall mood of the radio.
              </p>
              <button
                onClick={slideUp}
                className="add-button add-button-small add-button-outline"
              >
                Add Link
              </button>
            </div>
            <form
              onSubmit={addToDatabase}
              className={`back form z-1 pa4 ${
                isSubmitting ? "processing" : ""
              }`}
            >
              <div className="spinner"></div>
              <h3 className="mt0 mb2 form-title">Your details</h3>
              <div className="form-fields">
                <input
                  onChange={handleInputChange}
                  name="name"
                  className="mb2 db"
                  placeholder="Name"
                  id="name"
                  value={enteredValue.name}
                  required
                />
                <input
                  onChange={handleInputChange}
                  name="link"
                  className="mb2 db"
                  placeholder="Link"
                  id="link"
                  value={enteredValue.link}
                  required
                />
                <div className="pt2">
                  <button
                    onClick={handleSetToken}
                    className="add-button add-button-small"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* {hasToken && <SuggestedLinks />} */}
    </div>
  );
};

export default Suggest;
