import CustomerRotator from './CustomerRotator'
import CustomerThumbnailRotator from './CustomerThumbnailRotator'

const CustomerRotatorComponent = ({ legacyComponent, ...props }) => {
  switch (legacyComponent) {
    case 'customerStoriesThumbnailRotator':
      return CustomerThumbnailRotator(props)
    default:
      return CustomerRotator(props)
  }
}

export default CustomerRotatorComponent
export { CustomerRotator, CustomerThumbnailRotator }
