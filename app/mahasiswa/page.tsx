import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PrismaClient } from '@prisma/client';
import { Edit, Trash } from 'lucide-react';

const prisma = new PrismaClient();

const MahasiswaPage = async () => {
  const data = await prisma.mahasiswa.findMany({
    include: {
      kelas: true,
    },
  });

  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Data mahasiswa</h2>
      <p>
        Edit halaman ini untuk mengerjakan crud data mahasiswa. Kriteria yang
        diterima untuk mendapatkan nilai dari halaman ini adalah: terdapat table
        data mahasiswa dengan kolom id, nim, nama mahasiswa dan nama kelas.
        serta terdapat action untuk create, edit dan delete data mahasiswa. isi
        minimal 3 data mahasiswa.
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>NIM</TableHead>
            <TableHead>Nama Mahasiswa</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((mahasiswa, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{mahasiswa.nim}</TableCell>
              <TableCell>{mahasiswa.nama}</TableCell>
              <TableCell>{mahasiswa.kelas.nama || 'N/A'}</TableCell>
              <TableCell className='flex flex-row justify-center gap-2'>
                <Button>
                  <Edit />
                </Button>
                <Button>
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MahasiswaPage;
