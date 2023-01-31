import express from "express";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/adminChat.js"
import contactRoutes from "./routes/contact.js";
import chatRoutes from "./routes/chat.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors());



app.use(express.static(path.resolve(new URL(import.meta.url).pathname, '..', '..', 'client', 'build')));



app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use("/contact", contactRoutes);
app.use("/chat", chatRoutes);
app.listen(3000, () => {
  console.log("Connected!");
});

