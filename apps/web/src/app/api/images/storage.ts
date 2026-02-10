// Shared storage for temporary images
// In production, replace with actual object storage service (Vercel Blob, S3, etc.)
export const imageStorage = new Map<
  string,
  { data: Buffer; contentType: string; expiresAt: number }
>()

