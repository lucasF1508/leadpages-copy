/**
 * Response type from the trials endpoint
 */
export interface TrialPlanItem {
  productCode: string;
  level: 'standard' | 'pro' | 'advanced';
  billingCycle: 'month' | 'year';
  annualSavings: number | null;
  currency: string;
  monthlyCost: number;
  price: number;
  checkout_url: string;
  isTrial: boolean;
}

export interface TrialPlansResponse {
  items: TrialPlanItem[];
}

// Determine endpoint based on environment
// Always use the production endpoint for trials API
// NOTE: This must be called at runtime (not module load time) to access window
const getTrialsEndpoint = (): string => {
  // Always use production endpoint for all environments
  return 'https://my.leadpages.com/api/v1/billing/plans/trials';
};

/**
 * Helper function to simulate different currency prices for testing
 * Only used when ?currency=XXX is in URL (development only)
 */
function getTestPrice(usdPrice: number, currency: string): number {
  // Rough conversion rates for testing (not real-time, just for visual testing)
  const rates: Record<string, number> = {
    'GBP': 0.79,  // 1 USD = 0.79 GBP
    'EUR': 0.92,  // 1 USD = 0.92 EUR
    'CAD': 1.35,  // 1 USD = 1.35 CAD
    'AUD': 1.50,  // 1 USD = 1.50 AUD
  };
  
  const rate = rates[currency.toUpperCase()] || 1;
  return Math.round(usdPrice * rate);
}

/**
 * Fetches trial plans from the Leadpages API.
 * Must be called from the browser (client-side) for geolocation to work correctly.
 * 
 * @returns Promise with trial plans data or null if error
 */
export async function fetchTrialPlans(): Promise<TrialPlansResponse | null> {
  try {
    // Calculate endpoint at runtime to ensure correct domain detection
    const endpoint = getTrialsEndpoint();
    
    // Debug logging (in development, preview, and test - but not production)
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:');
      const isPreview = hostname.includes('vercel.app') || hostname.includes('.vercel.app');
      const isTest = hostname.includes('leadpagestest.com');
      
      if (isDevelopment || isPreview || isTest) {
        console.log('[fetchTrialPlans] Fetching from endpoint:', endpoint);
        console.log('[fetchTrialPlans] Current hostname:', hostname);
      }
    }
    
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // No credentials needed - endpoint is public
      // Note: The browser automatically includes your IP in the HTTP request
      // The backend can see it, but we can't see it from JavaScript (security restriction)
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Could not read error response');
      console.error(`[fetchTrialPlans] Failed to fetch trial plans: ${response.status} ${response.statusText}`);
      console.error(`[fetchTrialPlans] Error response body:`, errorText);
      
      // Try to parse error response schema
      try {
        const errorData = JSON.parse(errorText);
        if (errorData._status?.errors) {
          console.error(`[fetchTrialPlans] API errors:`, errorData._status.errors);
        }
      } catch {
        // Ignore parse errors
      }
      
      return null;
    }

    const data: TrialPlansResponse = await response.json();
    
    // Debug logging (in development, preview, and test - but not production)
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const isDevelopment = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:');
      const isPreview = hostname.includes('vercel.app') || hostname.includes('.vercel.app');
      const isTest = hostname.includes('leadpagestest.com');
      
      if (isDevelopment || isPreview || isTest) {
        console.log('[fetchTrialPlans] Received data:', {
          itemCount: data.items?.length || 0,
          currencies: data.items?.map(item => item.currency) || [],
          sampleItem: data.items?.[0] ? {
            level: data.items[0].level,
            billingCycle: data.items[0].billingCycle,
            currency: data.items[0].currency,
            price: data.items[0].price,
          } : null,
        });
      }
    }
    
    // Check for override parameter for testing (only in development)
    const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const currencyOverride = urlParams?.get('currency');
    
    if (currencyOverride && process.env.NODE_ENV !== 'production') {
      // Override currency in all items for testing
      data.items = data.items.map(item => ({
        ...item,
        currency: currencyOverride.toUpperCase(),
        // Simulate different prices for different currencies (for testing only)
        price: getTestPrice(item.price, currencyOverride),
        monthlyCost: getTestPrice(item.monthlyCost, currencyOverride),
        annualSavings: item.annualSavings ? getTestPrice(item.annualSavings, currencyOverride) : null,
      }));
    }
    
    return data;
  } catch (error) {
    console.error('[fetchTrialPlans] Error fetching trial plans:', error);
    return null;
  }
}
