"// @ts-ignore"
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Link from "./link"
import { SelectedPage } from '../shared/types'
import useMediaQuery from '../hooks/useMediaQuery'//'../hooks/useMediaQuery.tsx'
import Logo from '../assets/images/Logo.png'
import ActionButton from '../shared/ActionButton'
type Props = {
    navTop:boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};


const Navbar = ({navTop, selectedPage, setSelectedPage}: Props) =>{

const flexBetween = "flex items-center justify-between";
const [MenuToggled,setIsMenuToggled] = useState<boolean>(false)
const AboveMediumScreen = useMediaQuery("(min-width:800px)")
const navbarBackground = navTop ? "" : "bg-extra4-100 drop-shadow"


 return(
<nav>
<div className={`${navbarBackground} ${flexBetween} bg-ally9 fixed top-0 z-30 w-full py-6`}>
    <div className={`${flexBetween} mx-auto w-3/4 `}>
        <div className={`${flexBetween} w-full gap-16`}>
            <img alt="Logo" src={Logo} className="w-28"/>
                {AboveMediumScreen ? (<>
                <div className={`${flexBetween} text-white gap-8 text-lg `}>
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page="MyHealth360"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                        <ActionButton setSelectedPage={setSelectedPage}>sign In</ActionButton>
                        <p>sign up</p>
                </div></>): (
                        <button
                        className="rounded-full bg-extra p-2"
                        onClick={ () => setIsMenuToggled( !MenuToggled)} >
                        <Bars3Icon className="h-6 w-6  text-black" />
                       
                        </button>
                )}
        </div>
    </div>
</div>
{/* Mobile Screen */}
{!AboveMediumScreen && MenuToggled && (
<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-ally9 drop-shadow-xl" >
<div className="flex justify-end p-12">
<button onClick={ () => setIsMenuToggled( !MenuToggled)}>
    <XMarkIcon className="h-6 w-6 text-black" />
</button>
</div>
<div className= "ml-[33%] flex flex-col gap-10 text-2xl text-primary5">
                    <Link page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page="MyHealth360"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                    <Link page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} />
                        
                    <ActionButton setSelectedPage={setSelectedPage}>sign In</ActionButton>
                </div>
</div>

)}
</nav>
 )
};


export default Navbar;





















