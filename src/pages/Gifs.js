import Giphy from "../components/Giphy";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600 flex justify-center h-3/6 items-center flex-col">
        <Navigation />
        <div className="scaleUpDown w-3/5">
          <Giphy />
        </div>
      </div>
    </>
  );
}
