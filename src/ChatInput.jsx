import {useState} from "react";

const ChatInput = ({chatMessages,setChatMessages}) => {

    const [inputText,setInputText]=useState('');
    const [isLoading , setIsLoading ]= useState(false);
    const saveInputText =  (event) => {
        setInputText(event.target.value);
    }

    const onKeyDown=(event)=> {
        event.key === "Enter" ? sendMessages() : null;
    }




    async  function sendMessages(e) {


        if (!inputText.trim()) return;

        const newChatMessages=[...chatMessages,{
            text:inputText,
            key: crypto.randomUUID(),
            sender:"user",
        },
        ]

        setChatMessages(newChatMessages);

        setInputText("");

        setIsLoading(true);
 try {
     const response= await fetch('http://localhost:5000/api/chat',
         {
             method:"POST",
             headers:{
                 'Content-Type':'application/json',
             },
             body:JSON.stringify({messages:newChatMessages}),
         });
     if(!response.ok){
         throw new Error("GateWay network response was not ok!")
     };

     const data = await response.json();

     setChatMessages([...newChatMessages,{
         text:data.reply,
         sender:"robot",
         key: crypto.randomUUID(),

     }]);

     /*<!-- const response=window.Chatbot.getResponseAsync(inputText);
     */
 }
 catch (error) {
     console.error("Failed to fetch from backend gateway!:",error);

 }
 finally {
     setIsLoading(false);
 }
    };
    return <div className="flex w-full items-end gap-3">
        <input
            value={inputText}
            onChange={saveInputText}
            onKeyDown={onKeyDown}
            type="text"
            placeholder="Enter message..."
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
