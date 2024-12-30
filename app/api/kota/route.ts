import { PrismaClient } from '@prisma/client';
import { type NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const dataKota = await prisma.kota.findMany();
  return Response.json(dataKota);
}

export async function POST(req: NextRequest) {
  const dataKota = await prisma.kota.create({
    data: await req.json(),
  });
  return Response.json(dataKota);
}
