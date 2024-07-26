import { NextResponse } from 'next/server';


export async function GET(request) {
    try {
        return new NextResponse('Hello World API');
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
