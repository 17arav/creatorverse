import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ShowCreators = (props) => {
    // inside ShowCreators.jsx
    return (
        <div className="ShowCreators">
            <div className="header">
                <h1>CREATORVERSE</h1>
                <Link to="/new"><button role="button">Add A Creator</button></Link>
            </div>

            {/* GRID LAYOUT */}
            <div className="creators-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                padding: '20px'
            }}>
                {props.creators && props.creators.length > 0 ? (
                    props.creators.map((creator) => (
                        <Card
                            key={creator.id}
                            id={creator.id}
                            name={creator.name}
                            url={creator.url}
                            description={creator.description}
                            imageURL={creator.imageURL}
                            youtube={creator.youtube}
                            twitter={creator.twitter}
                            instagram={creator.instagram}
                        />
                    ))
                ) : (
                    <h3>No creators found!</h3>
                )}
            </div>
        </div>
    );
};

export default ShowCreators;