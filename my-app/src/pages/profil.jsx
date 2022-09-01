import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {



    return (
    <div>
      <h2>mon profil</h2>
      <Link to="/homepage">Fil d'actualité</Link>
      <form>
        <input type="image" id="'image" alt="profile picture" />
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
      </form>
    </div>
  );
}