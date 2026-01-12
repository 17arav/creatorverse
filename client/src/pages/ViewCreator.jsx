import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Combine them in one line
import { supabase } from '../client';
import './ViewCreator.css';

const ViewCreator = () => {
    const { id } = useParams(); // 1. Get the ID from the URL (e.g., 5)
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const getCreator = async () => {
            // 2. Fetch the specific creator from Supabase where the ID matches
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single(); // .single() returns one object instead of a list

            setCreator(data);
        }

        getCreator();
    }, [id]);

    // 3. Show a loading message while waiting for data
    if (!creator) return <div>Loading...</div>;

    // 4. Render the creator's details
    // 4. Render the creator's details
    return (
        <div className="ViewCreator">
            <div className="creator-details">

                {/* LEFT: Image */}
                {creator.imageURL ? (
                    <img src={creator.imageURL} alt={creator.name} className="detail-image" />
                ) : (
                    <div className="detail-image" style={{ backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                )}

                {/* RIGHT: Text & Buttons */}
                <div className="text-section">
                    <h1>{creator.name}</h1>
                    <p>{creator.description}</p>

                    {/* Social Link (We will upgrade this to icons later) */}
                    <a href={creator.url} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontSize: '1.2rem' }}>
                        🔗 Visit Channel
                    </a>

                    {/* Action Buttons */}
                    <div className="buttons-container">
                        <Link to={'/edit/' + creator.id} style={{ width: '100%' }}>
                            <button>EDIT</button>
                        </Link>

                        {/* Note: We will move the Delete button here later if you want it on this page too, 
                but for now Edit takes you to the page with Delete. 
                If you want a Delete button HERE, let me know! */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewCreator;