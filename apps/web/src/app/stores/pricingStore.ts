import { create } from 'zustand'

interface PricingState {
  currentSelection: 'monthly' | 'yearly'
  setCurrentSelection: (selection: 'monthly' | 'yearly') => void
}

export const pricingStore = create<PricingState>(
    (set) => ({
      currentSelection: 'yearly',
      setCurrentSelection: (selection) => set({ currentSelection: selection }),
    })
  )
