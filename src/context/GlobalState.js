import React, { useContext, useState, useEffect } from 'react';

import MixContext from './mix-context';

const GlobalState = (props) => {
	const { mixesIds } = useContext(MixContext)

	const [mixes, setMixes] = useState([])
	const [widget, setWidget] = useState({})
	const [currentMix, setCurrentMix] = useState('')
	const [playing, setPlaying] = useState(false)
	const [featuredMix, setFeaturedMix] = useState('')

	const getMixFromSlug = async (mixes, slug) => {
		const result = await mixes.filter((mix) => mix.slug === slug)

		if (result) return result[0]
	}

	const playMix = (mixName) => {
		if (!widget) return

		if (currentMix === mixName) {
			widget.togglePlay()

			widget.events.pause.on(() => setPlaying(false))
			widget.events.play.on(() => setPlaying(true))

			return
		}

		if (currentMix !== mixName) {
			setCurrentMix(mixName)

			widget.load(mixName, false)

			setPlaying(false)

			widget.events.pause.on(() => setPlaying(false))
			widget.events.play.on(() => setPlaying(true))

			return
		}
	}

	useEffect(() => {
		const fetchingMixes = (mixesIds) => {
			return Promise.all(
				mixesIds.map((id) =>
					fetch(`https://api.mixcloud.com${id}`)
						.then((response) => response.json())
						.then((data) => data)
				)
			)
		}

		const updateWithIds = (mixes) => {
			return mixes.map((mix) => ({
				...mix,
				id: mix.key,
			}))
		}

		const setData = async (mixesIds) => {
			const mixesWithoutIds = await fetchingMixes(mixesIds)
			const mixesWithIds = await updateWithIds(mixesWithoutIds)

			return setMixes(mixesWithIds)
		}

		setData(mixesIds)
	}, [mixesIds, setMixes])

	return (
		<MixContext.Provider
			value={{
				mixes,
				playMix,
				setPlaying,
				setCurrentMix,
				setWidget,
				playing,
				currentMix,
				widget,
				getMixFromSlug,
				featuredMix,
				setFeaturedMix,
			}}
		>
			{props.children}
		</MixContext.Provider>
	)
}

export default GlobalState;