import AddressAutocomplete from 'part:gearbox-autocomplete-address/autocomplete-address'
import { BsCardText as icon } from 'react-icons/bs'

const apiKey = process.env.SANITY_STUDIO_GOOGLE_API_KEY

export const schemaAddress = {
  icon,
  title: 'Address',
  name: 'address',
  type: 'object',
  inputComponent: AddressAutocomplete,
  options: {
    apiKey,
    types: ['(regions)'], // address, geocode, establishment, (regions), (cities)
    // fields: ['geometry', 'address_components', 'place_id', 'name']
    // componentRestrictions: { country: ['ca'] },
  },
  fields: [
    {
      type: 'string',
      name: 'label',
    },
    {
      type: 'string',
      name: 'street',
    },
    {
      type: 'string',
      name: 'placeId',
    },
    {
      type: 'object',
      name: 'cords',
      fields: [
        {
          name: 'lat',
          type: 'number',
        },
        {
          name: 'lng',
          type: 'number',
        },
      ],
    },
    {
      title: 'Data',
      name: 'data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'long_name',
              type: 'string',
            },
            {
              name: 'short_name',
              type: 'string',
            },
            {
              name: 'types',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default schemaAddress
