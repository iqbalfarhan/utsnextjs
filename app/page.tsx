import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

export default function Home() {
  const dataPeserta: { label: string; value: string }[] = [
    {
      label: 'Nama',
      value: 'iqbal farhan syuhada',
    },
    {
      label: 'NIM',
      value: '132010040002',
    },
    {
      label: 'Kelas',
      value: 'ASE 02',
    },
    {
      label: 'Alamat email',
      value: 'iqbalfarhan1996@gmail.com',
    },
    {
      label: 'Link Github',
      value: 'https://github.com/iqbalfarhan',
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 space-y-6'>
      <div className='flex flex-col items-center'>
        <h1 className='text-base font-bold opacity-50'>
          Ujian Tengah Semester Framework Next JS
        </h1>
        <h1 className='text-xl font-bold'>CRUD DATA MAKANAN</h1>
      </div>
      <Table className='max-w-lg mx-auto border'>
        <TableBody>
          {dataPeserta.map(({ label, value }, index) => (
            <TableRow key={index}>
              <TableHead>{label}</TableHead>
              <TableCell>:</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href={'/makanan'}>
        <Button>Lihat Hasil Ujian</Button>
      </Link>
    </div>
  );
}
