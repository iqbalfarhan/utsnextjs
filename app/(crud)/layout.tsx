import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { List, Soup, User } from 'lucide-react';
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
            <Link href='/makanan' legacyBehavior passHref>
              <Button variant={'outline'}>
                <Soup />
                <span>Data makanan</span>
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/kategori' legacyBehavior passHref>
              <Button variant={'outline'}>
                <List />
                <span>Kategori makanan</span>
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
