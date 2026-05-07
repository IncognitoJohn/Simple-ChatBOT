const BotMessage = (props) => {
    const { text } =props;
  return (
    <div className= "flex w-full items-end gap-3">
      <img className="h-10 w-10 rounded-lg
      object-cover ring-1 ring-slate-200" src="/robot.jpg" alt="Bot"
      />

      <div className= "max-w-[80%] rounded-lg
                      border border-slate-200 bg-white px-4
                      py-3 text-[15px] leading-6 break-words
                      text-slate-800 shadow-sm sm:max-w-2xl"
      >{text}</div>


    </div>
  )
}

export default BotMessage;
