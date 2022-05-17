import React, { useEffect, useState, forwardRef } from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import Select, { components } from 'react-select'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import { debounce } from 'lodash'
import { Card, Flex, Stack, Text } from '@sanity/ui'
import { API } from '../lib/api'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

const stripVideo = (video) => ({
  created_time: video.created_time,
  description: video.description,
  files: video.files,
  is_playable: video.is_playable,
  link: video.link,
  manage_link: video.manage_link,
  modified_time: video.modified_time,
  name: video.name,
  pictures: video.pictures,
  privacy: video.privacy,
  release_time: video.release_time,
  status: video.status,
  resource_key: video.resource_key,
  duration: video.duration,
})

const $Card = ({ children, ...props }) => (
  <Card style={{ background: 'transparent' }} {...props}>
    {children}
  </Card>
)

export const Option = (props) => {
  const {
    data: { name, duration: durationSeconds, created_time, pictures },
  } = props
  const [thumbnail] = pictures.sizes
  const timeConfig = {
    timeZone: 'America/Vancouver',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  const createdDate = new Date(created_time).toLocaleString('en-US', timeConfig)
  const duration = new Date(durationSeconds * 1000).toISOString().substr(14, 5)

  return (
    <components.Option {...props}>
      <Flex align="center">
        <$Card>
          <img
            style={{ display: 'block', border: '1px solid rgba(0,0,0,0.3)' }}
            height="55"
            src={thumbnail.link}
            size={1}
          />
        </$Card>
        <$Card marginLeft={2}>
          <Stack space={2}>
            <Text size={2} style={{ fontWeight: '600' }}>
              {name}
            </Text>
            <Text size={1}>
              Duration: <span style={{ opacity: '0.7' }}>{duration}</span>
            </Text>
            <Text size={1}>
              Uploaded: <span style={{ opacity: '0.7' }}>{createdDate}</span>
            </Text>
          </Stack>
        </$Card>
      </Flex>
    </components.Option>
  )
}

export const VimeoInputComponent = forwardRef((props, ref) => {
  const { type, onChange, value: savedValue } = props
  const [videos, setVideos] = useState([])
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    API.videos.get({ per_page: 100 }).then((result) => {
      const { data } = result?.data
      const videoOptions = data.map((video) => {
        const { name } = video
        return {
          ...stripVideo(video),
          label: name,
        }
      })

      setAllVideos(videoOptions)
      setVideos(videoOptions)
    })
  }, [])

  const handleChange = (inputData, { name: _type }) => {
    onChange(createPatchFrom({ _type, ...inputData }))
  }

  const handleInputChange = (string) => {
    if (string.length <= 2) {
      setVideos(allVideos)
      return
    }

    API.videos.query(string).then((result) => {
      const { data } = result?.data
      const videoOptions = data.map((video) => {
        const { name, pictures } = video

        return {
          ...stripVideo(video),
          label: name,
        }
      })

      setVideos(videoOptions)
    })
  }

  const noOptionsMessage = () => {
    return allVideos.length > 0
      ? 'No videos found.'
      : 'Loading all videos... Begin typing to search immediately.'
  }

  const isOptionSelected = (option, savedValues) => {
    return savedValues.some(
      (value) => value.resource_key === option.resource_key
    )
  }

  return (
    <FormField label={type.title} description={type.description}>
      <Select
        ref={ref}
        id={type.name}
        name={type.name}
        instanceId={type.name}
        options={videos}
        components={{ Option }}
        placeholder="Type to find a video…"
        noOptionsMessage={noOptionsMessage}
        onChange={handleChange}
        onInputChange={debounce(handleInputChange, 200)}
        isOptionSelected={isOptionSelected}
        styles={{
          menu: (provided) => {
            return {
              ...provided,
              zIndex: 2000,
            }
          },
        }}
        value={savedValue}
      />
    </FormField>
  )
})

export default VimeoInputComponent
