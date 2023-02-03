import { db } from "../db.js";

export const submitMentAllyForm = (req, res) => {
    const fullName = req.body.fullName;
    const question1 = req.body.question1;
    const question2 = req.body.question2;
    const question3 = req.body.question3;
    const question4 = req.body.question4;
    const question5 = req.body.question5;
    const question6 = req.body.question6;
    const question7 = req.body.question7;
    const question8 = req.body.question8;
    const question9 = req.body.question9;
    db.query(
      "INSERT INTO mentalFormAnswers (fullName, q1,q2,q3,q4,q5,q6,q7,q8,q9) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        fullName,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
      ],
      (err, res) => {
        console.log(err);
      }
    );
  };
