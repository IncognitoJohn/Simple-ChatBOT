const UserMessage = (props) => {
    const base = import.meta.env.BASE_URL;
const { text } =props;
  return (
    <div className= "flex w-full items-end justify-end gap-3" >
        <div className= "max-w-[80%]
        rounded-lg bg-violet-600
       px-4 py-3 text-[15px] leading-6 break-words
       text-white shadow-sm sm:max-w-2xl "
      >{text}</div>





      <img className="h-10 w-10
        rounded-lg
         object-cover ring-1 ring-slate-200"
           src={`${base}User.jpg`}
            alt="User" />
    </div>
  )
}

export default UserMessage;
