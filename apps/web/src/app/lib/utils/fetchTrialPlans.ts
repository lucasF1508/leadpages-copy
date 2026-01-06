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
// Use VERCEL_ENV to properly detect production vs test/preview environments
// In Vercel: 'production' = real production, 'preview' = preview/test deployments
const getTrialsEndpoint = (): string => {
  // Check if we're on the test domain
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.includes('leadpagestest.com')) {
      return 'https://my.leadpagestest.com/api/v1/billing/plans/trials';
    }
  }
  
  // Use VERCEL_ENV if available (more reliable than NODE_ENV in Vercel)
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv === 'production') {
    return 'https://my.leadpages.com/api/v1/plans/trials';
  }
  
  // Default to test endpoint for development, preview, and test environments
  return 'https://my.leadpagestest.com/api/v1/billing/plans/trials';
};

const TRIALS_ENDPOINT = getTrialsEndpoint();

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
    const response = await fetch(TRIALS_ENDPOINT, {
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
