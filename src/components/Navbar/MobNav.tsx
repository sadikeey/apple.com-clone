import NavLinks from './NavLinks'
import { FaApple } from 'react-icons/fa'
import { BsBag } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiBars2 } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const MobNav: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false)

  return (
    <div id='mob__navbar' className='md:hidden fixed w-full select-none'>
      <div className={`flex justify-between items-center p-4 text-xl text-slate-200 ${isOpen? 'bg-neutral-900' : 'bg-neutral-700'}`}>
        <div className={`duration-700 ${isOpen && 'text-transparent'}`}>
          <FaApple />
        </div>
        <div className='flex gap-6 items-center'>
          <div className='flex gap-2 items-center cursor-pointer'>
            <BiSearch onClick={() => setOpenSearch(!isOpenSearch)} className={`duration-700 ${isOpen && 'text-transparent'}`}/>
            <input className={`bg-neutral-700 outline-none text-sm w-28 h-min ${isOpenSearch? 'block': 'hidden'}`} type='text' placeholder='Search' />
          </div>
          <BsBag className={`duration-700 ${isOpen && 'text-transparent'}`}/>
          <div onClick={()=> setOpen(!isOpen)} className='cursor-pointer'>
            {isOpen? <AiOutlineClose /> : <HiBars2 />}
          </div>
        </div>
      </div>
      <NavLinks
        ulStyles={`flex flex-col fixed gap-3 text-slate-200 text-3xl font-medium px-12 py-2 bg-neutral-900 h-screen w-full ease-in-out duration-700 ${isOpen? 'top-12' : 'top-[-100%]' }`}
        liStyles='hover:text-white'
      />
    </div>
  )
}

export default MobNav
