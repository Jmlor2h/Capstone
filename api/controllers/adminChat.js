import { db } from "../db.js";

export const obtainChats = (req, res) => {
    const q = "SELECT * FROM users INNER JOIN Chat ON Chat.id = users.id;";
  
    db.query(q, (err, data) => {
      if(err){
        console.log(err);
        return res.status(500).json(err);
      } 
      return res.json(data);
      
    });
  };