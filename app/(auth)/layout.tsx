const authLayout = ({
    children
}: any) => {
    return (
      <div className='h-full max-w-full items-center justify-center flex bg-[#9061F9] '>
        <div className="bg-white">

        {children}
        </div>
      </div>
    )
} 

export default authLayout;  