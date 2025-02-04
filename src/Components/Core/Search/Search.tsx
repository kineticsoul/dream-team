import { SearchIcon } from '../../../assets'


export const Search = () => {
    return (
        <>
            <div className='relative w-xl'>
                <input
                    type='text'
                    placeholder='Find your game'
                    className='w-xl bg-custom-dark-blue font-bold rounded-xl py-[10px] pr-3 pl-12 text-white h-14 placeholder-white'
                />
                <span className='absolute top-1/2 left-4 -translate-y-1/2'>
                    <img src={SearchIcon} />
                </span>
            </div>
        </>
    )
}


