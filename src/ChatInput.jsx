import {useState} from "react";

const ChatInput = ({chatMessages,setChatMessages}) => {

    const [inputText,setInputText]=useState('');
    const saveInputText = (event) => {
        setInputText(event.target.value);




    }

    const onKeyDown=(event)=> {
        event.key === "Enter" ? sendMessages() : null;
    }




    function sendMessages() {
        const newChatMessages=[...chatMessages,{
            text:inputText,
            key: crypto.randomUUID(),
            sender:"user",
        },
        ]

        setChatMessages(newChatMessages);

        const response=Chatbot.getResponseAsync(inputText);
        setChatMessages([...newChatMessages,{
            text:response,
            key: crypto.randomUUID(),
            sender:"robot",
        },
        ]);
        setInputText("");
    }
    return <div className="flex items-center gap-3 p-2 ">
        <input
            value={inputText}
            onChange={saveInputText}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Type shitt..."
            className="w-full max-w-sm rounded-lg
            border border-stone-300 bg-white
            px-4 py-2.5 text-sm text-stone-800
            shadow-sm outline-none "
        />
        <button
        onClick={sendMessages}
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white" type="button">
          Send
        </button>
    </div>
};

export default ChatInput;
