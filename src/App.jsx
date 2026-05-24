import ChatInput from "./ChatInput.jsx";
import {Messages} from "./Messages.jsx";
import {useEffect, useRef, useState} from "react";
import ChatMessageComponent from "./assets/ChatMessageComponent.jsx";
import {Analytics} from "@vercel/analytics/react";
import BotMessageSkeleton from "./ui/BotMessageSkeleton.jsx";
import {Header} from "./ui/Header.jsx";
import MovingBackground from "./ui/Background.jsx";


const App = () => {
    const [chatMessages, setChatMessages] =
        useState(Messages);
    const [isLoading, setIsLoading] = useState(false);
    const messagesContainerRef = useRef(null);

    useEffect(() => {
        const container = messagesContainerRef.current;

        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [chatMessages, isLoading]);


        return (


            <>
                <MovingBackground/>
                <Header/>

                {/* Main app area sits below the fixed header (h-16) and scrolls internally. */}
                <div className="flex h-screen flex-col pt-16">
                    <div
                        ref={messagesContainerRef}
                        className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6"
                    >
                        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
                            <ChatMessageComponent chatMessages={chatMessages}/>
                            {isLoading ? <BotMessageSkeleton/> : null}
                        </div>
                    </div>

                    <div className="shrink-0 px-4 pb-6 sm:px-6">
                        <div className="mx-auto w-full max-w-4xl">
                            <div
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl px-1 py-2 sm:px-1"
                            >
                                <ChatInput
                                    chatMessages={chatMessages}
                                    setChatMessages={setChatMessages}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />

                                <Analytics/>
                            </div>
                        </div>
                    </div>
                </div>


            </>

        )

}

export default App;
