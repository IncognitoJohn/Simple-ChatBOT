import ChatInput from "./ChatInput.jsx";
import UserMessage from "./UserMessage.jsx";
import BotMessage from "./BotMessage.jsx";
import {Messages} from "./Messages.jsx";
import {useState} from "react";


 const App= ()=> {
     const [chatMessages,setChatMessage]=
         useState(Messages);
     function sendChatMessages() {
         setChatMessage([...chatMessages,{
             text:"test",
             key: crypto.randomUUID(),
             sender:"user",
         },
         ]);
     }


    return (
      <div>
        <ChatInput/>
        <div className="mt-4 ml-4  flex flex-col">
            <button onClick={sendChatMessages}>
                Send Message
            </button>

            {
                chatMessages.map((mess)=>{
                   if (mess.sender==="user"){
                    return (< UserMessage text = {mess.text}
                                          key={mess.key}
                    />);
                    }



                   return (< BotMessage text = {mess.text}
                                     key={mess.key}
                    />

                   );
                })
            }

        </div>
      </div>
  )
}

export default App;
