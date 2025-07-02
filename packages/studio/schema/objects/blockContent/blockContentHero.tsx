import {F} from '@/schema/tool'
import {blockContentSimple} from './blockContentSimple'

const [toolbar] = blockContentSimple?.of || []

const SmallerTextStyle = (props:any) => <span style={{fontSize: '0.875em'}}>{props.children}</span>
const LargerTextStyle = (props:any) => <span style={{fontSize: '1.125em'}}>{props.children}</span>
const HeadingTextStyle = (props:any) => <span style={props.style}>{props.children}</span>

export const blockContentHero = F.array({
  title: 'Block Content Hero',
  name: 'blockContentHero',
  of: [
    {
      ...toolbar, 
      styles: [         
        {title: 'Normal', value: 'normal'},
        {title: 'Smaller', value: 'small', component: SmallerTextStyle},
        {
          title: 'Larger',
          value: 'large',
          component: LargerTextStyle,
        },
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
    ]
  }]
})
