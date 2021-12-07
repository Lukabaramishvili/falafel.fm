import React from "react";

const SubmitButton = ({ notPassed, hasToken, slideUp }) => {
  return (
    <>
      {notPassed && hasToken ? (
        <em className="disable-message">
          You have already added one link today. The form will be disabled next
          24 hrs.
        </em>
      ) : (
        <button
          onClick={slideUp}
          className="add-button add-button-small add-button-outline"
        >
          Add Link
        </button>
      )}
    </>
  );
};

export default SubmitButton;
