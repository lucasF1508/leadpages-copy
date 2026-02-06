
export interface BillingPricingItem {
    code: string,
    currency: string;
    monthlyCost: string;
    name: string,
}
  
export interface BillingPricingsResponse {
    items: BillingPricingItem[];
}

const getBillingPricingsEndpoint = (): string => 
    // Always use production endpoint for all environments
     'https://my.leadpages.com/api/v1/billing/add-ons'
  ;

export async function fetchBillingPricings(): Promise<BillingPricingsResponse | null> {
    
      try{
        const endpoint = getBillingPricingsEndpoint();
      
        if (typeof window !== 'undefined') {
          const hostname = window.location.hostname;
          const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:');
          const isPreview = hostname.includes('vercel.app') || hostname.includes('.vercel.app');
          const isTest = hostname.includes('leadpagestest.com');
          
          if (isDevelopment || isPreview || isTest) {
            console.log('[fetchBillingPricings] Fetching from endpoint:', endpoint);
            console.log('[fetchBillingPricings] Current hostname:', hostname);
          }
        }
      
        const response = await fetch(endpoint, {
          headers: {
            'Accept': 'application/json',
          },
          method: 'GET',
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Could not read error response');
            console.error(`[fetchBillingPricingsParams] Failed to fetch trial plans: ${response.status} ${response.statusText}`);
            console.error(`[fetchBillingPricingsParams] Error response body:`, errorText);
              
            try {
              const errorData = JSON.parse(errorText);
              if (errorData._status?.errors) {
                console.error(`[fetchBillingPricingsParams] API errors:`, errorData._status.errors);
              }
            } catch {
                // Ignore parse errors
            }
            return null;
        }
        
        const data: BillingPricingsResponse = await response.json();

          if (typeof window !== 'undefined') {
              const hostname = window.location.hostname;
              const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:');
              const isPreview = hostname.includes('vercel.app') || hostname.includes('.vercel.app');
              const isTest = hostname.includes('leadpagestest.com');
              
              if (isDevelopment || isPreview || isTest) {
                console.log('[fetchBillingPricingsParams] Received data:', {
                  currencies: data.items?.map(item => item.currency) || [],
                  itemCount: data.items?.length || 0,
                  sampleItem: data.items?.[0] ? {
                    code: data.items[0].code,
                    currency: data.items[0].currency,
                    monthlyCost: data.items[0].monthlyCost,
                    name: data.items[0].name,
                  } : null,
                });
              }
            }

          return data
        } catch (error) {
      
      console.error(`[fetchBillingPricings] Error fetching billing pricings:`, error);
      return null;
    }
}