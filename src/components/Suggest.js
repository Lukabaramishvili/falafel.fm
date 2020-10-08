import React, {useState} from 'react';
import { db } from '../firebase';
import SuggestedLinks from './SuggestedLinks';

const Suggest = () => {
    const [ urlItem, setUrlItem ] = useState([]);

    const handleInputChange = (e) => {
        setUrlItem(e.target.value)
    }
    
    const addToDatabase = (e) => {
    e.preventDefault();
    db.collection('Urls')
      .add({
        name: urlItem
      })
      .then((res) => {
        setUrlItem('');
        alert('Successfully added to database, 🎉');
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return (
    <div>
        <form onSubmit={addToDatabase} className="add-item-form">
            <label htmlFor="url-item">url</label>
                <input
                    name="list-item"
                    id="list-item"
                    onChange={handleInputChange}
                    value={urlItem}
                    placeholder="Add Url"
                />
            <button className="add-item-btn">Add</button>
        </form>
        <SuggestedLinks />
    </div>
    )
}

export default Suggest;
