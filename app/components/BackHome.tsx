import React from 'react'
import { useRouter } from 'next/navigation'

export const BackHome = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <button onClick={handleHomeClick} className="text-gray-600 border-gray-600 font-bold border py-2 px-4 rounded-full hover:text-black transition-colors cursor-pointer">
      Home 
    </button>
  )
}
