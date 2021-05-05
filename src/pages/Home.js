import bye from "../assets/img/tenor.gif";
import Navigation from "../components/Navigation";
function Home() {
  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600 flex justify-center h-screen items-center flex-col">
        <Navigation />
        <div className="scaleUpDown">
          <p className="inline-flex items-center">
          Welcome to GifandStickers
            {" "}
            <svg
              width="30"
              height="30"
              className="-mt-0.5"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0544 17.2712C35.9714 13.9402 44.0288 13.9402 50.9457 17.2712C57.8627 20.6022 62.8863 26.9018 64.5947 34.3865C66.303 41.8713 64.5101 49.7266 59.7234 55.7289C54.9367 61.7312 47.6773 65.2272 40.0001 65.2272C32.3228 65.2272 25.0634 61.7312 20.2767 55.7289C15.49 49.7266 13.6971 41.8713 15.4054 34.3865C17.1138 26.9018 22.1375 20.6022 29.0544 17.2712Z"
                fill="#F2C94C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9001 45C26.3601 47.1618 27.3166 49.2161 28.7295 50.9879C31.4648 54.4178 35.613 56.4155 40 56.4155C44.387 56.4155 48.5353 54.4178 51.2705 50.9879C52.6835 49.2161 53.6399 47.1618 54.0999 45H25.9001Z"
                fill="#333333"
              />
              <path
                d="M34.9497 34.3431C34.2997 33.6003 33.5281 33.011 32.6788 32.609C31.8295 32.2069 30.9193 32 30 32C29.0807 32 28.1705 32.2069 27.3212 32.609C26.4719 33.011 25.7003 33.6003 25.0503 34.3431"
                stroke="#4F4F4F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M54.9497 34.3431C54.2997 33.6003 53.5281 33.011 52.6788 32.609C51.8295 32.2069 50.9193 32 50 32C49.0807 32 48.1705 32.2069 47.3212 32.609C46.4719 33.011 45.7003 33.6003 45.0503 34.3431"
                stroke="#4F4F4F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
          <img className="rounded" src={bye} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
