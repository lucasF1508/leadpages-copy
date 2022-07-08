## Listing Card

### Usage

The listing card is a simple card for helping users make decision about using or implementing something.

```js
import RatioCard from '@lp/leads/RatioCard';
```

```js
<RatioCard
  subTitle="Webinar"
  title="Live Webinar Funnel For all Your Conversion Needs"
  description="Convert visitors into leads with clear call to action."
  icon={icons.Webinar}
  onClick={() => { console.warn('card clicked'); }}
/>
```

### Properties

* `onClick` - click callback
* `subTitle` - short small title (sort value)
* `title` - main descriptive title
* `description` - long descriptive details
* `icon` - icon name from supported icons
* `className` - string of classes to overwrite styles
* `isActive` - forces the hover/active styles

| propName    | propType | defaultValue | isRequired |
|-------------|----------|--------------|------------|
| onClick     | func     | () => {}     |            |
| subTitle    | string   | ''           |            |
| title       | string   | ''           |            |
| description | string   | ''           |            |
| icon        | string   | null         |            |
| className   | string   | null         |            |
| isActive    | bool     | false        |            |
