import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react';

const CrudLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container p-6 max-w-5xl space-y-10'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink>
                <Button>Home</Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/makanan' legacyBehavior passHref>
              <NavigationMenuLink>
                <Button>Data makanan</Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/kategori' legacyBehavior passHref>
              <NavigationMenuLink>
                <Button>Kategori makanan</Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {children}
    </div>
  );
};

export default CrudLayout;
