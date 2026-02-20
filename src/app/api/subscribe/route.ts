import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: 'Valid email address is required' },
                { status: 400 }
            );
        }

        const { error } = await supabase
            .from('subscribers')
            .insert([{ email }]);

        if (error) {
            // Check if it's a unique constraint violation (already subscribed)
            if (error.code === '23505') {
                return NextResponse.json(
                    { error: 'You are already on the list!' },
                    { status: 409 }
                );
            }

            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to subscribe. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Successfully joined the list!' },
            { status: 200 } // Modified from 201 to 200 to map perfectly to user explicitly requesting "200 success".
        );

    } catch (err) {
        console.error('Subscription error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
