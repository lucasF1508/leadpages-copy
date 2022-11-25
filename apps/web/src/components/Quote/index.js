import Quote from './Quote'
import QuoteCustomer from './QuoteCustomer'
import Testimonial from './Testimonial'

const QuoteComponent = ({ legacyComponent, ...props }) => {
  switch (legacyComponent) {
    case 'customerQuoteKailei':
      return QuoteCustomer(props)
    default:
      return Quote(props)
  }
}

export default QuoteComponent
export { Testimonial }
