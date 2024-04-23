import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { Navbar } from './_components/navbar'

interface boardLayoutProps {
    children: React.ReactNode
}

const BoardLayout = async ({
    children
}: boardLayoutProps ) => {
  const session = await auth()
  return (
    <>
      <SessionProvider session={session}>
        <div className='h-full w-full flex flex-col gap-y-10 items-center bg-red-200 '>
            <Navbar />
            {children}
        </div>
      </SessionProvider>
    </>
  )
}

export default BoardLayout
