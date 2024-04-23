'use client'

import { UserButton } from '@/components/auth/user-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='bg-secondary flex justify-between items-center p-4 m-2 rounded-xl w-[90%] shadow sm  '>
      <div className='flex gap-x-2'>
        <Button asChild variant={pathname === '/server' ? 'ghost' : 'outline'}>
          <Link href='/server'>Server</Link>
        </Button>

        <Button asChild variant={pathname === '/client' ? 'ghost' : 'outline'}>
          <Link href='/client'>Client</Link>
        </Button>

        <Button asChild variant={pathname === '/board' ? 'ghost' : 'outline'}>
          <Link href='/board'>Boards</Link>
        </Button>

        <Button asChild variant={pathname === '/admin' ? 'ghost' : 'outline'}>
          <Link href='/admin'>Admin</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}
