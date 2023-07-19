import closeSVG from '@legacy/assets/images/global/x_close.svg'
import leftArrow from '@legacy/assets/images/global/arrow_left.svg'
import { styled } from '@design'
import {
  MobileMenuInnerSeparator,
  MobileMenuLink,
  MobileMenuInnerItem,
  CloseIconContainer,
  MobileMenuX,
} from './NavDrawer'

const ArrowLeft = styled('img', {
  width: '20px',
  height: '10px',
})

const MobileMenuInnerContainer = styled('div', {
  zIndex: 60,
  padding: 0,
  position: 'relative',
  height: '100%',
  width: '100%',
  background: '$white',
})

const MobileMenuSubmenuHeadingContainer = styled('div', {
  position: 'relative',
  top: '-3.65rem',
  display: 'inline',
  cursor: 'pointer',
})

const NavDrawerSecondaryMenu = ({
  hideMobileMenu,
  toggleMenu,
  title,
  menuItems,
  path,
}) => (
  <MobileMenuInnerContainer>
    <MobileMenuX onClick={hideMobileMenu}>
      <CloseIconContainer src={closeSVG.src} alt="close icon svg" />
    </MobileMenuX>
    <MobileMenuSubmenuHeadingContainer onClick={toggleMenu}>
      <ArrowLeft src={leftArrow.src} alt="left arrow" />
      {title}
    </MobileMenuSubmenuHeadingContainer>
    {menuItems.map(({ _id, condition, url, dataGtm, hasSeparator, label }) => (
      <>
        <MobileMenuInnerItem>
          <MobileMenuLink
            key={_id}
            condition={condition}
            url={url}
            dataGtm={dataGtm}
            className={path === url && 'active active-mobile-menu'}
          >
            {label}
          </MobileMenuLink>
        </MobileMenuInnerItem>
        {hasSeparator && <MobileMenuInnerSeparator />}
      </>
    ))}
  </MobileMenuInnerContainer>
)

export default NavDrawerSecondaryMenu
