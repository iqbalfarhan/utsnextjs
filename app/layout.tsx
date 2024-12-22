'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Banknote, User, Users } from 'lucide-react';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  const isActive = (pathname: string) => {
    if (!path) return false;
    return pathname === '/' ? path === '/' : path.startsWith(pathname);
  };

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='container p-6 max-w-5xl space-y-10'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/' legacyBehavior passHref>
                  <Button variant={isActive('/') ? 'default' : 'outline'}>
                    <User />
                    <span>Profile peserta</span>
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/kelas' legacyBehavior passHref>
                  <Button variant={isActive('/kelas') ? 'default' : 'outline'}>
                    <Banknote />
                    <span>Data Kelas</span>
                  </Button>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/mahasiswa' legacyBehavior passHref>
                  <Button
                    variant={isActive('/mahasiswa') ? 'default' : 'outline'}
                  >
                    <Users />
                    <span>Data Mahasiswa</span>
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
