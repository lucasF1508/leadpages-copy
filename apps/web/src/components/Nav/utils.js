export const isDropdown = (link) => link?.condition === 'dropdown'

export const hasDropdown = ({ rows, link }) =>
  isDropdown(link) && rows?.length > 0

export const menuHasDropdown = (menu) =>
  menu.some(({ rows, link }) => hasDropdown({ rows, link }))
