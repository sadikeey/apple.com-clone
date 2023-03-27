import NavLinks from "./NavLinks"
import { FaApple } from 'react-icons/fa'
import { BsBag } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

const Nav: React.FC = () => {
  return (
    <div id='nav' className='hidden md:flex fixed justify-center items-center gap-[1.5rem] lg:gap-[2.6rem] w-full bg-neutral-700 font-base text-slate-300 text-[0.75rem]'>
      <FaApple className='text-lg' />
      <NavLinks
        ulStyles={`flex justify-center items-center gap-[1.5rem] lg:gap-[2.6rem] py-[0.8rem]`}
        liStyles=''
      />
      <BiSearch className='text-sm' />
      <BsBag className='text-sm' />
    </div>
  )
}

export default Nav
