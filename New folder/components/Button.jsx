import React from 'react'
 
const Button = ({onClick,padding='p-4',backgroundColor="bg-white",text,icon,border="none",color="text-black"}) => {
  return (
   
    <>
     
        <button 
        onClick={onClick}
        className={`${border} font-semibold ${color} font-mont  flex items-center gap-3 ${backgroundColor} rounded-md ${padding} drop-shadow-md hover:-translate-y-2 transition ease-in-out delay-75`}>
            {text} {icon}

 

        </button>

    </>
  )
}

export default Button