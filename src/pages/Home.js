import bye from "../assets/img/wats.gif";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600 dark:text-white flex justify-center h-screen items-center flex-col">
        <Navigation />
        <div className="scaleUpDown">
          <img className="rounded" src={bye} alt="" />
        </div>
      </div>
    </>
  );
}
