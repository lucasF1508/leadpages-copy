import type { BestOfBlogItem } from '../BestOfBlog.types'
import clsx from 'clsx'
import Label from '@/components/Label'
import Link from '@/components/Link'
import Media from '@/components/Media'
import { defaultLargeBlockStyles } from '@/components/PortableText'
import Text from '@/components/Text'

interface BlogFeatureCardProps {
  className?: string
  item: BestOfBlogItem
}

export default function BlogFeatureCard({ className, item }: BlogFeatureCardProps) {
  const { excerpt, href = '#', image, tag, title } = item
  const site = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')
  const isExternal = /^https?:\/\//.test(href) && (site ? !href.startsWith(site) : true)

  const ptBlocks = [
    { _type: 'block', children: [{ _type: 'span', text: String(title || '') }], markDefs: [], style: 'h5' },
    ...(excerpt
      ? [{ _type: 'block', children: [{ _type: 'span', text: String(excerpt) }], markDefs: [], style: 'normal' }]
      : []),
  ] as const

  return (
    <article
      className={clsx(
        'overflow-hidden rounded-2xl bg-[#1A1B21] ring-1 ring-white/10 shadow-lg',
        'p-2 md:p-4',
        className
      )}
    >
      <div
        className={clsx(
          'grid grid-cols-1 gap-y-7',
          'md:grid-cols-2 md:gap-x-6',
          'xs:px-3 md:px-0 max-w-[30rem] md:max-w-none mx-auto h-full w-full'
        )}
      >
        <div className="w-full">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 md:min-h-[18rem] lg:min-h-[20rem]">
            {image ? (
              <Media
                classNames={{ media: 'object-cover', root: 'absolute inset-0' }}
                fill
                media={{ condition: 'image', image, ratio: undefined }}
                priority={false}
                sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
              />
            ) : (
              <div aria-hidden className="absolute inset-0 bg-neutral-800" />
            )}
          </div>
        </div>

        <div className="w-full min-w-0 relative z-10">
          {tag && (
            <div className="inline-flex items-center max-w-fit rounded-lg theme-light:bg-gradient-purple theme-dark:bg-gradient-purple-invert px-1.5 py-[3px] leading-none mb-2">
              <Label className="type-overline-xxs text-light" content={String(tag)} />
            </div>
          )}

          <Text
            as="div"
            blockStyles={defaultLargeBlockStyles}
            className="[&>*]:max-md:!mb-2"
            classNames={{
              large: 'max-md:!mt-2',
              normal: 'max-md:!mt-2',
              small: 'max-md:!mt-2 last:!mb-0',
            }}
            content={ptBlocks as any}
          />

          <div className="mt-3">
            <Link
              aria-label={`Read more: ${title}`}
              className="rounded-md cursor-pointer"
              condition={isExternal ? 'external' : 'internal'}
              linkStyle="button-secondary"
              url={href}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

