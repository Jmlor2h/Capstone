import { db } from "../db.js";

export const obtainChats = (req, res) => {
    const q = "SELECT * FROM users INNER JOIN Chat ON Chat.id = users.id AND Chat.id != 4;";
  
    db.query(q, (err, data) => {
      if(err){
        console.log(err);
        return res.status(500).json(err);
      } 
      return res.json(data);
      
    });
  };

  export const sendAdminMessage = (req, res) => {
    
    const q = "INSERT INTO messages(`senderID`,`recipientID`,`message`, `chatID`, `date`) VALUES (?)";
    const values = [4, req.body.recipientID, req.body.message, req.body.chatID, req.body.date];

    db.query(q, [values], (err, data) => {
      if (err){ 
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json("sent");
    });
}