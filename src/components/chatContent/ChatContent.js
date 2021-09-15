import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import profil from "./../../images/Profil.jpg";
import em from "./../../images/Elon_Musk.jpg";
export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,

      image: profil,
      type: "",
      msg: "Kaiza Deba",
    },
    {
      key: 2,
      image: em,
      type: "other",
      msg: "Kaiza e",
    },
    {
      key: 3,
      image: em,
      type: "other",
      msg: "Inona ny malaza any ltyh?",
    },
    {
      key: 4,
      image: profil,
      type: "",
      msg: "Zao manao Tech web zao e",
    },
    {
      key: 5,
      image: em,
      type: "other",
      msg: "Sod mila vola lah fa za ato manana milliard tsy itako oe ataoko inona ",
    },
    {
      key: 6,
      image: profil,
      type: "",
      msg: " Tsy mandah fanomezana ny aty ah",
    },
    {
      key: 7,
      image: em,
      type: "other",
      msg: "Ka za manko mikasa ny hividy any Madagascar raha zao no mitohy",
    },
    {
      key: 8,
      image: profil,
      type: "",
      msg: "Fa aona le?",
    },
    {
      key: 9,
      image: profil,
      type: "",
      msg: "Nga tsy ampy anlah ny nandany anle 78Milliard $ tamle potika iny le fusé ",
    },
    {
      key: 10,
      image: em,
      type: "other",
      msg: "Mila atao mivotra kely aloha lisan",
    },
    {
      key: 11,
      image: em,
      type: "other",
      msg: "asina usine Tesla anaky 8 any d efa poinsa ",
    },
    {
      key: 12,
      image: profil,
      type: "",
      msg: "Eny ary eh, mankasitraka anlah zay mba hapandroso ny firenenay zan ko, haha ",
    },
    {
      key: 13,
      image: em,
      type: "other",
      msg: "Sura aloh elah fa atsony Amazon ah anao collaboration  ",
    },
    {
      key: 14,
      image: profil,
      type: "",
      msg: "okay ary e, mavita be zany",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: em,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar isOnline="active" image={em} />
              <p>Elon Musk</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
