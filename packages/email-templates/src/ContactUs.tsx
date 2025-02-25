import type { HeadingProps } from '@react-email/components'
import * as React from 'react'
import {
  Heading as _Heading,
  Body,
  Container,
  Head,
  Hr,
  Html,
  // Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import { isEmpty } from './helpers'

export interface ContactUsProps {
  date?: Date
  dateFormatOptions?: Intl.DateTimeFormatOptions
  formData?: Record<string, string>[]
  project?: string
  title?: string
}

const Heading = _Heading as React.ComponentType<HeadingProps>

const previewProps = {
  formData: [
    { title: 'Name', value: 'Test' },
    { title: 'Email', value: 'test@test.com' },
    { title: 'Phone', value: '555-555-5555' },
    {
      title: 'Message',
      value:
        'Cras ultricies mi eu turpis hendrerit fringilla. Nam commodo suscipit quam. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce pharetra convallis urna.',
    },
  ],
  project: 'gearboxbuilt.com',
  title: 'Contact Form',
} as ContactUsProps

export const ContactUs = (props: ContactUsProps) => {
  const {
    date = new Date(),
    formData = [],
    project,
    title,
  } = isEmpty(props) ? previewProps : props
  const dateString = date?.toLocaleTimeString('en-US', {
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Html>
      <Head />
      {/* <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview> */}
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="my-auto pb-12 pt-3">
            <Section>
              <Heading className="mb-2 text-3xl text-gray-800">{title}</Heading>
              <Text className="mt-0 text-base font-semibold text-gray-800">
                Someone just submitted a form using {project}
              </Text>
            </Section>
            <Section>
              {formData?.map(({ title, value }, index) => (
                <Text key={index}>
                  <span className="block text-sm text-gray-500">{title}</span>
                  <span className="block text-base font-medium text-gray-800">
                    {value}
                  </span>
                </Text>
              ))}
            </Section>
            <Hr className="border-gray-200" />
            <Text className="text-xs text-gray-500">
              Submitted {dateString}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ContactUs.PreviewProps = previewProps

export default ContactUs
