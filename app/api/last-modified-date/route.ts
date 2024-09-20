import { NextRequest, NextResponse } from 'next/server';
import { getLastModifiedDate } from '@/lib/getLastModifiedDate';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get('file');
  if (!file) {
    return NextResponse.json({ error: 'File path is required' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), file);
  const lastModifiedDate = getLastModifiedDate(filePath);
  const formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return NextResponse.json({ lastModified: formattedDate });
}