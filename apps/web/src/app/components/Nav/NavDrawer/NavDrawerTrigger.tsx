import { Slant as Hamburger } from 'hamburger-react'
import { navStore } from '@/stores/navStore'
 
const NavDrawerTrigger = () => {
  const isNavActive = navStore(state => state.isNavActive)
  const setNavActive = navStore(state => state.setNavActive)

  return (
    <Hamburger 
      color="currentColor"
      distance="lg"
      hideOutline
      label="Menu"
      rounded
      size={24}
      toggle={setNavActive}
      toggled={isNavActive}
    />
  )
}
 
export default NavDrawerTrigger