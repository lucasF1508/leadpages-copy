const { HUBSPOT_DEFAULT_FORM_ID, HUBSPOT_DEFAULT_PORTAL_ID } =
  process?.env || {}

/* eslint-disable camelcase */
export const filterContactData = (data: any) => ({
  address: data?.address,
  city: data?.city,
  contact_source: data?.contact_source,
  country: data?.country,
  email: data?.email,
  firstname: data?.firstname || data?.firstName || data?.name?.split(' ')[0],
  lastname:
    data?.lastname ||
    data?.lastName ||
    data?.name?.split(' ').slice(1).join(' '),
  phone: data?.phone || data?.phoneNumber,
  state: data?.state || data?.province,
  zip: data?.zip || data?.zipCode || data?.postal || data?.postalCode,
})

export const formatFormFields = (data: any) =>
  Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }))

export const createContact = async ({ client, data }: any) => {
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
      error,
      message: 'Failed to create contact',
    }
  }
}

export const updateContact = async ({ client, contactId, data }: any) => {
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
      error,
      message: 'Failed to updated contact',
    }
  }
}

export const createOrUpdateContact = async ({ client, data }: any) => {
  const { email } = data
  let contactId = null

  if (!email) return null

  const searchQuery = {
    filterGroups: [
      {
        filters: [
          {
            operator: 'EQ',
            propertyName: 'email',
            value: email,
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
    return updateContact({ client, contactId, data })
  }

  // Create
  return createContact({ client, data })
}

export const createCompany = async ({ client, data }: any) => {
  const {
    carbon_reduction_target,
    carbon_target_year,
    company: name,
    companyArchetypes,
    country,
    fund_size,
    portfolio_size,
    webform_notes,
    website,
  } = data

  const companyProps = {
    carbon_reduction_target,
    carbon_target_year,
    company_archetype: companyArchetypes.join(';'),
    country,
    domain: website,
    fund_size,
    name,
    portfolio_size,
    webform_notes,
    website,
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
      error,
      message: 'Failed to create company',
    }
  }
}

export const associateResponses = async ({ client, companyId, contactId }: any) => {
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
      error,
      message: 'Failed to create company/contact association',
    }
  }
}

export const formApiSubmission = async (data: any) => {
  const {
    formId = HUBSPOT_DEFAULT_FORM_ID,
    page_name,
    page_url,
    portalId = HUBSPOT_DEFAULT_PORTAL_ID,
  } = data

  if (!portalId || !formId || !data.email)
    return {
      error: {
        message: `formApiSubmission error: Missing required data', ${JSON.stringify(
          {
            email: !data?.email ? 'missing' : undefined,
            formId: !formId ? 'missing' : undefined,
            portalId: !portalId ? 'missing' : undefined,
          }
        )}`,
      },
    }

  const uri = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  const body = {
    context: {
      pageName: page_name,
      pageUri: page_url,
    },
    fields: formatFormFields(data),
  }

  const response = await fetch(uri, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const json = await response.json()
  const { inlineMessage, message, status } = json

  if (status === 'error') {
    return {
      error: {
        code: response.status || 500,
        message: `formApiSubmission error: ${message}`,
        response: json,
      },
    }
  }

  return {
    message: inlineMessage,
    response,
  }
}

export const submitToHubSpot = async (formData : any) => {
  const payload = {
    ...formData,
    // Valores por defecto de HubSpot
    formId: formData?.formId || 'b9cf01c6-afce-4838-a074-d7bf202da044',
    // Fallback del hutk desde el browser
    hutk:
      typeof document !== 'undefined'
        ? document.cookie.match(/(?:^|; )hubspotutk=([^;]+)/)?.[1] ?? null
        : formData?.hutk ?? null,
    page_name:
      typeof document !== 'undefined' ? document.title : formData?.page_name,
    page_url:
      typeof window !== 'undefined' ? window.location.href : formData?.page_url,
    portalId: formData?.portalId || '21794907',
  }

  const response = await fetch('/api/send-hubspot', {
    body: JSON.stringify(payload),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!response.ok) {
    try {
      const { error } = await response.json()
      console.error(error?.message || error)
    } catch {
      // ignore
    }
    throw new Error('Failed to submit form. Please contact support.')
  }

  return response
}
