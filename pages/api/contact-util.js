// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
    }

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://SyedMoazamAli:shahg2000@cluster0.wgrm4ii.mongodb.net/AlSyedBlogs?retryWrites=true&w=majority`
      );
    } catch (err) {
      res.status(500).json({ message: "Connection to database failed!" });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    // console.log("Client " + client);
    const db = client.db();

    try {
      // console.log("Database " + db);
      const result = await db.collection("blogs").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: "Storing data failed!" });
    }
    client.close();
    res.status(201).json({ message: "Successfully stored your data!" });
  }
}
