import Giphy from "../components/api/Giphy";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <>
      <Navigation />
      <div className="relative flex flex-col items-center justify-center pt-2 mx-auto text-gray-600 h-3/6 scaleUpDown">
        <div className="w-3/5 my-36 scaleUpDown">
          <Giphy />
        </div>
      </div>
    </>
  );
}
