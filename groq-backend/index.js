import express from 'express';
import dotenv from "dotenv";
import Groq from 'groq-sdk';
import cors from 'cors';

// All neccesscary imports have been made here

// setting up configuration for the dotenv for API KEY look up
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// instantation of Groq Sdk variables
const groq =new Groq();

app.post("/api/chat",async (req,res)=>{
try {
    const { messages } =req.body;
    const formattedMessages =messages.map((msg)=>({
      role: msg.sender === "user" ? "user":"assistant",
          content:msg.text
    }));

    if (!formattedMessages || !Array.isArray(formattedMessages)){

        return res.status(400).json({error: "Missing or invalid messages array. "});
    }
    const  completion = await groq.chat.completions.create({
        messages: formattedMessages,
        model: "llama-3.3-70b-versatile",
        temperature:0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || "";

    return res.status(200).json({reply:aiResponse});


}
catch (error) {

    console.error("Internal Server/Groq API Error:",error);
    return res.status(500).json({error:"Something went wrong inside the gateway!"});
    
}

});


const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Gateway sever is listening closely  on PORT ${PORT}.`);
})