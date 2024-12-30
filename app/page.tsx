import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table';

export default function Home() {
  const dataPeserta: { label: string; value: string }[] = [
    {
      label: 'Nama',
      value: 'Oswald Mogot',
    },
    {
      label: 'NIM',
      value: '2302010040007',
    },
    {
      label: 'Kelas',
      value: 'ASE 02',
    },
    {
      label: 'Alamat email',
      value: 'oswaldmogot235@gmail.com',
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center py-2 space-y-6'>
      <div className='flex flex-col items-center'>
        <h1 className='text-base opacity-50'>
          Ujian Tengah Semester Framework Next JS
        </h1>
        <h1 className='text-2xl font-bold'>CRUD DATA MAHASISWA</h1>
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
    </div>
  );
}
