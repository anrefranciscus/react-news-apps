const Container = ({ children }) => {
  return (
    <section className="flex flex-col h-[calc(100vh-94px)] max-w-[480px] p-[16px] mx-auto bg-[#ffffff]">
      {children}
    </section>
  );
};

export default Container;
