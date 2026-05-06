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
      <div className="flex flex-col items-center">
        <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}/>


            <ChatMessageComponent chatMessages={chatMessages}/>






      </div>
  )
}

export default App;
