// Shared storage for signatures
// In production, replace this with a database connection
const signatures: Map<string, any> = new Map()

export function getSignature(sessionId: string) {
  return signatures.get(sessionId)
}

export function setSignature(sessionId: string, signature: any) {
  signatures.set(sessionId, signature)
}

export function getAllSignatures() {
  return Array.from(signatures.values())
}

