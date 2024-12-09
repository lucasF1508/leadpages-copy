const { HUBSPOT_DEFAULT_FORM_ID, HUBSPOT_DEFAULT_PORTAL_ID } =
  process?.env || {}

/* eslint-disable camelcase */
export const filterContactData = (data) => ({
  firstname: data?.firstname || data?.firstName || data?.name?.split(' ')[0],
  lastname:
    data?.lastname ||
    data?.lastName ||
    data?.name?.split(' ').slice(1).join(' '),
  email: data?.email,
  phone: data?.phone || data?.phoneNumber,
  address: data?.address,
  city: data?.city,
  state: data?.state || data?.province,
  zip: data?.zip || data?.zipCode || data?.postal || data?.postalCode,
  country: data?.country,
  contact_source: data?.contact_source,
})

export const formatFormFields = (data) =>
  Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }))

export const createContact = async ({ client, data }) => {
  const properties = filterContactData(data)

  try {
    const { body: contactBody } = await client.crm.contacts.basicApi.create({
      properties,
    })

    return {
      message: 'Successfully created contact',
      response: contactBody,
    }
  } catch ({ body, code }) {
    const error = { code, ...body }
    console.error(error)

    return {
      message: 'Failed to create contact',
      error,
    }
  }
}

export const updateContact = async ({ client, data, contactId }) => {
  const properties = filterContactData(data)

  try {
    const { body: contactBody } = await client.crm.contacts.basicApi.update(
      contactId,
      { properties }
    )

    return {
      message: 'Successfully updated contact',
      response: contactBody,
    }
  } catch ({ body, code }) {
    const error = { code, ...body }
    console.error(error)

    return {
      message: 'Failed to updated contact',
      error,
    }
  }
}

export const createOrUpdateContact = async ({ client, data }) => {
  const { email } = data
  let contactId = null

  if (!email) return null

  const searchQuery = {
    filterGroups: [
      {
        filters: [
          {
            value: email,
            propertyName: 'email',
            operator: 'EQ',
          },
        ],
      },
    ],
  }

  // Search for contact
  try {
    const { results = [] } = await client.crm.contacts.searchApi.doSearch(
      searchQuery
    )
    const [contact] = results
    contactId = contact?.id
  } catch (e) {
    if (e.message === 'HTTP request failed') {
      console.error(JSON.stringify(e.response, null, 2))
    } else {
      console.error(e)
    }
  }

  // Update, or...
  if (contactId) {
    return updateContact({ client, data, contactId })
  }

  // Create
  return createContact({ client, data })
}

export const createCompany = async ({ client, data }) => {
  const {
    company: name,
    website,
    country,
    companyArchetypes,
    portfolio_size,
    webform_notes,
    fund_size,
    carbon_target_year,
    carbon_reduction_target,
  } = data

  const companyProps = {
    name,
    website,
    domain: website,
    country,
    portfolio_size,
    fund_size,
    webform_notes,
    carbon_target_year,
    carbon_reduction_target,
    company_archetype: companyArchetypes.join(';'),
  }

  try {
    const { body: companyBody } = await client.crm.companies.basicApi.create({
      properties: companyProps,
    })

    return {
      message: 'Successfully created company',
      response: companyBody,
    }
  } catch ({ body, code }) {
    const error = { code, ...body }
    console.error(error)

    return {
      message: 'Failed to create company',
      error,
    }
  }
}

export const associateResponses = async ({ client, companyId, contactId }) => {
  try {
    const { body: associationBody } =
      await client.crm.companies.associationsApi.create(
        companyId,
        'contacts',
        contactId,
        'company_to_contact'
      )

    return {
      message: 'Successfully created company/contact association',
      response: associationBody,
    }
  } catch ({ body, code }) {
    const error = { code, ...body }
    console.error(error)

    return {
      message: 'Failed to create company/contact association',
      error,
    }
  }
}

export const formApiSubmission = async (data) => {
  const {
    portalId = HUBSPOT_DEFAULT_PORTAL_ID,
    formId = HUBSPOT_DEFAULT_FORM_ID,
    page_url,
    page_name,
  } = data

  if (!portalId || !formId || !data.email)
    return {
      error: {
        message: `formApiSubmission error: Missing required data', ${JSON.stringify(
          {
            portalId: !portalId ? 'missing' : undefined,
            formId: !formId ? 'missing' : undefined,
            email: !data?.email ? 'missing' : undefined,
          }
        )}`,
      },
    }

  const uri = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  const body = {
    fields: formatFormFields(data),
    context: {
      pageUri: page_url,
      pageName: page_name,
    },
  }

  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const json = await response.json()
  const { inlineMessage, status, message } = json

  if (status === 'error') {
    return {
      error: {
        message: `formApiSubmission error: ${message}`,
        response: json,
        code: response.status || 500,
      },
    }
  }

  return {
    message: inlineMessage,
    response,
  }
}

export const submitToHubSpot = async (formData) => {
  const response = await fetch('/api/send-hubspot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    const { error } = await response.json()
    console.error(error.message)
    throw new Error('Failed to submit form. Please contact support.')
  }

  return response
}
