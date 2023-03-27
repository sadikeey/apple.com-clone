import { Link } from 'react-router-dom'

interface ICreateNavLinksProps {
  title: string
  link: string
  liStyles: string
}

const CreateNavLink: React.FC<ICreateNavLinksProps> = (props) => {
  return (
    <li className={props.liStyles}>
      <Link to={props.link}>{props.title}</Link>
    </li>
  )
}

interface INavLinksProps {
  ulStyles: string
  liStyles: string
}

const NavLinks: React.FC<INavLinksProps> = (props) => {
  return (
    <ul className={props.ulStyles}>
      <CreateNavLink 
        title='Store'
        link='/store'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='Mac'
        link='/mac'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='iPad'
        link='/ipad'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='iPhone'
        link='/iphone'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='Watch'
        link='/watch'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='AirPods'
        link='/airpods'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='TV & Home'
        link='/tv-home'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='Entertainment'
        link='/entertainment'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='Accessories'
        link='/accessories'
        liStyles={props.liStyles}
      />
      <CreateNavLink 
        title='Support'
        link='/support'
        liStyles={props.liStyles}
      />
    </ul>
  )
}

export default NavLinks
