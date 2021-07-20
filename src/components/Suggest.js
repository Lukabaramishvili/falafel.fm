import React, { useState } from "react";
import { db } from "../firebase";
import { fromMilliSecToHours, getUTCNowInMilliSec } from "../lib/helpers";
// import SuggestedLinks from "./SuggestedLinks";
import Success from "./Success";
import Form from "./Form";
import generateToken from "../lib/tokens";
import { setToken, checkToken, getToken } from "../lib/tokenServices";

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

  // const isChecked = fromMilliSecToHours(getUTCNowInMilliSec() - timeClicked) < 24;

  return (
    <div className="ph3 ph4-l pad-bottom">
      <h2 className="suggestion-title">Suggest</h2>
      {showSuccess ? (
        <Success hasToken={hasToken} />
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
                and liked. <em>(You can add one link per day)</em>
              </p>
              <p className="mt0 mb4">
                After you submit your link, we will listen and see if the music
                fits the overall mood of the radio.
              </p>
              {hasToken ? (
                <>
                  <em className="disable-message">
                    You have already added one link today. The form will be
                    disabled next 24 hrs.
                  </em>
                </>
              ) : (
                <button
                  onClick={slideUp}
                  className="add-button add-button-small add-button-outline"
                >
                  Add Link
                </button>
              )}
            </div>
            <Form
              addToDatabase={addToDatabase}
              isSubmitting={isSubmitting}
              handleInputChange={handleInputChange}
              enteredValue={enteredValue}
              handleSetToken={handleSetToken}
            />
          </div>
        </div>
      )}
      {/* {hasToken && <SuggestedLinks />} */}
    </div>
  );
};

export default Suggest;
