import { db } from "../db.js";
export const submitForm = (req, res) => {
    
    const q = "INSERT INTO contactData(`fullName`,`email`,`message`) VALUES (?)";
    const values = [req.body.fullName, req.body.email, req.body.message];

    db.query(q, [values], (err, data) => {
      if (err){ 
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json("User has been created.");
    });
}

