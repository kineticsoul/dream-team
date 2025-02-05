import { GuestIcon } from '../../../assets'
import { ChatButton } from '../Buttons/ChatButton'
import { DefaultButton } from '../Buttons/DefaultButton'
import { SidebarItem } from '../SidebarItem/SidebarItem'

export const SideBar = () => {

    return (
        <div className='w-full flex flex-col justify-center text-black py-6'>
            <div className='flex flex-row justify-center'>
                <img className='w-6 mr-2' src={GuestIcon} alt="" />
                <p className='font-bold text-2xl uppercase'>Welcome, guest</p>

            </div>
            <div className='w-full flex flex-col content-center mt-6 px-12'>
                <div className='mb-5'>
                    <DefaultButton text='SIGN UP' background='bg-custom-dark-blue' textColor='text-white' />
                </div>
                <div className='w-full border-b-2 border-custom-sidebar-divider pb-8 '>
                    <ChatButton />
                </div>
            </div>

            <div className='w-full'>
                <SidebarItem />
            </div>
        </div >
    )
}