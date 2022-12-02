import Quote from './Quote'
import QuoteCustomer from './QuoteCustomer'
import QuotePricing from './QuotePricing'

const QuoteComponent = ({ legacyComponent, ...props }) => {
  switch (legacyComponent) {
    case 'customerQuoteKailei':
      return QuoteCustomer(props)
    case 'pricingWaves':
      return QuotePricing(props)
    default:
      return Quote(props)
  }
}

export default QuoteComponent
export { Quote, QuoteCustomer, QuotePricing }
