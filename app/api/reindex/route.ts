import { NextResponse } from 'next/server';

export async function GET() {
  // In a production setup, trigger a lightweight delta fetch here (e.g., queue task).
  return NextResponse.json({ ok: true });
}
