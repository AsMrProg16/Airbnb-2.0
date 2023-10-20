"use client"
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from './Avatar'
const Usermenu = () => {
  return ( 
    <div className="relative">
      <div className="flex fle-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-3 rounded-full transition cursor-pointer hover:bg-neutral-1 00"
        onClick={() => {}}>
          Airbnb your home
        </div>
        <div className="px-3 pt-5 md:py-1 md-px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition hover:shadow-md">
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Usermenu;