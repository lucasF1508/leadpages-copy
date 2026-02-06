import type { Plan } from '@/components/PricingCards/PricingCards'
import type { BillingPricingItem } from './fetchBillingPricings'
import { formatCurrency } from './formatPrice'
import { AddOnCardItem } from '@/components/PlatformNew/AddOnCardsGrid'
import { AddOnProps } from '@/components/AddOnCards/AddOnCards'
import type { PriceType } from '@/components/Price'

/**
 * Maps trial plans from API response to the Plan format expected by PricingCards component.
 * Merges API pricing data with CMS plan structure (title, description, features, etc.)
 */
export function mapBillingPricingToAddOnCardsPlatformPage(
  billingPricings: BillingPricingItem[],
  currentCards: AddOnCardItem[]
): AddOnCardItem[] {
  
    const billingPricingsMapper = (items: BillingPricingItem[]) : Map<string, Omit<BillingPricingItem, 'code'>> => {
        const map = new Map<string, Omit<BillingPricingItem, 'code'>>()
        items.forEach((item) => {
          const { code, ...rest } = item
          map.set(code, rest)
        })
        return map
    }

    const billingPricingsMap = billingPricingsMapper(billingPricings)
    
    const transformedCards = currentCards.map((card) => {
        return {
            ...card,
            price:
                typeof card.code === 'string' && billingPricingsMap.has(card.code)
                    ? billingPricingsMap.get(card.code)!.monthlyCost
                    : card.price,
            priceUnit:
                typeof card.code === 'string' && billingPricingsMap.has(card.code)
                    ? billingPricingsMap.get(card.code)!.currency + '/mo'
                    : card.priceUnit,
        }
    })

    return transformedCards
}

export function mapBillingPricingToAddOnCardsPricingPage(
    billingPricings: BillingPricingItem[],
    currentProps: AddOnProps[]
  ): AddOnProps[] {
    
        const billingPricingsMapper = (items: BillingPricingItem[]) : Map<string, Omit<BillingPricingItem, 'code'>> => {
            const map = new Map<string, Omit<BillingPricingItem, 'code'>>()
            items.forEach((item) => {
                const { code, ...rest } = item
                map.set(code, rest)
            })
            return map
        }
  
        const billingPricingsMap = billingPricingsMapper(billingPricings)
      
        const transformedCards = currentProps.map((card) => {
          if (typeof card.code === 'string' && billingPricingsMap.has(card.code)) {
            const apiData = billingPricingsMap.get(card.code)
            
            if (!apiData) {
              return card
            }
            
            const monthlyCostNumber = parseFloat(apiData.monthlyCost)
            const formattedPrice = formatCurrency(apiData.currency, monthlyCostNumber)
            const symbol = formattedPrice.match(/^[^\d.,\s]+/)?.[0] || '$'
            
            const updatedPrices: PriceType[] = card.prices.map((price) => ({
              ...price,
              price: monthlyCostNumber,
              currency: apiData.currency,
              symbol,
            }))
            
            return {
              ...card,
              prices: updatedPrices,
            }
          }
 
          return card
        })
  
    return transformedCards
}