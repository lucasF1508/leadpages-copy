## Tooltip

### Usage

The tooltip usage is primarily to help the user learn what a button does if it is not obvious.

```js
import Tooltip from '@lp/leads/Tooltip';
```

```js
<Tooltip
  tip="Click to save"
><SaveButton /></Tooltip>
```

### Properties

> The parent element has the rest of unidentified props spread onto it. This allow it to be have aria, events and styles defined at implementation.

* `bottom` - Prop used to tell the tooltip to be underneath the target.
* `children` - The node that the tooltip is addressing.
* `className` - React className prop.
* `hidden` - A boolean to programmatically hide the tool tip.
* `hover` - A boolean prop that allows users to programmatically control the tooltip being shown.
* `isDiv` - Will render the tooltip container as a `div`, default is a `span`
* `left` - Prop used to tell the tooltip to be left of the target.
* `right` - Prop used to tell the tooltip to be right of the target.
* `tip` - Node used as the prop display, can be string or any react node.
* `top` - Prop used to tell the tooltip to be above the target.

| propName    | propType | defaultValue | isRequired |
|-------------|----------|--------------|------------|
| bottom      | bool     | false        |            |
| children    | node     | null         |            |
| className   | string   | ''           |            |
| hidden      | bool     | false        |            |
| hover       | bool     | true         |            |
| isDiv       | bool     | null         |            |
| left        | bool     | false        |            |
| right       | bool     | false        |            |
| tip         | node     | null         |            |
| top         | bool     | false        |            |
