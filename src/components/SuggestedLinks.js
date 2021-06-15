import React from 'react';
import { FirestoreCollection } from 'react-firestore';

const SuggestedLinks = () => {
    return (
        <FirestoreCollection
        path="Urls"
        render={({ isLoading, data }) => {
          return isLoading ? (
            <div className="m-auto">Loading...</div>
          ) : (
            <div>
              <ul>
                {data
                  .map((url) => (
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
}

export default SuggestedLinks;
