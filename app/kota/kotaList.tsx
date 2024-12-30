'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Kota } from '@prisma/client';
import { useEffect, useState } from 'react';

export default function KotaList() {
  const [kota, setKota] = useState<Kota[]>([]);
  const [newKotaName, setNewKotaName] = useState('');
  const [editKotaId, setEditKotaId] = useState<number | null>(null);
  const [editKotaName, setEditKotaName] = useState('');

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    const response = await fetch('/api/kota');
    const data = await response.json();
    setKota(data);
  };

  const addKota = async () => {
    if (!newKotaName) return;
    const response = await fetch('/api/kota', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newKotaName }),
    });
    const newKota = await response.json();
    setKota([...kota, newKota]);
    setNewKotaName('');
  };

  const deleteKota = async (id: number) => {
    await fetch(`/api/kota/${id}`, { method: 'DELETE' });
    setKota(kota.filter((Kota) => Kota.id !== id));
  };

  const startEdit = (Kota: Kota) => {
    setEditKotaId(Kota.id);
    setEditKotaName(Kota.name);
  };

  const updateKota = async () => {
    if (editKotaId === null || !editKotaName) return;
    const response = await fetch(`/api/kota/${editKotaId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editKotaName }),
    });
    const updatedKota = await response.json();
    setKota(
      kota.map((Kota) => (Kota.id === updatedKota.id ? updatedKota : Kota)),
    );
    setEditKotaId(null);
    setEditKotaName('');
  };

  return (
    <div className='space-y-6'>
      <div className='flex gap-2'>
        <Input
          value={newKotaName}
          onChange={(e) => setNewKotaName(e.target.value)}
          placeholder='Nama kota baru'
        />
        <Button onClick={addKota}>Tambah Kota</Button>
      </div>

      <Table className='border'>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {kota.map((Kota) => (
          <TableBody key={Kota.id}>
            {editKotaId === Kota.id ? (
              <TableRow>
                <TableCell>{editKotaId}</TableCell>
                <TableCell>
                  <Input
                    value={editKotaName}
                    onChange={(e) => setEditKotaName(e.target.value)}
                    placeholder='Edit Kota name'
                  />
                </TableCell>
                <TableCell>
                  <Button size={'sm'} onClick={updateKota}>
                    Save
                  </Button>
                  <Button size={'sm'} onClick={() => setEditKotaId(null)}>
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>{Kota.id}</TableCell>
                <TableCell>{Kota.name}</TableCell>

                <TableCell className='gap-2'>
                  <Button size={'sm'} onClick={() => startEdit(Kota)}>
                    Edit
                  </Button>
                  <Button size={'sm'} onClick={() => deleteKota(Kota.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        ))}
      </Table>
    </div>
  );
}
