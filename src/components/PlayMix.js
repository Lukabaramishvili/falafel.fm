import React, { useContext } from 'react';
import classNames from 'classnames';

import MixContext from '../context/mix-context';

const PlayMix = ({ id, children, className }) => {
	const { playMix, currentMix, playing } = useContext(MixContext)

	return (
		// when our currently playing mix equals the id of the mix
		// that this component refers to, we will add a class name
		// of 'playing' or 'loading'
		<div
			className={classNames({
				[className]: className,
				playing: id === currentMix && playing,
				loading: id === currentMix && !playing,
			})}
			onClick={() => playMix(id)}
		>
			{children}
		</div>
	)
}

export default PlayMix;