import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import Link from 'next/link';
import { Toaster } from 'sonner';
import { AppSidebar } from '../components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '../components/ui/sidebar';
import { user } from '../lib/data/user';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard Content Creator',
  description: 'Frontend project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="border-b flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
              </div>
              <Link href={'/profil'}>
                <div className="size-9 bg-rose rounded-full mr-6 flex items-center justify-center">
                  <span className="text-white">{user.initials}</span>
                </div>
              </Link>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-6">{children}</div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
