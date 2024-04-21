import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Home() {
  return (
    <main className='flex h-full w-full items-center justify-center base bg-[#9061F9] '>
      <div className=' space-y-5  px-10 py-7  rounded-lg  items-center justify-center border  bg-black-200 '>
        <h1
          className={cn(
            'text-7xl font-semibold text-white drop-shadow-md text-center',
            font.className
          )}
        >
          Welcome to WorkSpace
        </h1>
        <div className='w-full h-full'>
          <LoginButton>
            <Button>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
