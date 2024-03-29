import React from 'react';
import { Link } from 'react-router-dom';

import PlayMix from './PlayMix';
import PlayButton from './PlayButton';

const Mix = ({ mix }) => {
  const { id, name, pictures, slug } = mix;

  return (
    <div
      className='aspect-ratio aspect-ratio--3x4 pointer bg-black cover bg-center'
      style={{ backgroundImage: `url(${pictures.extra_large})` }}
    >
      <div className='ph3 pv4 aspect-ratio--object mix-overlay'>
        <div className='flex flex-column relative z-2'>
          <h1 className='f4 f3-l mv0 white ttu biryani pr2 lh-title'>{name}</h1>
        </div>
        <Link to={`/show/${slug}`} className='absolute absolute--fill z-3' />
        <PlayMix
          id={id}
          className='absolute bottom-1 left-1 z-5 flex items-left pointer'
        >
          <PlayButton />
        </PlayMix>
      </div>
    </div>
  );
};

export default Mix;
