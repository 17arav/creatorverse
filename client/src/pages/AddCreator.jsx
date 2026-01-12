import React, { useState } from 'react';
import { supabase } from '../client';
import './AddCreator.css'; 

const AddCreator = () => {
    const [name, setName] = useState("");
    const [url, setURL] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    // NEW: Social Media States
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");

    const createCreator = async (event) => {
        event.preventDefault();

        await supabase
            .from('creators')
            .insert({ 
                name: name, 
                url: url, 
                description: description, 
                imageURL: imageURL,
                youtube: youtube,     // NEW
                twitter: twitter,     // NEW
                instagram: instagram  // NEW
            })
            .select();

        window.location = "/";
    }

    return (
        <div className="AddCreator">
            <form onSubmit={createCreator}>
                <h3>Basic Info</h3>
                <label>Name</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required />
                
                <label>Image URL</label>
                <input type="text" id="imageURL" name="imageURL" onChange={(e) => setImageURL(e.target.value)} />
                
                <label>Description</label>
                <textarea id="description" name="description" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                
                <label>Main Website URL</label>
                <input type="text" id="url" name="url" onChange={(e) => setURL(e.target.value)} />

                <h3>Social Media Links</h3>
                <p>Provide the user handle (username) only</p>
                
                <label><span style={{color:'red'}}>YouTube</span> @username</label>
                <input type="text" name="youtube" onChange={(e) => setYoutube(e.target.value)} />

                <label><span style={{color:'#1DA1F2'}}>Twitter</span> @username</label>
                <input type="text" name="twitter" onChange={(e) => setTwitter(e.target.value)} />

                <label><span style={{color:'#C13584'}}>Instagram</span> @username</label>
                <input type="text" name="instagram" onChange={(e) => setInstagram(e.target.value)} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddCreator;