import React from "react";
import Thumbnail from './Thumbnail';
import './Home.css';

export default function ProjectCard({projId, image, imageClass, location, title, price, dday, isNew}) {

  return (
  <div className="project-card">
    <Thumbnail projId={projId} image={image} isNew={isNew} imageClass={imageClass}/>
    <h5 className='pc-title'>{title}</h5>
    <span className='pc-location'>{location}</span>
    <span className=''> | </span>
    <span className='pc-price'>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</span>
    
  </div>
  )
}
