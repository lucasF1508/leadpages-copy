import type { Metadata } from 'next'
import Client410 from './Client410'

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: '410 — Page removed',
}

export default function Page410() {
  // Este archivo es Server Component → permite metadata y build correcto
  return <Client410 />
}
