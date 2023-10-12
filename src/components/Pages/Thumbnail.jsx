import React from "react"

export default function Thumbnail ({image, isNew}) {
  console.log('Thumbnail image: ', image);
  console.log('Thumbnail isNew: ', isNew);
  return (
    <div className="thumbnail">
      {isNew && <span className='new-tag'>new</span>}
      <img 
        className="photo"
        src={image}
        alt='thumbnail'
      />
    </div>
  );
}
