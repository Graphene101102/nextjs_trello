import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


const LayoutHomePage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="pt-20 md:pt-24 max-w-6xl 2xl:max-w-screen-xl ">
      <div className="h-full w-full">
        <Navbar />
        <div className="flex mx-20 gap-x-7">
          <div className="w-64 shrink-0 hidden md:block">
            <Sidebar />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}

export default LayoutHomePage