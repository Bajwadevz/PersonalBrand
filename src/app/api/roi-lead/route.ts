import { NextResponse } from 'next/server';

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: 'Valid email address is required' },
                { status: 400 }
            );
        }

        if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
            console.error('ConvertKit env vars not configured');
            return NextResponse.json(
                { error: 'Service temporarily unavailable' },
                { status: 503 }
            );
        }

        const ckRes = await fetch(
            `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    api_key: CONVERTKIT_API_KEY,
                    email,
                }),
            }
        );

        if (!ckRes.ok) {
            const errorData = await ckRes.json().catch(() => ({}));
            console.error('ConvertKit ROI lead error:', errorData);
            return NextResponse.json(
                { error: 'Failed to submit. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Successfully subscribed to ROI Report!' },
            { status: 200 }
        );

    } catch (err) {
        console.error('ROI lead capture error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
