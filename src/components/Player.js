/* global Mixcloud*/
import React, { useRef, useEffect, useContext } from 'react';

import MixContext from '../context/mix-context';

const Player = () => {
	const context = useContext(MixContext)
	const { setWidget, setCurrentMix, currentMix } = context

	const playerRef = useRef()

	useEffect(() => {

		const widget = Mixcloud.PlayerWidget(playerRef.current)

		setCurrentMix(playerRef.current.id)

		const setupWidget = async (widget) => {
			await widget.ready

			setWidget(widget)
		}

		setupWidget(widget)
	}, [setCurrentMix, setWidget])

	useEffect(() => {
		const iframe = playerRef.current

		const replaceSrc = (iframe) => {
			const srcBase =
				'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed='

			iframe.removeAttribute('src')

			requestAnimationFrame(() => {
				iframe.src = srcBase + currentMix
			})
		}

		replaceSrc(iframe)
	}, [currentMix])

	return (
		<iframe
			ref={playerRef}
			title="mixcloud-iframe"
			sandbox="allow-scripts allow-same-origin"
			width="100%"
			height="60"
			className="db fixed bottom-0 z-5"
			src="%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
			id="/NTSRadio/floating-points-jamie-xx-18th-august-2016/"
		></iframe>
	)
}

export default Player;