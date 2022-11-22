export const address = async (value) => {
  const response = (await value) || []

  if (response.length < 1) {
    return undefined
  }

  const [
    {
      geometry,
      placeId,
      formatted_address: formattedAddress,
      address_components: addressComponents,
    },
  ] = response

  return {
    _type: 'address',
    cords: geometry.location,
    placeId,
    label: formattedAddress,
    region: formattedAddress,
    data: addressComponents,
  }
}
