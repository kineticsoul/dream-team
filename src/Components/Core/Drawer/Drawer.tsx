import { SideBar } from '../Sidebar/Sidebar'


export const Drawer = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: Function }) => {
    return (
        <div className={"fixed overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out " + (isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 -translate-x-full ")}>
            <section className={"w-screen max-w-lg left-0 bottom-0 absolute bg-white h-11/12 shadow-xl delay-400 duration-500 ease-in-out transition-all transform " + (isOpen ? " translate-x-0 " : " -translate-x-full ")}>
                <SideBar />
            </section>
            <section className="w-screen h-full cursor-pointer bg-transparent " onClick={() => { setIsOpen(false) }}></section>
        </div>
    )
}