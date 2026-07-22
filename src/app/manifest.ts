import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Bajwaa Dev',
        short_name: 'Bajwaa Dev',
        description: 'AI lead response and workflow automation for B2B sales and ops teams.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0F172A',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
