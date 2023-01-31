import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Chat() {
  const { currentUser } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    senderID: currentUser.id, // sets senderID as the currentUsers ID which is referenced from DB.
    recipientID: 4, // set as 1 as recipient will always be Admin
    message: "",
    chatID: currentUser.id,
    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
  });

  const [userView, setUserView] = useState([]);

  const [err, setError] = useState(null);

  const [adminMessages, setAdminMessages] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // TODOS
  const sendMessage = async () => {
    await axios
      .post("/chat/sendMessage", inputs, {})
      .then((response) => console.log(response));
  };

const reRender = async () => {
  await axios.post("/chat/obtain", inputs)
  .then(response => {
    console.log(response.data)
    setUserView(response.data)
  })
  .catch(error => {
    console.error(error)
  })
};

const reRenderAdmin = async () => {
    await axios.post("/chat/obtainAdmin", {
      chatID: currentUser.id
    })
    .then(response => {
      console.log(response.data)
      setAdminMessages(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(inputs);
      document.getElementById('messageinput').value = "";
      navigate("/chat");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  // Define function to update chat div with messages
  useEffect(() => {
    setInterval(() => {
    reRender();
    reRenderAdmin();
  }, 2000)});

  return (
    <section>
<div id="Chat">
{Object.values(userView.concat(adminMessages).sort((a,b) => a.date - b.date)).map(message => (
  <div key={message.id}>{message.username}: {message.message}</div>
))}

</div>
      <input type="text" id="messageinput" name="message" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}> Send
      </button>
    </section>
  );
}

export default Chat;
