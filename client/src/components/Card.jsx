import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons

const Card = (props) => {
    return (
        <div className="Card">
            <Link to={'/edit/' + props.id} style={{ textDecoration: 'none' }}>
                <span className="moreButton">✏️</span>
            </Link>

            <img className="creator-image" src={props.imageURL} alt={props.name} />

            <Link to={'/' + props.id} style={{ textDecoration: 'none' }}>
                <h2 className="name">{props.name}</h2>
            </Link>

            <h3 className="url"><a href={props.url} target="_blank" rel="noopener noreferrer">Visit Website</a></h3>

            <p className="description">{props.description}</p>

            {/* NEW: Social Media Section */}
            <div className="social-links">
                {props.youtube && (
                    <a href={`https://www.youtube.com/@${props.youtube}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaYoutube /> <span className="handle">@{props.youtube}</span>
                    </a>
                )}
                {props.twitter && (
                    <a href={`https://www.twitter.com/${props.twitter}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTwitter /> <span className="handle">@{props.twitter}</span>
                    </a>
                )}
                {props.instagram && (
                    <a href={`https://www.instagram.com/${props.instagram}`} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram /> <span className="handle">@{props.instagram}</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;