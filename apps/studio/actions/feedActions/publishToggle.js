import React from 'react'
import { Button } from '@sanity/ui'
import {
  BsCheckCircle,
  BsBackspaceReverse,
  BsExclamationTriangle,
} from 'react-icons/bs'
import {
  PublishAction,
  UnpublishAction,
} from 'part:@sanity/base/document-actions'

export const publishFeed = (props) => {
  const { draft, published } = props
  const { mapping = [] } = draft || {}
  const {
    icon: Icon,
    disabled,
    title,
    shortcut,
    ...Action
  } = PublishAction(props)

  const _id = mapping.filter(({ mapping }) => mapping?.to?.includes('_id'))
  const noId = !_id.length > 0

  return {
    ...Action,
    disabled: disabled || noId,
    icon: draft && published ? Icon : BsCheckCircle,
    label: draft && published ? 'Update Feed' : 'Enable Feed',
    color: 'success',
    title:
      draft && noId
        ? 'Field Mapping MUST include an `_id` field before enabling'
        : title,
    shortcut: noId ? null : shortcut,
  }
}

export const unpublishFeed = (props) => {
  const { published } = props

  return {
    ...UnpublishAction(props),
    disabled: !published,
    icon: () => (
      <BsExclamationTriangle style={published && { color: '#9d342f' }} />
    ),
    label: 'Disable Feed',
    color: 'danger',
    title: !published && 'This feed is not enabled',
  }
}

/**
 * TODO:
 * @see {@link https://github.com/sanity-io/sanity/blob/4fbdb5315a58cc3814424ba8a544a8988551d6fc/packages/%40sanity/desk-tool/src/actions/PublishAction.tsx PublishAction}
 * @see {@link https://github.com/sanity-io/sanity/blob/4fbdb5315a58cc3814424ba8a544a8988551d6fc/packages/%40sanity/desk-tool/src/actions/UnpublishAction.tsx UnpublishAction}
 */
export const publishToggle = (props) => {
  const { type } = props

  if (type !== 'feed') {
    return PublishAction(props)
  }

  return publishFeed(props)
}
