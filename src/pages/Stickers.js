import Navigation from "../components/Navigation";
import Stickers from "../components/Stickers";
export default function Sticker() {
  return (
    <>
      <Navigation />
      <div className="pt-2 relative mx-auto text-gray-600 flex justify-center h-3/6 items-center flex-col scaleUpDown">
        <div className="scaleUpDown w-3/5">
          <Stickers />
        </div>
      </div>
    </>
  );
}
