const BotMessage = (props) => {
    const { text } =props;
  return (
    <div className="flex   my-2">
      <img className="h-12 w-12 rounded-full
      object-cover" src="/robot.jpg" alt="Bot"
      />

      <div className= "rounded-2xl bg-slate-100 px-4
                      py-2 text-lg text-slate-900"
      >{text}</div>


    </div>
  )
}

export default BotMessage;
