import { SelectedPage } from '../shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string,
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage) => void
}

const Link = ({page,setSelectedPage,selectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g,  "") as SelectedPage;

  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-extra-500": "" }
    transition duration-500 hover:text-primary4-300
    `}
    href={`#${lowerCasePage}`}
    onClick={()=> setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}


export default Link