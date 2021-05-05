import ReactGiphySearchBox from "react-giphy-searchbox";
import Navigation from "../components/Navigation";
function Home() {
  return (
    <>
      <div class="pt-2 relative mx-auto text-gray-600 flex justify-center h-screen items-center flex-col">
        <Navigation />
        <div class="scaleUpDown">
          <ReactGiphySearchBox
            apiKey="LYA2jGDHvyIkbB8KmweTmjlBbQhsX5Dw"
            onSelect={(item) => console.log(item)}
            masonryConfig={[
              { columns: 2, imageWidth: 110, gutter: 5 },
              {
                mq: "700px",
                columns: 3,
                imageWidth: 110,
                gutter: 5,
                imageRenditionFileType: "gif",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
