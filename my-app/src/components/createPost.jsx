import React from 'react';
import {useState} from 'react';
import {ROOT_PATH_URL} from './server.config';

function CreatePost() {

    let [fileImg, setFileImg] = useState(null);
    let [message, setMessage] = useState("");
    let [title, setTitle] = useState("");
    
    const handleSubmit = (event) => {
        alert('Votre message est posté en ligne : ' + title + message + fileImg);
        event.preventDefault();
      
        let formData = new FormData();
        let token = localStorage.getItem('token');
        let userId = localStorage.getItem('userId');
        formData.append('message', message);
        formData.append('userId', userId);
        formData.append('title', title);
        if(fileImg){
            formData.append('image', fileImg[0]);
           
        }

        fetch(`${ROOT_PATH_URL}/post`, {
            method: "POST",
              headers: { 
              'Authorization': `Bearer ${token}`
            },
            body: formData,
            })
            .then((res)=>{
                if(res.ok){
                    console.log("Message posté avec succès");
                    return res.json();
                }
            })
            .catch((err)=>{
                // afficher une erreur dans la console 
                console.log(err)
        })
    }
    return (
        <>
            <section >
                <form onSubmit={handleSubmit}>
                <label htmlFor="title" onChange={(e) => setTitle(e.target.value)}>Titre</label>
                    <input
                        name="message"
                        type="text"
                        placeholder="Titre"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="message" onChange={(e) => setMessage(e.target.value)}>Votre message</label>
                    <input
                        name="message"
                        type="textarea"
                        placeholder="Déposer un message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input type="file" name="image" accept="image/png, image/jpeg, image/jpg" alt= "" onChange={(e) => setFileImg(e.target.files)}
                    />
                    <input type="submit" value="Partager" />
                </form>
            </section>
        </>

    )
}

export default CreatePost;