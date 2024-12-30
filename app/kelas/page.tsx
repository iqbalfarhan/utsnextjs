

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";
import { Edit, Trash } from "lucide-react";

const prisma = new PrismaClient;

const KelasPage = async () => {
  const data = await prisma.kelas.findMany();
  return (
  <div>
    
    <Dialog>
    <DialogTrigger>
      <Button>Add kelas</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Silahkan tambahkan data</DialogTitle>
      </DialogHeader>
      <div className="grid-gap-4 py-4">
        <div className="grid grid-cols-4 grid-gap-4 items-center">
          <Label className="text-left">Nama Kelas</Label>
            <Input id="name" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save</Button>
      </DialogFooter>
    </DialogContent>
    </Dialog>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nama Kelas</TableHead>
          <TableHead>Action </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((Kelas) => (
          <TableRow key={Kelas.id}>
            <TableCell>{Kelas.id}</TableCell>
            <TableCell>{Kelas.nama}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger><Button variant={"outline"} >
                <Edit/>
              </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Silahkan tambahkan data</DialogTitle>
                </DialogHeader>
              </DialogContent>
              </Dialog>
              <Button variant={"outline"}>
                <Trash/>
              </Button>
            </TableCell>
          </TableRow>
        ))
       }
      </TableBody>
    </Table>
  </div>
  );
};

export default KelasPage;
