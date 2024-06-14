import { Navbar } from "@/components/Navbar";

const LayoutBoardIdPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="pt-20 md:pt-24 max-w-6xl 2xl:max-w-screen-xl ">
      <div className="h-full w-full">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default LayoutBoardIdPage