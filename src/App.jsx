import ChatInput from "./ChatInput.jsx";
import UserMessage from "./UserMessage.jsx";
import BotMessage from "./BotMessage.jsx";

 const App= ()=> {
     const Messages=[

         {
             text:"hello chatbot"

         },
         {
             text:"Hello! How can I help you?"

         },
         {
             text:"Can you get me today's date?"

         },
         {
             text:"Today's date is 4th May"

         },

     ];

  return (
      <div>
        <ChatInput/>
        <div className="mt-4 ml-4  flex flex-col">

          <UserMessage text="hello chatbot" />
          <BotMessage text="Hello! How can I help you?" />
            <UserMessage text="Can you get me today's date?"/>
            <BotMessage text="Today's date is 4th May" />


        </div>
      </div>
  )
}

export default App;
