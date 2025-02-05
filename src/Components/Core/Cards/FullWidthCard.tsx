import { DefaultButton } from '../Buttons/DefaultButton'


export const FullWidthCard = ({ banner }: { banner: string }) => {
    return (
        <div className='w-full flex flex-col text-start bg-cover bg-center h-80 rounded-2xl p-10 pl-20' style={{ backgroundImage: `url(${banner})` }}>
            <div className='w-96 text-start'>
                <h1 className='font-extrabold text-5xl mb-3'>
                    Get your latest offers
                </h1>
                <span className='font-normal text-2xl uppercase'>On Book Of Dead</span>
            </div>
            <div className='mt-5'>
                < DefaultButton />
            </div>
        </div>
    )
}