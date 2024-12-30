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

const KelasPage = async () => {
  const data = await prisma.kelas.findMany();
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Data kelas</h2>
      <p>
        Edit halaman ini untuk mengerjakan crud data kelas. Kriteria yang
        diterima untuk mendapatkan nilai dari halaman ini adalah: terdapat table
        data kelas dengan kolom id dan nama kelas. serta terdapat action untuk
        create, edit dan delete data kelas. isi minimal 3 data kelas.
      </p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Nama kelas</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((kelas) => (
            <TableRow key={kelas.id}>
              <TableCell>{kelas.id}</TableCell>
              <TableCell>{kelas.nama}</TableCell>
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

export default KelasPage;
