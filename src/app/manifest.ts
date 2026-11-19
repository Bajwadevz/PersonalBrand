import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'bajwaa.dev',
        short_name: 'bajwaa.dev',
        description: 'AI implementation for Australian businesses.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0F172A',
        icons: [{ src: '/wave-icon.svg', sizes: 'any', type: 'image/svg+xml' }],
    }
}
