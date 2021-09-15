import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import em from "./../../images/Elon_Musk.jpg";
import s from "./../../images/sayda.jpg";
import j from "./../../images/jb.jpg";
import therock from "./../../images/therock.jpeg";
import cyp from "./../../images/cyprien.jpg";
import kl from "./../../images/kl.jpg";
import tskbk from "./../../images/tsikoboko.jpg";
import ag from "./../../images/ag.jpg";
export default class ChatList extends Component {
  allChatUsers = [
    {
      image: em,
      id: 1,
      name: "Elon Musk",
      active: true,
      isOnline: true,
    },
    {
      image: s,
      id: 2,
      name: "MrSayda",
      active: false,
      isOnline: false,
    },
    {
      image: j,
      id: 3,
      name: "Justin Bieber",
      active: false,
      isOnline: false,
    },
    {
      image: therock,
      id: 4,
      name: "TheRock",
      active: false,
      isOnline: true,
    },
    {
      image: cyp,
      id: 5,
      name: "Cyprien",
      active: false,
      isOnline: false,
    },
    {
      image: kl,
      id: 6,
      name: "khaby lame",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 7,
      name: "Anonimus",
      active: false,
      isOnline: true,
    },
    {
      image: tskbk,
      id: 8,
      name: "Tskoboko",
      active: false,
      isOnline: false,
    },
    {
      image: ag,
      id: 9,
      name: "Ariana Grande",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "NoFace",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          <i class="bi bi-plus-circle-fill"></i>
          <span>Nouveau conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats oh</h2>
          <button className="btn-nobg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-reception-0"
              viewBox="0 0 16 16"
            >
              <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
            <i class="bi bi-reception-0"></i>
          </button>
        </div>
        <div className="chatlist__search">
          <div className="search_wrap">
            <input type="text" placeholder="recherche ici" required />
            <button className="search_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
