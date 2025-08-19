import {F} from '@/schema/tool'
import {blockContent} from './blockContent'
import {styles} from './util/styles'


const [toolbar] = (blockContent as any)?.of || []
const LargerTextStyle = (props:any) => <span style={{fontSize: '1.125em'}}>{props.children}</span>
const HeadingTextStyle = (props:any) => <span style={props.style}>{props.children}</span>


const {
  larger,
  normal,
  overline,
  smaller,
  smallest,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
} = styles

export const blockContentHero = F.array({
  title: 'Block Content Hero',
  name: 'blockContentHero',
  of: [
    {
      ...toolbar,
      styles: [

        { title: 'H1 as <h1>',
          value: 'h1-hero',
          component: (props:any) => <HeadingTextStyle style={{fontWeight: 700, fontSize: '2.5em'}} {...props} />
        },
        { title: 'H2 as <h1>',
          value: 'h2-hero',
          component: (props:any) => <HeadingTextStyle style={{fontWeight: 700, fontSize: '2em'}} {...props} />
        },
        { title: 'H3 as <h1>',
          value: 'h3-hero',
          component: (props:any) => <HeadingTextStyle style={{fontWeight: 600, fontSize: '1.75em'}} {...props} />
        },
        { title: 'H4 as <h1>',
          value: 'h4-hero',
          component: (props:any) => <HeadingTextStyle style={{fontWeight: 500, fontSize: '1.5em'}} {...props} />
        },
        h2,
        h3,
        h4,
        h5,
        h6,
        larger,
        normal,
        smaller,
        smallest,
        overline,
        blockquote,
    ]
  }]
})
