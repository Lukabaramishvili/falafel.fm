import React, {useState} from 'react';
import { db } from '../firebase';
import SuggestedLinks from './SuggestedLinks';

const Suggest = () => {

    const userInput = {
      name: '',
      link: '',
      date: null
    }

    const [ enteredValue, setEnteredValue ] = useState(userInput);
    const [ showForm, setShowForm ] = useState(null);

    const handleInputChange = (e) => {
      setEnteredValue({ ...enteredValue, [e.target.name]: e.target.value });
    }
    
    const addToDatabase = (e) => {
    e.preventDefault();
    db.collection('Urls')
      .add({
        name: enteredValue.name,
        link: enteredValue.link,
        date: new Date()
      })
      .then((res) => {
        alert('Successfully added to database, 🎉');
      })
      .catch((err) => {
        console.log(err);
      });
      resetInputs();
    }

    const resetInputs = () => {
      setEnteredValue(userInput);
    };

    const slideUp = () => {
      setShowForm('slide-up')
    }

    return (
      <div className="ph3 ph4-l pad-bottom">
        <h1 className="heading heading-orange">
          Suggest
        </h1>
      
        <div className="flex flex-wrap mb4 mb5-ns">
          {/* <div className= sm-col-6 cover register-image"></div> */}
            <div className="register relative bc orange">
              <div onClick={slideUp} className={`front location flex flex-wrap pa4 items-center bc relative z-2 ${showForm ? 'slide-up' : ""}`}>
                <p className="mt0 mb4">
                  Suggestion is the most exciting part of Falafel.fm. Here you can provide a link to a mix or set that you recently listened and liked.
                </p>
                <p className="mt0 mb4">
                  After you submit your link, we will listen and see if the music fits the overall mood of the radio.
                </p>
                <button className="add-button add-button-small add-button-outline register-button">Add</button>
              </div>
              {/* Form */}
              <form
              onSubmit={addToDatabase}
              className="back form z-1 pa4"
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
                  <button className="add-button add-button-small">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <SuggestedLinks />
      </div>
    )
}

export default Suggest;
