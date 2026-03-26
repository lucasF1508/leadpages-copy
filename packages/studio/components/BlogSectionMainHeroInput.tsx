import React from 'react'
import { set, type BooleanInputProps } from 'sanity'
import { useClient, useFormValue } from 'sanity'
import { Flex, Stack, Switch, Text } from '@sanity/ui'

/**
 * Boolean field for `post.blogSectionMainHero`.
 * Turning this on patches all other posts to false so only one “main hero” exists.
 */
export default function BlogSectionMainHeroInput(props: BooleanInputProps) {
  const { value, onChange, readOnly } = props
  const client = useClient({ apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION })
  const documentId = useFormValue(['_id']) as string | undefined

  const handleChange = async (checked: boolean) => {
    if (readOnly) return
    try {
      if (checked && documentId) {
        const baseId = documentId.replace(/^drafts\./, '')
        const currentIds = new Set([documentId, baseId, `drafts.${baseId}`])
        const flagged: string[] = await client.fetch(
          `*[_type == "post" && blogSectionMainHero == true]._id`
        )
        const others = flagged.filter((oid) => !currentIds.has(oid))
        if (others.length > 0) {
          const tx = client.transaction()
          for (const oid of others) {
            tx.patch(oid, { set: { blogSectionMainHero: false } })
          }
          await tx.commit()
        }
      }
    } catch (err) {
      console.error('blogSectionMainHero: failed to unset other posts', err)
    }
    onChange(checked ? set(true) : set(false))
  }

  return (
    <Stack space={3}>
      <Text size={1} muted>
        When on, this post drives the large title, image, and intro in the Blog Section. Turning this
        on clears it on all other posts.
      </Text>
      <Flex align="center" gap={3}>
        <Switch
          checked={!!value}
          disabled={readOnly}
          onChange={(event) => void handleChange(event.currentTarget.checked)}
        />
        <Text size={1}>Blog section main hero</Text>
      </Flex>
    </Stack>
  )
}
