import ReactGiphySearchBox from "react-giphy-searchbox";
import Navigation from "../components/Navigation";
export default function Stickers() {
  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600 flex justify-center h-screen items-center flex-col">
        <Navigation />
        <div className="scaleUpDown">
          <ReactGiphySearchBox
            messageNoMatches="No matches found."
            imageRenditionName="original"
            apiKey="LYA2jGDHvyIkbB8KmweTmjlBbQhsX5Dw"
            onSelect={(item) => console.log(item)}
            library="stickers"
            searchPlaceholder="Search for Stickers"
            masonryConfig={[
              { columns: 2, imageWidth: 110, gutter: 5 },
              { mq: "700px", columns: 3, imageWidth: 110, gutter: 5 },
            ]}
          />
        </div>
      </div>
    </>
  );
}
