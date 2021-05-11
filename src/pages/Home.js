import Category from "../components/Category";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <>
      <Navigation />
      <div className="pt-2 relative mx-auto text-gray-600 flex justify-center h-3/6 items-center flex-col scaleUpDown">
        <div className="scaleUpDown w-3/5">
          <Category />
        </div>
      </div>
    </>
  );
}
