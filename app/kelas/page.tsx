import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PlusCircle } from 'lucide-react';

const KelasPage = () => {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold'>Data kelas</h2>
      <p>
        Edit halaman ini untuk mengerjakan crud data kelas. Kriteria yang
        diterima untuk mendapatkan nilai dari halaman ini adalah: terdapat table
        data kelas dengan kolom id dan nama kelas. serta terdapat action untuk
        create, edit dan delete data kelas. isi minimal 3 data kelas.
      </p>
      <Button>
        <PlusCircle />
        <span>Tambah data kelas</span>
      </Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id Kelas</TableHead>
            <TableHead>Nama Kelas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>ASE 02</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>CON 01</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default KelasPage;
