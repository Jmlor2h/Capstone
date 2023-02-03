import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function AdminChat() {
  const { currentUser } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  const [inputs, setInputs] = useState({
    senderID: 0, // sets senderID as the currentUsers ID which is referenced from DB.
    recipientID: 0, // set as 1 as recipient will always be Admin
    message: "",
    chatID: 0,
    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [adminMessages, setAdminMessages] = useState([]);
  const [userView, setUserView] = useState([]);
  const [err, setError] = useState(null);
  const [sqlSurvey, setSqlSurvey] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      currentUser.role !== 1 ||
      currentUser.id !== 4 ||
      currentUser === 0
    ) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const getSurvey = async () => {
    await axios
    .post("/contact/grabData")
    .then((response) => {
      console.log(response.data);
      setSqlSurvey(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getSurvey()
  })

  const reRender = async () => {
    await axios
      .post("/chat/obtain", inputs)
      .then((response) => {
        console.log(response.data);
        setUserView(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const reRenderAdmin = async () => {
    await axios
      .post("/chat/obtainAdmin", {
        chatID: inputs.chatID,
      })
      .then((response) => {
        console.log(response.data);
        setAdminMessages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    renderChats();
    setInterval(() => {
      renderChats();
    }, 10000);
  }, []);





  const sendMessage = async () => {
    setInputs((prev) => ({ ...prev, date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") }));
    await axios
      .post("/admin/sendMessage", inputs, {})
      .then((response) => console.log(response));
  };

  const handleSubmit = async () => {
    try {
      setInputs((prev) => ({ ...prev, message: document.getElementById("messageinput").value }));
      await sendMessage(inputs);
      document.getElementById("messageinput").value = "";
      navigate("/admDash");
      setInputs({chatID: 0, recipientID: 0, senderID: 0})
    } catch (err) {
      setError(err.response);
      console.log(err);
    }
  };

  if (currentUser === 0) {
    return navigate("/");
  }

  if (currentUser.id !== 4) {
    return navigate("/");
  }


  return (
    <section class="bg-ally7 p-5">
      <div id="Chat" class="grid grid-cols-3 gap-5">
        {chats.map((props) => (
          <section class="border border-ally10 rounded-lg p-5">
            <div>
              <h4 class="font-bold text-ally2">Name: {props.username}</h4>
              {"  "}
              <h5 class="text-gray-600">Flag: {props.flag}</h5>
              {"  "}
              <h5 class="text-gray-600">chatId: {props.id}</h5>
              {"  "}
              <input id="chatID" type="hidden" value={props.id} />
              <input id="recipientID" type="hidden" value={props.id} />
              <button
                class="bg-ally2 hover:bg-ally1 text-white font-bold py-2 px-4 rounded"
                onClick={async () => {
                  setInputs({
                    chatID: props.id,
                    recipientID: props.id,
                    senderID: props.id,
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                  });
                  reRender();
                  reRenderAdmin();}}
              >
                Load Messages
              </button>
              <button class="bg-ally2 hover:bg-ally1 text-white font-bold py-2 px-4 rounded"
               onClick={async () => {
                setInputs({
                  chatID: props.id,
                  recipientID: props.id,
                  senderID: props.id,
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
                reRender();
                reRenderAdmin();
                setModalOpen(true);
              }}>View Chat</button>
            </div>
          </section>
        ))}
      </div>
      <div>
        Survey Answers
        {sqlSurvey.map((props) => (
    <section key={props.id} class="border border-ally10 rounded-lg p-5 mb-5">
      <div class="text-ally10">
        Name:</div> 
        <div class="text-ally9"> </div> {props.fullName},<div class="text-ally8">Q1: {props.q1}, Q2: {props.q2}, Q3: {props.q3},  
        Q4: {props.q4}, Q5: {props.q5}, Q6: {props.q6}, Q7: {props.q7}, Q8: {props.q8}, Q9: {props.q9}</div> 
     
    </section>
  ))}
      </div>

      {modalOpen && (
        <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex lg:items-center lg:justify-center">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div
            class="bg-ally7 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all lg:max-w-lg lg:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <h3
                class="text-lg leading-6 font-medium text-ally10"
                id="modal-headline"
              >
                Chat details
              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  Here you can see all the details of the chat.
                </p>
                <div id="Chat" className="overflow-y-auto h-64">
                  {adminMessages
                    .concat(userView)
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map((message) => (
                      <div
                        key={message.id}
                        className={`chat flex items-start mt-4 ${
                          message.id === 4 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`chat-bubble p-1 rounded ${
                            message.username === "user"
                              ? "bg-ally10 text-white"
                              : "bg-ally10 text-white"
                          }`}
                        >
                          {message.username}: {message.message}
                          <br />
                          <p class="px-1">
                            Sent at{" "}
                            {new Date(message.date).toLocaleDateString()}{" "}
                            {new Date(message.date).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex justify-between mt-4"></div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <span class="flex w-full rounded-md shadow-sm">
                <input
                  type="text"
                  id="messageinput"
                  name="message"
                  className="w-3/4 p-1 border border-ally2"
                  onChange={handleChange}
                />
              <button id="messagesubmit"
                  type="submit"
                  onClick={() => {
                    setInputs({
                      chatID: inputs.chatID,
                      recipientID: inputs.chatID,
                      senderID: 4,
                    });
                    handleSubmit();
                    setModalOpen(false);
                  }}
                  className="p-2 border border-gray-300 bg-ally8 text-white ml-3"
                >
                  Send
                </button> 
<button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-ally2 text-base leading-6 font-medium text-white shadow-sm hover:bg-ally1 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5 ml-3"
                  onClick={() => {
                    setModalOpen(false)
                    setInputs({chatID: 0, recipientID: 0, senderID: 0});}
                  }
                >
                  Close
                </button><br/>
<button className="ml-3">Scroll Down</button>

              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminChat;
