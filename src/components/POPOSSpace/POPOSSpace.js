import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom'
import LikeButton from './LikeButton'


function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    return (
        <div className="POPOSSpace">

          <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="100%"alt="space_pic" />
          </Link>

          <Link className="POPOSSpace-title" to={`/details/${id}`}>
          <h1>{name}</h1>
          </Link>

          <div className="POPOSSpace-info">
                <div >{address}</div>
                <div>{hours}</div>
            <br></br>
            <LikeButton count='1'/>
            </div>

        </div>
      )
}

export default POPOSSpace