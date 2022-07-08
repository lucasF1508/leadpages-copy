Tag
===

### Usage

The `Tag` component is a simple component used for assigning a *tag* or *label* to something.

```js
import Tag from '@lp/leads/Tag';
```

```js
<Tag
  value="default"
  backgroundColor="blueDarker"
  isEditable
  onSelect={() => {}}
  onKeyDown={() => {}}
  onClick={() => {}}
  onChange={() => {}}
/>
```

### Properties

* `value` - value for an individual input (e.g. `Frank`)
* `backgroundColor` - the color of the `Tag`
* `isEditable` - is the `Tag` editable
* `onSelect` - fires when `Tag` is clicked when **not** in edit mode
* `onKeyDown` - fires when `enter` is pressed in the input field
* `onClick` - fires when you click ✅ after editing
* `onChange` - fires when anything changes in input

| propName    | propType | defaultValue | isRequired |
|-------------|----------|--------------|------------|
| value       | string   | ''           |            |
| backgroundColor| string| ''        |            |
| isEditable  | boolean  | false        |            |
| onSelect    | func     | () => {}     |            |
| onKeyDown   | func     | () => {}     |            |
| onClick     | func     | () => {}     |            |
| onChange    | func     | () => {}     |            |
