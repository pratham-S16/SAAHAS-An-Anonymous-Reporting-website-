import React from 'react'
import { useRouter } from 'next/navigation'

export const BackHome = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <button onClick={handleHomeClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
      Home 
    </button>
  )
}
