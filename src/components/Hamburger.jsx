import HamburgerMenu from '../Assets/icons8-hamburger-menu-32.png'
import ClearLink from '../Assets/clearlink-logo.png'
const Hamburger = () => {
  return (
    <div className='hamburgerMenu'>
        <img src={ClearLink} alt="" />
        <img src={HamburgerMenu} alt="" />
    </div>
  )
}

export default Hamburger