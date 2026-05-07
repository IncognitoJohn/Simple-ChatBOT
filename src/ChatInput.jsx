import {useState} from "react";

const ChatInput = ({chatMessages,setChatMessages}) => {

    const [inputText,setInputText]=useState('');
    const saveInputText = (event) => {
        setInputText(event.target.value);


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
    return <div className="flex w-full items-end gap-3">
        <input
            value={inputText}

            onChange={saveInputText}
            type="text"
            placeholder="Type shitt..."
            className="min-w-0 flex-1 rounded-lg border
            border-slate-300 bg-slate-50 px-4 py-3
            text-sm text-slate-900 placeholder:text-slate-400
            shadow-sm outline-none transition
            focus:border-violet-500 focus:bg-white
            focus:ring-4 focus:ring-violet-100"
        />
        <button
        onClick={sendMessages}
            className="inline-flex shrink-0 items-center
            justify-center rounded-lg bg-violet-600
            px-5 py-3 text-sm font-semibold text-white
            shadow-sm transition hover:bg-violet-700
            focus:outline-none focus:ring-4
            focus:ring-violet-200" type="button">
          Send
        </button>
    </div>
};

export default ChatInput;
