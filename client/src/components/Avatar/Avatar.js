import React from 'react'
import './Avatar.scss'

const Avatar = ({imgSrc, name}) => {
    if (imgSrc) {
        return <img className='avatar-img' src={imgSrc} alt={`${name} avatar`} />
    } else {
        return <div className='avatar-gradient' style={{background:'linear-gradient(116deg, #0e191a, #2bceb8)'}}>{name.slice(0, 1).toUpperCase()}</div>
    }
}

export default Avatar

