import ChatInput from "./ChatInput.jsx";
import {Messages} from "./Messages.jsx";
import {useEffect, useRef, useState} from "react";
import {Analytics} from "@vercel/analytics/react";
import {Header} from "./ui/Header.jsx";
import MovingBackground from "./ui/Background.jsx";
import {Default} from "./Default.jsx";


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

    const welcomeMessage=!chatMessages?.length && !isLoading;


        return (


            <>
                <MovingBackground/>
                <Header/>

                {/* Main app area sits below the fixed header (h-16) and scrolls internally. */}
                <div className="flex h-screen flex-col pt-16 justify-center">
                     <Default messagesContainerRef={messagesContainerRef}
                            chatMessages={chatMessages}
                                           isLoading={isLoading}
                     welcomeMessage={welcomeMessage}/>

                    { welcomeMessage && <div className="text-4xl sm:text-5xl font-normal text-transparent bg-clip-text
                    bg-gradient-to-r from-[#7f7385] via-[#b8acc0] to-[#d5d5d5] tracking-tight text-center mb-6 p-6 ">

                        HI! How Can I Help you Today?

                    </div>
                    }


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
