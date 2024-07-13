import React from 'react'
 
const Button = ({otherClasses,onClick,padding='p-4',backgroundColor="bg-white",text,icon,border="none",color="text-black"}) => {
  return (
   
    <>
      {/* hover:-translate-y-2 transition ease-in-out delay-75 */}
        <button 
        onClick={onClick}
        className={`${border} ${otherClasses} font-semibold ${color} font-mont  flex items-center gap-3 ${backgroundColor} rounded-md ${padding} drop-shadow-md `}>
            {text} {icon}

 

        </button>

    </>
  )
}

export default Button