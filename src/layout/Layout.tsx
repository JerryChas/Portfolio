import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='bg-background text-text h-full'>{children}</main>
    </>
  );
};

export default Layout;
