import { DropdownIcon, SearchFilterIcon } from '../../../assets'


export const SearchDropdown = () => {
    return (
        <>
            <div className='relative w-[38.7rem]'>
                <input
                    type='text'
                    placeholder='All game providers'
                    className='w-[38.7rem] bg-white font-bold rounded-xl py-[10px] pr-3 pl-12 text-white h-14 placeholder-black'
                />
                <span className='absolute top-1/2 left-4 -translate-y-1/2'>
                    <img src={SearchFilterIcon} />
                </span>
                <span className='absolute top-1/2 right-4 z-10 -translate-y-1/2'>
                    <img src={DropdownIcon} />
                </span>
            </div>
        </>
    )
}
