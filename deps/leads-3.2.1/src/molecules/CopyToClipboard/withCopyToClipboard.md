## Copy To Clipboard

### Usage

This HOC is used to allow an existing component to have the functionality to copy text to the clipboard. It accomplished this by inserting a `textarea` into the `WrappedComponent`. The `textarea` is hidden from view. It is programmatically selected and then `document.execCommand('copy')` is executed to copy the text.

```js
import withCopyToClipboard from '@lp/leads/CopyToClipboard';
```

```js
const CopyTextButton = withCopyToClipboard(Button);

<CopyTextButton
  textToCopy="This is the text to copy"
  onCopySuccess={event => alert('copied', JSON.stringify(event))}
  onCopyError={error => alert('not copied', JSON.stringify(error))}
>
  Click to copy
</CopyTextButton>
```

### Properties

* `onCopyError` - A function that executes when the copy failed.
* `onCopySuccess` - A A function that executes when the copy succeeded.
* `textToCopy` - The text to copy.

| propName      | propType | defaultValue | isRequired |
|---------------|----------|--------------|------------|
| textToCopy    | string   | ''           |            |
| onCopyError   | func     | () => {}     |            |
| onCopySuccess | func     | () => {}     |            |
