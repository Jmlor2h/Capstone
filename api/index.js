import express from "express";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/adminChat.js"
import contactRoutes from "./routes/contact.js";
import chatRoutes from "./routes/chat.js";
import mentAllyFormRoute from "./routes/mentAllyForm.js"
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors());



app.use(express.static(path.resolve(new URL(import.meta.url).pathname, '..', '..', 'client', 'build')));

app.get("/*", function(req, res) {
  res.sendFile(path.resolve(new URL(import.meta.url).pathname, '..', '..', 'client', 'build', 'index.html'));
});

app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);
app.use("/chat", chatRoutes);
app.use("/mentAlly", mentAllyFormRoute);
app.listen(1234, () => {
  console.log("Connected!");
});

