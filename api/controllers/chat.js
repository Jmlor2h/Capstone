import { db } from "../db.js";
export const sendMessage = (req, res) => {
    
    const q = "INSERT INTO messages(`senderID`,`recipientID`,`message`, `chatID`, `date`) VALUES (?)";
    const values = [req.body.senderID, req.body.recipientID, req.body.message, req.body.chatID, req.body.date];

    db.query(q, [values], (err, data) => {
      if (err){ 
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json("sent");
    });
}

export const obtainMessage = (req, res) => {
  const q = "SELECT * FROM messages INNER JOIN users ON users.id = messages.senderID WHERE messages.chatID = ? AND messages.senderID = ? ORDER BY DATE ASC;";

  const values =[req.body.chatID, req.body.senderID];

  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data.length === 0) {
      const q = "INSERT INTO Chat('flag') VALUES ('open')";
      db.query(q, (err, data) => {
        if(err){
          console.log(err);
        }
      });
      if(err){
        console.log(err);
        return res.status(500).json(err);
      }
    }
    return res.json(data);
  });
};

export const obtainAdminMessage = (req, res) => {
  const q = "SELECT * FROM messages INNER JOIN users WHERE messages.chatID = ? AND users.id = messages.senderID AND messages.senderID = 4 ORDER BY DATE ASC;";
  const values = [req.body.chatID];

  db.query(q, [values], (err, data) => {
    if (data.length === 0) {
      const q = "INSERT INTO Chat('flag') VALUES ('open')";
      db.query(q, (err, data) => {
        if(err){
          console.log(err);
        }
      });
      if(err){
        console.log(err);
        return res.status(500).json(err);
      }
    }
    return res.json(data);
  });
};

