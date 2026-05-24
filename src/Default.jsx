import BotMessageSkeleton from "./ui/BotMessageSkeleton.jsx";
import ChatMessageComponent from "./assets/ChatMessageComponent.jsx";

export const Default = ({messagesContainerRef,isLoading,chatMessages}) => {
    if (!chatMessages?.length && !isLoading) return null;
    return(
    <>
        <div
            ref={messagesContainerRef}
            className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6"
        >
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
                <ChatMessageComponent chatMessages={chatMessages}/>
                {isLoading ? <BotMessageSkeleton/> : null}
            </div>
        </div>

    </>
    );


}