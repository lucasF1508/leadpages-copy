// components/SocialMedia/SocialMedia.types.ts

export type SocialMediaIcon = {
    _key: string
    platform: 'facebook' | 'linkedin' | 'instagram' | 'youtube' | 'pinterest' | 'twitter' | 'x'
    url: string
}

export type SocialMediaProps = {
    heading: string
    icons: SocialMediaIcon[]
    buttonText?: string
    buttonUrl?: string
    buttonLogo?: {
        alt?: string
        asset?: any
        height?: number
        src?: string
        width?: number
    }
}
