import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <motion.div
      className='fixed inset-y-0 left-0 w-full bg-white z-50 md:hidden'
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
    >
      <div className='flex flex-col h-full p-4'>
        <div className='space-y-4'>
          <Link
            href='#'
            className='block py-2 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors'
            onClick={onClose}
          >
            List Property
          </Link>
          <Link
            href='#'
            className='block py-2 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors'
            onClick={onClose}
          >
            Find Housing
          </Link>
          <Link
            href='#'
            className='block py-2 text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors'
            onClick={onClose}
          >
            How It Works
          </Link>
        </div>
        <div className='mt-auto'>
          <Button
            className='w-full bg-purple-600 hover:bg-purple-700'
            onClick={onClose}
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
