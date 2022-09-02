import { useState } from "react";
import { useNavigate } from "react-router-dom";

return(
    <card id='card'>
        <label for='image'>Image</label>
        <img name='image' type='file' accept="image/png, image/jpeg, image/jpg" onChange={(e) => setFiles(e.target.files)}/>
        <label for='description'>Description</label>
        <input type="textarea" name='description' onChange={(e) => setDescription(e.target.value)}/>
        <button type='submit' value='Poster' onClick={SendPost}/>
    </card>
)