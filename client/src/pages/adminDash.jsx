import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function AdminChat() {
  const { currentUser } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  const [senderID, setSenderID] = useState(undefined);
  const [myrecipientID] = useState(currentUser.id);
  const [mySenderID] = useState(currentUser.id);
  const [message, setMessage] = useState("");
  const [chatID, setChatID] = useState(undefined);
  const [date] = useState(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.role === "admin" || !currentUser.id === 4) {
      navigate("/");
    }
  }, []);

  const renderChats = async () => {
    await axios
      .post("/admin/obtainChats")
      .then((response) => {
        console.log(response.data);
        setChats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setInterval(() => {
      renderChats();
    }, 2000);
  });

  return (
    <section>
      <div id="Chat">
        {chats.map((props) => (
          <section>
            <div>
              <h4>Name: {props.username}</h4>{"  "}
              <h5>Flag: {props.flag}</h5>{"  "}
              <h5>chatId: {props.id}</h5>{"  "}
              <button>View Chat</button>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default AdminChat;
