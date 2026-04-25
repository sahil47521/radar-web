import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const firstName = formData.get('firstName');
    const email = formData.get('email');
    const userGroup = formData.get('userGroup');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const loopsFormData = new URLSearchParams();
    loopsFormData.append('firstName', String(firstName || ''));
    loopsFormData.append('email', String(email));
    loopsFormData.append('userGroup', String(userGroup || 'WaitList'));

    const formId = process.env.LOOPS_FORM_ID || 'cmo2crn0j0ov80iyhn40ry06f';
    const response = await fetch(`https://app.loops.so/api/newsletter-form/${formId}`, {
      method: 'POST',
      body: loopsFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { success: false, error: errorData.message || 'Loops API error' },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error('Waitlist proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}
