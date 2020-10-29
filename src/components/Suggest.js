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
      <div class="pa4-l">
        <form onSubmit={addToDatabase} className="bg-orange mw7 center pa4 br2-ns ba b--black-10">
          <fieldset class="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns biryani-black mb3 white">SUGGEST YOUR MIX URL</legend>
              <div className="cf">
                <label className="clip" htmlFor="url-item">url address</label>
                  <input onChange={handleInputChange} 
                        className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                        placeholder="Add url.." 
                        type="text" 
                        name="url-item" 
                        value={urlItem} 
                        id="url-item" />
                  <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                        type="submit" 
                        value="+" />
                </div>
            </fieldset>
        </form>
        <SuggestedLinks />
      </div>
    )
}

export default Suggest;
