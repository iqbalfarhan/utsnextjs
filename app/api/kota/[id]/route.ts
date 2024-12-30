import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: number } },
// ) {
//   try {
//     const { id } = params;
//     if (!id) {
//       return NextResponse.json(
//         { error: 'ID tidak diberikan' },
//         { status: 400 },
//       );
//     }

//     await prisma.kota.delete({
//       where: { id: id },
//     });

//     return NextResponse.json({ message: 'Data berhasil dihapus' });
//   } catch (error) {
//     console.error('Error saat menghapus data:', error);
//     return NextResponse.json(
//       { error: 'Terjadi kesalahan saat menghapus data' },
//       { status: 500 },
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const data = await prisma.kota.findUnique({
    where: { id: Number(id) },
  });

  return NextResponse.json(data, {
    status: 200,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { name } = await request.json();
  const city = await prisma.kota.update({
    where: { id: Number(id) },
    data: { name },
  });
  return NextResponse.json(city);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await prisma.kota.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(
    { message: 'City deleted successfully' },
    { status: 200 },
  );
}
