'use client'

import React, { useEffect } from 'react'
import clsx from 'clsx'
import getClient from 'client'
// @ts-expect-error Better typing for config required
import { studio } from 'config'
import { debounce } from 'lodash'
import { usePathname } from 'next/navigation'
import { disableDraftMode, revalidate } from '@/(pages)/actions'
import Text from '@/components/Text'

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production_v3'

const client = getClient({ 
  // @ts-expect-error Better typing for client required
  config: {
    dataset,
  }, 
  //This will always be true as the preview panes purpose is to listen to drafts
  preview: true 
})

const PreviewPane = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    const types = studio?.docTypes || []
    
    const query = '*[_type in $types && path == $pathname]'
    const params = {pathname, types}

    const debouncedRevalidate = debounce(() => {
      revalidate(pathname)
    }, 1000)

    const subscription = client.listen(query, params).subscribe((update: unknown) => {
      if (!update) return
      debouncedRevalidate()
    })

    return () => {
      subscription.unsubscribe()
      debouncedRevalidate.cancel()
    }
  }, [pathname])

  if (!pathname) return null

  return (
    <div className={clsx('fixed bottom-0 right-10 p-2 bg-light shadow-xl max-w-cols3 border')}>
      <Text className='text-xxs text-obsidian-600 mb-3'>
        You are currently in preview mode and are able to see drafts
        without deploying. The site will prediv slower in preview mode.
      </Text>
      <div className='w-full link link-button-solid cursor-pointer' onClick={() => {
        disableDraftMode(pathname)
      }}>
        Exit preview mode
      </div>
    </div>
  )
}
 
export default PreviewPane
