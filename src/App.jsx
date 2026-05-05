import ChatInput from "./ChatInput.jsx";
import UserMessage from "./UserMessage.jsx";
import BotMessage from "./BotMessage.jsx";

 const App= ()=> {
     const UserMessages=[

         {
             text:"hello chatbot",
            key:"id_1"

         },
         {
             text:"Can you get me today's date?",
            key:"id_2"

         }
     ];
     const BotMessages=[


         {
             text:"Hello! How can I help you?",
             key:"id_1"

         },
         {
             text:"Today's date is 4th May",
             key:"id_2"

         }

     ];

const chatMessageComponent=UserMessages.map((mess,ID)=>{
    return(< UserMessage text = {mess.text}
                         key={mess.key}
                         />

    )
})
     const BotComponent=BotMessages.map((mess,ID)=>{
         return(< BotMessage text = {mess.text}
                              key={mess.key}
             />

         )
     })




     return (
      <div>
        <ChatInput/>
        <div className="mt-4 ml-4  flex flex-col">

            {chatMessageComponent}
            {BotComponent}

        </div>
      </div>
  )
}

export default App;
