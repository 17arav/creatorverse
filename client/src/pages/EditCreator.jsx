import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './AddCreator.css';

const EditCreator = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [url, setURL] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            if (data) {
                setName(data.name);
                setURL(data.url);
                setDescription(data.description);
                setImageURL(data.imageURL);
                setYoutube(data.youtube);
                setTwitter(data.twitter);
                setInstagram(data.instagram);
            }
        };
        fetchCreator();
    }, [id]);

    const updateCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .update({ 
                name, url, description, imageURL, 
                youtube, twitter, instagram 
            })
            .eq('id', id);

        window.location = "/";
    }

    const deleteCreator = async (event) => {
        event.preventDefault();
        await supabase.from('creators').delete().eq('id', id);
        window.location = "/";
    }

    return (
        <div className="EditCreator">
            <form onSubmit={updateCreator}>
                <h3>Edit Creator</h3>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                
                <label>Image URL</label>
                <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                
                <label>Description</label>
                <textarea value={description} rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                
                <label>Main Website URL</label>
                <input type="text" value={url} onChange={(e) => setURL(e.target.value)} />

                <h3>Social Media Links</h3>
                <label>YouTube @</label>
                <input type="text" value={youtube || ""} onChange={(e) => setYoutube(e.target.value)} />

                <label>Twitter @</label>
                <input type="text" value={twitter || ""} onChange={(e) => setTwitter(e.target.value)} />

                <label>Instagram @</label>
                <input type="text" value={instagram || ""} onChange={(e) => setInstagram(e.target.value)} />

                <div className="buttons-container" style={{display:'flex', gap:'10px'}}>
                    <input type="submit" value="Submit" />
                    <button className="deleteButton" onClick={deleteCreator} style={{backgroundColor: '#ef4444'}}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditCreator;