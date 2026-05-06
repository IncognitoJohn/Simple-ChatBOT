import ChatInput from "./ChatInput.jsx";
import UserMessage from "./UserMessage.jsx";
import BotMessage from "./BotMessage.jsx";

 const App= ()=> {
     const UserMessages=[

         {
             text:"hello chatbot",
            key:"id_1",
             sender:"user"

         },
         {
             text:"Can you get me today's date?",
            key:"id_3",
             sender:"user"

         }
     ];
     const BotMessages=[


         {
             text:"Hello! How can I help you?",
             key:"id_2",
             sender:"bot"

         },
         {
             text:"Today's date is 4th May",
             key:"id_4",
             sender:"bot"

         }

     ];

const chatMessageComponent=UserMessages.map((mess,ID)=>{
      if (mess.user==="user")
       return( < UserMessage text = {mess.text}
                         key={mess.key}
                         />

    )

          return (< BotMessage text = {mess.text}
                               key={mess.key}
              />

          );



})





     return (
      <div>
        <ChatInput/>
        <div className="mt-4 ml-4  flex flex-col">

            {chatMessageComponent}

        </div>
      </div>
  )
}

export default App;
