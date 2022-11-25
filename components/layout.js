import Header from "./../components/Header";
import Image from "next/image";
import cameraBg from "./../public/camera1.avif";

const MainContainer = ({ children }) => (
  <div className="bg-theme-gray w-full xl:w-3/4 pt-16 flex flex-col items-center">
    {children}
  </div>
);

export default function Layout({ children }) {
  return (
    <div className="flex bg-theme-gray gap-0 min-h-screen">
      <Header />
      <div className="xl:w-1/4 xl:block hidden">
        <Image className="" src={cameraBg} alt="s" layout="" />
      </div>
      <MainContainer>{children}</MainContainer>
    </div>
  );
}
