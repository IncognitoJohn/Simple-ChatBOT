const ChatInput = () => {
    return <div className="flex items-center gap-3 p-2 ">
        <input
            type="text"
            placeholder="Type shitt..."
            className="w-full max-w-sm rounded-lg
            border border-stone-300 bg-white
            px-4 py-2.5 text-sm text-stone-800
            shadow-sm outline-none "
        />
        <button className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white" type="button">
          Send
        </button>
    </div>
};

export default ChatInput;
