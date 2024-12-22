import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Banknote, User, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CrudLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container p-6 max-w-5xl space-y-10'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <Button variant={'outline'}>
                <User />
                <span>Profile peserta</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/kelas' legacyBehavior passHref>
              <Button variant={'outline'}>
                <Banknote />
                <span>Data Kelas</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/mahasiswa' legacyBehavior passHref>
              <Button variant={'outline'}>
                <Users />
                <span>Data Mahasiswa</span>
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <section>{children}</section>
    </div>
  );
};

export default CrudLayout;
