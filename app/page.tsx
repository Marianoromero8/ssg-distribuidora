import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home"
import AboutUs from "./components/aboutUs/AboutUs";
import Brands from "./components/brands/Brands";

export default function Page() {
  return (
    <div className="flex flex-col sm:px-10 w-full overflow-x-hidden">
      <NavBar />
      <Home />
      <Brands />
      <AboutUs />
    </div>
  );
}
