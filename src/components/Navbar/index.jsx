const Navbar = () => {
  return (
    <nav className='flex flex-col justify-center items-center text-center bg-[#ffffff] px-[12px] py-[16px] h-[9px] max-w-[488px] m-auto'>
      <div className='flex justify-center items-center'>
        <img className='h-[32px] w-[32px] mr-[8px]' alt='navbar icon' />
        <h1 className='text-[24px] font-bold text-[#ef4444] tracking-widest'>News</h1>
      </div>
    </nav>
  );
};

export default Navbar;
