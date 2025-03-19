import Home from "./components/home/Home"
import AboutUs from "./components/aboutUs/AboutUs";
import Providers from "./components/providers/Providers";
import Footer from "./components/footer/Footer";
import Commodity from "./components/commodity/Commodity";
import { Separator } from "./components/separator/Separator";
import Clients from "./components/clients/Clients";
export default function Page() {
  return (
    <div className="flex flex-col max-w-[screen] mx-auto overflow-x-hidden gap-8">
      <Home />
      <Providers />
      <Commodity />
      <AboutUs />
      {/* <Clients /> */}
      <Footer />
    </div>
  );
}
