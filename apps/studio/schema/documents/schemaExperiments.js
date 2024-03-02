import { MdCallSplit as icon } from 'react-icons/md'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import sanityClient from 'part:@sanity/base/client'

const client = sanityClient.withConfig({ apiVersion: '2021-06-15' })

export const schemaExperiments = {
  icon,
  name: 'experiments',
  type: 'document',
  title: 'A/B Tests',
  fields: [
    F.message(
      'After publishing your experiment remember to <b>deploy the site to start the test.</b>',
      {
        name: 'publishMessage',
        hidden: ({ document }) => document.completed,
      }
    ),
    F.string({
      name: 'name',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => {
        const { _id } = document
        return !_id.includes('drafts.')
      },
    }),
    F.reference(['page', 'pageHome'], {
      name: 'control',
      validation: (Rule) => Rule.required(),
      readOnly: ({ document }) => {
        const { _id } = document
        return !_id.includes('drafts.')
      },
      weak: true,
      options: {
        filter: async () => {
          const docsToFilter = await client.fetch(
            `*[_type == "experiments" && !(_id in path('drafts.**')) && !completed].control._ref`
          )

          return {
            filter: '!(_id in $docsToFilter)',
            params: {
              docsToFilter,
            },
          }
        },
      },
    }),
    F.boolean({
      name: 'completed',
      initialValue: false,
      hidden: true,
    }),
    F.message(
      'This experiment has been completed and the winner has been copied to the control. <b>To publish these changes deploy the site.</b>',
      {
        name: 'completedMessage',
        hidden: ({ document }) => !document.completed,
      }
    ),
    F.array({
      name: 'variants',
      hidden: ({ document }) => document.completed,
      validation: (Rule) => Rule.required().min(1),
      readOnly: ({ document }) => {
        const { _id } = document
        return !_id.includes('drafts.')
      },
      description:
        'The sum of the weights for each page must be less than 100%, the remaining traffic will be redirected to the control.',
      of: [
        F.object({
          name: 'variant',
          icon,
          fields: [
            F.reference(['page', 'pageHome'], { weak: true }),
            F.number({
              name: 'weight',
              description:
                'This field takes a number between 0 and 1 representing the percentage of traffic you would like redirected to this page.',
              validation: (Rule) => [
                Rule.required(),
                Rule.min(0).max(1),
                Rule.custom((value, { document }) => {
                  const { variants = [] } = document
                  const totalWeight = variants.reduce((acc, current) => {
                    const { weight = 0 } = current
                    const _totalWeight = acc + weight
                    return _totalWeight
                  }, 0)

                  return totalWeight < 1
                    ? true
                    : 'Total weight of variants must be less than 1'
                }),
              ],
            }),
          ],
          preview: {
            select: {
              page: 'page.title',
              ref: 'page',
              weight: 'weight',
            },
            prepare: ({ page, weight }) => ({
              title: `${page}${
                weight ? `: ${weight * 100}%` : ': no page wieght set'
              }`,
            }),
          },
        }),
      ],
    }),
  ],
}
