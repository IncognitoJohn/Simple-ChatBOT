import BotMessage from "../BotMessage.jsx";
import UserMessage from "../UserMessage.jsx";

const chatMessagesC1 = ({chatMessages}) => {



   return  chatMessages.map((mess)=>{
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
export default chatMessagesC1;
