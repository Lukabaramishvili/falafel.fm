import React from "react";

const Form = ({
  addToDatabase,
  isSubmitting,
  handleInputChange,
  enteredValue,
  handleSetToken
}) => {
  return (
    <form
      onSubmit={addToDatabase}
      className={`back form z-1 pa4 ${isSubmitting ? "processing" : ""}`}
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
  );
};

export default Form;
