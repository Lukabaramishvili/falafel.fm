import React, { useContext } from 'react';
import Stat from './Stat';

import MixContext from '../context/mix-context';

const About = () => {
	const { mixes } = useContext(MixContext)

	return (
		<div className="ph3 ph4-l pad-bottom">
			<div className="measure center lh-copy">
				<p className="mt0">
					Falafel.fm features the latest and greatest in grooves, beats and
					world music.
				</p>
				<p className="mb3">
					Whether you’re into funk, soul, classic jazz, fusion jazz, afro
					beat or break beat… we got you covered!
				</p>
				<p className="mt0">
					Currated by me (Luka.B)
				</p>
			</div>

			<div>
				<Stat
					statName="Featuring..."
					statNumber={mixes.length}
					statWord="mixes"
				/>
				<Stat
					statName="Played..."
					statNumber={mixes.reduce(
						(accum, current) => accum + current.play_count,
						0
					)}
					statWord="times"
				/>
				<Stat
					statName="With..."
					statNumber={mixes.reduce(
						(accum, current) => accum + current.audio_length,
						0
					)}
					statWord="seconds"
				/>
			</div>
		</div>
	)
}

export default About;