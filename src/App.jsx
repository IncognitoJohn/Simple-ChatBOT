import ChatInput from "./ChatInput.jsx";
import UserMessage from "./UserMessage.jsx";
import BotMessage from "./BotMessage.jsx";
import {Messages} from "./Messages.jsx";
import {useState} from "react";
import ChatMessageComponent from "./assets/ChatMessageComponent.jsx";


 const App= ()=> {
     const [chatMessages,setChatMessages]=
         useState(Messages);



    return (
      <div>
        <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}/>
        <div className="mt-4 ml-4  flex flex-col">

            <ChatMessageComponent chatMessages={chatMessages}/>





        </div>
      </div>
  )
}

export default App;
