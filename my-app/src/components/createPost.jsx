import React from 'react';
import {useState} from 'react';
//import '../App.css';

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
        if(fileImg){
            formData.append('image', fileImg[0]);
            formData.append('message', message);
            formData.append('userId', userId);
        }
        else{
            formData.append('message', message);
            formData.append('userId', userId);
        }
        fetch("http://localhost:3000/post", {
            method: "POST",
              headers: { 
              'Accept': 'application/json',
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
                        onChange={(e) => setMessage(e.target.value)}
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

/*
function X {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [fileImg, setFileImg] = useState (null);

  const handleChange = (event) => {
    setMessage(event.target.value);
    setTitle(event.target.value);
    setFileImg(event.target.file);
  }

  const handleSubmit = (event) => {
    alert('Votre message est posté en ligne : ' + title + description + fileImg);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={handleSubmit}>
        <label value={title}>
          Votre message
          <textarea value={message} onChange={handleChange} />
        </label>
        <img type="file" name="image" accept="image/png, image/jpeg, image/jpg" alt= "" onChange={(event) => setFiles(e.target.files)}/>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
/*
<form [formGroup]="sauceForm" *ngIf="!loading">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" formControlName="name">
  </div>
  <div class="form-group">
    <label for="manufacturer">Manufacturer</label>
    <input type="text" class="form-control" id="manufacturer" formControlName="manufacturer">
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="5" formControlName="description"></textarea>
  </div>
  <div class="form-group">
    <input type="file" accept="image/*" #imageInput (change)="onFileAdded($event)">
    <button mat-raised-button color="primary" (click)="imageInput.click()">ADD IMAGE</button>
    <img [src]="imagePreview" *ngIf="imagePreview" style="max-height: 100px;display:block;margin-top:10px">
  </div>
  <div class="form-group">
    <label for="main-pepper">Main Pepper Ingredient</label>
    <input type="text" class="form-control" id="main-pepper" formControlName="mainPepper">
  </div>
  <div class="form-group">
    <label for="heat">Heat</label>
    <div class="heat-container">
      <input type="range" class="custom-range heat-range" min="1" max="10" id="heat" formControlName="heat">
      <input type="number" class="form-control heat-reading" formControlName="heatValue">
    </div>
  </div>
  <button mat-raised-button color="primary" (click)="onSubmit()" [disabled]="sauceForm.invalid">SUBMIT</button>
</form>
*/
/*
    
        <section>
            <form >
            <input type="text" placeholder="text"/>
            <button className="signIn--button"  >
              Partager
            </button>
            </form>
            </section>
            */

/*
function CreateMessage() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        </div>
    )
}

export default CreateMessage
*/