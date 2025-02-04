import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home"
import AboutUs from "./components/aboutUs/AboutUs";
import Providers from "./components/providers/Providers";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col sm:px-10 w-full overflow-x-hidden">
      {/* <div className="flex flex-col items-center justify-center mt-10 ">
        <h1 className="text-5xl text-[#f17900ec] font-bold">SSG DISTRIBUIDORA</h1>
        <Link href="https://www.youtube.com/watch?v=WV-DdHG6T_s&ab_channel=SantiGraziano" target="_blank">
          <Image
            src='/construccion.jpg'
            width={700}
            height={700}
            alt="En proceso...."
            sizes="100vw"
          />
        </Link>
      </div> */}
      {/* <NavBar /> */}
      <Home />
      <Providers />
      <AboutUs />
    </div>
  );
}
