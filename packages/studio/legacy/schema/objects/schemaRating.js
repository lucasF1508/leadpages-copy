import {F} from '@/legacy/schema/tool'

export const rating = F.number({
  name: 'rating',
  validation: (Rule) => Rule.min(1).max(5).positive().precision(1),
  initialValue: 5,
  options: {
    list: [
      {title: '5', value: 5},
      {title: '4.5', value: 4.5},
      {title: '4', value: 4},
      {title: '3.5', value: 3.5},
      {title: '3', value: 3},
      {title: '2.5', value: 2.5},
      {title: '2', value: 2},
      {title: '1.5', value: 1.5},
      {title: '1', value: 1},
      {title: '0.5', value: 0.5},
    ],
    layout: 'dropdown',
  },
})
