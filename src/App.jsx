import ChatInput from "./ChatInput.jsx";
import {Messages} from "./Messages.jsx";
import {useEffect, useRef, useState} from "react";
import ChatMessageComponent from "./assets/ChatMessageComponent.jsx";
import { Analytics } from "@vercel/analytics/next"


 const App= ()=> {
     const [chatMessages,setChatMessages]=
         useState(Messages);
     const messagesContainerRef = useRef(null);

     useEffect(() => {
         const container = messagesContainerRef.current;

         if (container) {
             container.scrollTop = container.scrollHeight;
         }
     }, [chatMessages]);



    return (
      <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex h-[calc(100vh-3rem)] max-h-[56rem] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="order-2 border-t border-slate-200 bg-white px-3 py-3 sm:px-4">
                  <div className="mx-auto w-full max-w-4xl">
                      <Analytics/>
                      <ChatInput
                          chatMessages={chatMessages}
                          setChatMessages={setChatMessages}/>
                  </div>
              </div>

              <div
                  ref={messagesContainerRef}
                  className="order-1 flex-1 overflow-y-auto bg-slate-50/70 px-4 py-5 sm:px-6">
                  <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
                      <ChatMessageComponent chatMessages={chatMessages}/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App;
