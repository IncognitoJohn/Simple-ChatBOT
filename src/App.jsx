import ChatInput from "./ChatInput.jsx";
import UserMessage from "./UserMessage.jsx";
import BotMessage from "./BotMessage.jsx";

 const App= ()=> {
     const Messages=[

         {
             text:"hello chatbot",
            key:"id_1",
             sender:"user"

         },


         {
             text:"Hello! How can I help you?",
             key:"id_2",
             sender:"bot"

         },
         {
             text:"Can you get me today's date?",
             key:"id_3",
             sender:"user"

         },
         {
             text:"Today's date is 4th May",
             key:"id_4",
             sender:"bot"

         }

     ];







     return (
      <div>
        <ChatInput/>
        <div className="mt-4 ml-4  flex flex-col">

            {Messages.map((mess)=>{
                if (mess.sender==="user"){
                    return (< UserMessage text = {mess.text}
                                          key={mess.key}
                            />);
                }
                return (< BotMessage text = {mess.text}
                                     key={mess.key}
                    />

                );



            })}

        </div>
      </div>
  )
}

export default App;
