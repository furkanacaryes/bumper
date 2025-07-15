import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

const partnersFile = path.join(process.cwd(), 'public', 'partners.json');

export async function GET() {
  try {
    const data = await fs.readFile(partnersFile, 'utf-8');

    const partners: Bumper.Partner[] = JSON.parse(data);

    return NextResponse.json(partners);
  } catch {
    return NextResponse.json({ error: 'Failed to read partners' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newPartner: Bumper.Partner = await req.json();

    const data = await fs.readFile(partnersFile, 'utf-8');

    const partners: Bumper.Partner[] = JSON.parse(data);

    partners.push(newPartner);

    await fs.writeFile(partnersFile, JSON.stringify(partners, null, 2));

    return NextResponse.json(newPartner, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to add partner' }, { status: 500 });
  }
}
