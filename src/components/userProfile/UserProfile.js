import React, { Component } from "react";
import "./userProfile.css";
import Profil from "./../../images/Profil.jpg";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={Profil} />
          </div>
          <h4>RAJOELIARIBENJA Tanjona Harintsarobidy</h4>
          <p></p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
          </div>
          <div className="card__content">Directeur Dev Mianatra @Propla</div>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Classe</h4>
          </div>
          <div className="card__content">ESIIA 3</div>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Numero</h4>
          </div>
          <div className="card__content">13</div>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>A propos</h4>
          </div>
          <div className="card__content">
            tsisy resaka fa mba manao e. Mazotoa izay mitsidika
          </div>
        </div>
      </div>
    );
  }
}
