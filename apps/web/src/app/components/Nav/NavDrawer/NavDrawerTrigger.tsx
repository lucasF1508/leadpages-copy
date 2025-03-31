import { Slant as Hamburger } from 'hamburger-react'
import { useNavStore } from '@/state/navStore'
 
const NavDrawerTrigger = () => {
  const isNavActive = useNavStore(state => state.isNavActive)
  const setNavActive = useNavStore(state => state.setNavActive)

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