import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PlayMix from "./PlayMix";
import PlayButton from "./PlayButton";

import MixContext from "../context/mix-context";

const FeaturedMix = () => {
  const { mixes, featuredMix, currentMix, playing } = useContext(MixContext);
  const [featMix, setFeatMix] = useState("");

  const getTitle = () => {
    if (featuredMix) {
      return "Currently viewing";
    } else if (currentMix && playing) {
      return "Currently playing";
    } else {
      return "Featured mix";
    }
  };

  useEffect(() => {
    const getFeat = () => {
      let featMix;

      featuredMix
        ? ([featMix] = mixes.filter((mix) => mix.id === featuredMix))
        : ([featMix] = mixes.filter((mix) => mix.id === currentMix));

      const [firstMix = {}] = mixes;

      return setFeatMix(featMix || firstMix);
    };

    getFeat();
  }, [currentMix, featuredMix, mixes]);

  const { id, slug, name, pictures = {}, picture_primary_color } = featMix;

  return (
    <>
      {featMix && (
        <div
          className="w-50-l vh-100 flex items-center justify-center cover bg-center bg-featured pad-bottom fixed-l left-0 mix-overlay"
          style={{
            backgroundImage: `url(${pictures.extra_large})`,
            backgroundColor: `#${picture_primary_color}`
          }}
        >
          <div className="w-100 tc pa3 relative z-2">
            <p className="b biryani f6 white ttu">{getTitle()}</p>
            <h1 className="mix-title mt0 mb3 anton white ttu">{name}</h1>

            <Link
              to={`/show/${slug}`}
              className="absolute absolute--fill z-3"
            ></Link>

            <PlayMix id={id} className="relative z-5 pointer">
              <PlayButton />
            </PlayMix>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedMix;
