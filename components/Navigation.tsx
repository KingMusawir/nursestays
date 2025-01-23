import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link
            href='/'
            className='text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
          >
            NurseStays
          </Link>
          <div className='hidden md:flex items-center gap-8'>
            <Link
              href='#'
              className='text-sm font-medium hover:text-purple-600 transition-colors'
            >
              List Property
            </Link>
            <Link
              href='#'
              className='text-sm font-medium hover:text-purple-600 transition-colors'
            >
              Find Housing
            </Link>
            <Link
              href='#'
              className='text-sm font-medium hover:text-purple-600 transition-colors'
            >
              How It Works
            </Link>
            <Button className='bg-purple-600 hover:bg-purple-700'>
              Get Started
            </Button>
          </div>
          <div className='md:hidden'>
            <Button variant='ghost' size='icon' onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </nav>
  );
}
