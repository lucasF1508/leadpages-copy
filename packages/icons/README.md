# Icon Generator

## Usage

### Build

```sh
yarn workspace icons build
```

### Import Icons

```json
// package.json
{
  // ...
  "dependencies": {
    // ...
    "icons": "*"
  }
}
```

#### All Icons

```tsx
import icons from 'icons'
// import { all } from 'icons' // Or this...

console.log(icons)
// {
//   icon: {
//     height: 24,
//     width: 24,
//     path: 'M9 9.75L4.75 12L9 14.25L13.25 12L9 9.75Z'
//   },
//   anotherIcon: {
//     height: 24,
//     width: 24,
//     path: 'M4.75 11.75H8.25L10.25 4.75L13.75 19.25L15.75 11.75H19.25'
//   },
// }

console.log(icons.anotherIcon)
// {
//   height: 24,
//   width: 24,
//   path: 'M4.75 11.75H8.25L10.25 4.75L13.75 19.25L15.75 11.75H19.25'
// },
```

#### Individual Icons

```tsx
import { anotherIcon } from 'icons/all/anotherIcon'

console.log(anotherIcon)
// {
//   height: 24,
//   width: 24,
//   path: 'M4.75 11.75H8.25L10.25 4.75L13.75 19.25L15.75 11.75H19.25'
// }
```
