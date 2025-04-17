import React, { useState } from 'react'
import clsx from 'clsx'
import { MdKeyboardArrowDown as DisclosureIcon } from '@react-icons/all-files/md/MdKeyboardArrowDown'
import { motion as m } from 'motion/react'
import Link from '@/components/Link'
import NavColumnFeatured from '../NavColumnFeatured'
import NavRow from '../NavRow'
import { hasDropdown } from '../utils'
import { NavBarItemProps } from '../NavBar/NavBarMenu'
import { LinkType } from '@/types'
 
interface NavDrawerMenuProps {
  navigation: any
}

const navDrawerPrimaryVariants = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  initial: {},
}

const itemVariants = {
  animate: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: -5 },
}

const Item = ({ children }: {children: React.ReactNode}) => (
    <div className='flex justify-between py-2 border-b border-border-muted'>
      {children}
    </div>
)

const NavDrawerMenu = ({ navigation }: NavDrawerMenuProps) => {
  const { buttons, menu } = navigation || {}
  const [current, setCurrent] = useState<null | number>(null)
  const handleClick = (index: number) => {
    if (current === index) {
      setCurrent(null)
      return null
    }
    setCurrent(index)
    return null
  }

  return (
    <div className={clsx('h-full max-h-full w-full flex flex-col justify-between px-2 pt-2 relative')}>
      <m.div
      animate={'animate'}
        exit={'initial'}
        initial={'initial'}
        variants={navDrawerPrimaryVariants}
      >        
        {menu?.map(
          (
            { _key, link, menuColumnFeatured, rows: _rows, templateRows }: NavBarItemProps,
            index: number
          ) => {
            const { items } = menuColumnFeatured || {}
            const rows = _rows || templateRows

            if (hasDropdown({ link, rows })) {
              const { label } = link
              return (
                <m.div
                  className='cursor-pointer'
                  key={_key}
                  onClick={() => handleClick(index)}
                  transition={{ duration: 0.2 }}
                  variants={itemVariants}
                >
                  <Item>
                    <span className='link-text-secondary'>{label}</span>
                    <div className={clsx('text-neutral-obsidian transition-transform duration-300 ease-linear', current===index && '-rotate-180')}>
                      <DisclosureIcon size="1.5rem" />
                    </div>
                  </Item>
                  {index === current && (
                    <div className='p-1'>
                      {rows.map(({ _key: __key, ...rest }) => (
                        <NavRow isMobile key={__key} {...rest} />
                      ))}
                      {items && <NavColumnFeatured items={items} />}
                    </div>
                  )}
                </m.div>
              )
            }

            return (
              <m.div
              key={_key}
              transition={{ duration: 0.2 }}
              variants={itemVariants}
              >
                <Item>
                  <Link {...link} hasIcon={false} className='link-text-secondary min-h-3' linkStyle='text' />
                </Item>
              </m.div>
            )
          }
        )}
      </m.div>
      <m.div 
        animate={{ opacity: 1, y: 0 }}
        className='sm:hidden flex flex-col gap-3 pt-2 px-2.5 pb-5 sticky bottom-0 border-t border-border-muted bg-surface-neutral-dark z-header'
        exit={{ opacity: 0, y: 50 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: menu?.length && menu.length * 0.1, duration: 0.2 }}>
          {buttons?.map(({_key, ...button}: LinkType, i: number) => <Link key={_key} {...button} linkStyle={i === 0 ? 'text' : 'button-solid'} />)}
      </m.div>
    </div>
  )
}
 
export default NavDrawerMenu