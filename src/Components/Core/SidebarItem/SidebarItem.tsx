import { StarBlackIcon } from '../../../assets'


export const SidebarItem = () => {
    return (
        <div className='w-full flex flex-row content-center justify-center py-5'>
            <img className='mr-3' src={StarBlackIcon} />
            <div className=''>
                <p className='text-black font-bold uppercase'>Promotions</p>
            </div>
        </div>
    )
}