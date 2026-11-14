import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  projectType: z.string().trim().min(2).max(80),
  message: z.string().trim().min(10).max(4000),
  location: z.string().trim().max(200).optional().or(z.literal('')),
  kvkk: z.union([z.literal('1'), z.literal('true'), z.literal('on')]),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Geçersiz istek.' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Lütfen zorunlu alanları kontrol edin.' },
      { status: 400 },
    );
  }

  // Bot honeypot filled
  if (parsed.data.company && parsed.data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Preview: no mail provider — accept and log server-side only
  console.info('[contact]', {
    name: parsed.data.name,
    email: parsed.data.email,
    projectType: parsed.data.projectType,
  });

  return NextResponse.json({ ok: true });
}
