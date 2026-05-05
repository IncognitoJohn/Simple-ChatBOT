const UserMessage = (props) => {
const { text } =props;
  return (
    <div className= " flex my-2 " >
        <div className= " flex  items-center
        rounded-2xl bg-slate-100
       px-4 py-2 text-lg text-slate-900 "
      >{text}</div>





      <img className="h-12 w-12
        rounded-full
         object-cover"
           src="/User.jpg"
            alt="User" />
    </div>
  )
}

export default UserMessage;
