import {useState} from "react";

const ChatInput = ({chatMessages, setChatMessages, isLoading, setIsLoading}) => {

    const [inputText,setInputText]=useState('');

    const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "https://humphreyai.onrender.com").replace(/\/$/, "");
    const saveInputText =  (event) => {
        setInputText(event.target.value);
    }

    const onKeyDown=(event)=> {
        event.key === "Enter" ? sendMessages() : null;
    }




    async  function sendMessages(e) {

        if (isLoading) return;

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
     const response= await fetch(`${apiBaseUrl}/api/chat`,
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
            disabled={isLoading}
            className="min-w-0 flex-1 rounded-lg border
            border-red-200 bg-slate-50 px-4 py-3
            text-sm text-slate-900 placeholder:text-slate-400
            shadow-sm outline-none transition
            focus:border-[#b2a3a4] focus:bg-white
            focus:ring-4 focus:ring-violet-100
            disabled:cursor-not-allowed disabled:opacity-80"
        />
        <button
        onClick={sendMessages}
            className="inline-flex shrink-0 items-center
            justify-center rounded-lg bg-[#9C9488]
            px-5 py-3 text-sm font-semibold text-[#f4eff8]
            shadow-sm transition hover:bg-[#b2a3a4]
            focus:outline-none focus:ring-4
            focus:ring-[#565656]
            disabled:cursor-not-allowed disabled:opacity-60" type="button"
            disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
    </div>
};

export default ChatInput;
