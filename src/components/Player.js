/* global Mixcloud*/
import React, { useRef, useEffect, useContext } from "react";

import MixContext from "../context/mix-context";

const Player = () => {
  const context = useContext(MixContext);
  const { setWidget, setCurrentMix, currentMix } = context;

  const playerRef = useRef();

  useEffect(() => {
    const widget = Mixcloud.PlayerWidget(playerRef.current);

    setCurrentMix(playerRef.current.id);

    const setupWidget = async (widget) => {
      await widget.ready;

      setWidget(widget);
    };

    setupWidget(widget);
  }, [setCurrentMix, setWidget]);

  useEffect(() => {
    const iframe = playerRef.current;

    const replaceSrc = (iframe) => {
      const srcBase =
        "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=";

      iframe.removeAttribute("src");

      requestAnimationFrame(() => {
        iframe.src = srcBase + currentMix;
      });
    };

    replaceSrc(iframe);
  }, [currentMix]);

  //   const splitCurrentMix = currentMix.split("/");
  //   let channelName = splitCurrentMix[1];
  //   let artistName = splitCurrentMix[2];
  //   console.log(currentMix);

  return (
    <iframe
      ref={playerRef}
      title="mixcloud-iframe"
      sandbox="allow-scripts allow-same-origin"
      width="100%"
      height="60"
      className="db fixed bottom-0 z-5"
      src="%2Fthemixtapeclub%2Fthe-mixtape-shop-week-18b-2021%2F"
      id="/themixtapeclub/the-mixtape-shop-week-18b-2021/"
    ></iframe>
  );
};

export default Player;
