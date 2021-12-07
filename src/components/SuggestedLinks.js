import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { token } from "../lib/tokenServices";
import { db } from "../firebase";
import { ReactComponent as Loader } from "../images/loader.svg";

const SuggestedLinks = () => {
  const [value, loading, error] = useCollection(
    db.collection("Urls").where("token", "==", token)
  );

  return (
    <div>
      {error && <p>Error</p>}
      {loading && <Loader />}
      {value && (
        <div>
          Your Suggested Links:
          <ul>
            {value.docs.map((doc) => (
              <li key={doc.id}>{doc.data().name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SuggestedLinks;

//     <div>
//       <ul>
//         {data.map((url) => (
//           <li key={url.id} className="list-item">
//             <div className="name">{url.name}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
// );
// };
