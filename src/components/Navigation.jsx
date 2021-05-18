import { Link } from "react-router-dom";
import React from "react";
import useSound from "use-sound";
import useDarkMode from "../hooks/useDarkMode";
import off from "../assets/sounds/switch-off.mp3";
import on from "../assets/sounds/switch-on.mp3";
import nav from "../assets/sounds/navigate.mp3";
const Navigation = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [offSong] = useSound(off);
  const [navigation] = useSound(nav);
  const [onSong] = useSound(on);
  return (
    <>
      <div className="fixed inline-flex flex-col items-center justify-end px-4 pb-4 mt-80">
        <ul className="inline-block">
          <li className="mr-3">
            <Link
              className="inline-flex px-3 py-1 font-normal text-gray-700 transition duration-150 transform rounded-full hover:text-gray-100 dark:text-white hover:scale-110"
              to="/"
              onClick={navigation}
            >
              <svg
                width="30"
                height="30"
                className="-mt-0.5"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3934 14.3934C36.1847 11.5804 43.8153 11.5804 50.6066 14.3934C57.3979 17.2064 62.7936 22.6021 65.6066 29.3934C68.4196 36.1847 68.4196 43.8153 65.6066 50.6066C62.7936 57.3979 57.3979 62.7936 50.6066 65.6066C43.8153 68.4196 36.1847 68.4196 29.3934 65.6066C22.6021 62.7936 17.2064 57.3979 14.3934 50.6066C11.5804 43.8153 11.5804 36.1847 14.3934 29.3934C17.2064 22.6021 22.6021 17.2064 29.3934 14.3934Z"
                  fill="#2F80ED"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.6872 17.5874C24.292 17.1469 24.9156 16.7301 25.5567 16.3385L27.6228 19.1733L25.7059 19.2248L23.6872 17.5874ZM13.0471 33.5529C13.3849 32.1387 13.8355 30.7447 14.3989 29.3843C15.5501 26.6052 17.1337 24.0598 19.0685 21.8295L20.7566 23.6271L23.4318 23.3475L23.9148 19.953L25.426 21.4865L27.7225 21.764L28.2966 23.6271L21.6369 30.6039L21.8665 33.6023L19.9911 31.3175H16.7761V33.9734L19.6084 34.8059L21.8665 37.3826L26.3415 37.5808L28.5645 40.0782L31.0141 40.8441V44.3198L23.1296 52.5651V58.2734L21.34 56.9715L20.3356 54.2697V47.5703L17.8095 44.3198L17.6564 39.5628L19.417 37.5808L17.886 35.678L14.438 35.1115L13.0471 33.5529ZM30.3375 14.0154C31.062 13.7457 31.7951 13.5073 32.5347 13.3003L39.6722 12.8818L39.9879 18.5067L34.5773 23.8918L32.104 20.9008L32.1787 18.8381L29.9381 16.4143L30.3375 14.0154ZM56.613 17.8009C57.1538 18.2057 57.6791 18.6297 58.188 19.0721L55.4559 21.4939L54.8673 19.5329L56.613 17.8009ZM58.3702 19.2318L58.9662 19.9726L57.2982 21.7775L57.1737 23.1699L53.6386 23.2472L51.1649 25.5133L49.5962 19.5329L45.8705 22.467L45.6744 25.3441L51.1649 25.5133L49.8909 28.2629L47.6958 28.9746L47.9249 30.4573L50.203 30.699L52.3689 28.5846L53.8128 28.6104L55.5025 30.5759L56.7987 30.4569L58.0948 30.338L58.9911 29.4355L60.7089 29.3324L63.0241 31.9624L61.1819 33.7931L58.4228 33.6994L58.022 34.4308L54.529 33.1854L54.3954 32.0783L50.9747 32.1945L50.4289 31.5104L48.2135 34.3582L47.6388 39.7751L51.2237 43.3849L55.4061 43.4365L55.5025 48.8149L57.2733 50.2178L57.4227 54.9622L58.6176 56.6124L60.9827 56.664L64.1693 53.312L64.1942 45.5508L67.107 42.5598L66.6091 40.6518L62.1279 36.0106L63.1237 35.3402L66.1361 38.5117L67.6858 38.5759C67.5269 35.467 66.8441 32.3786 65.6374 29.4456L65.0477 29.9952L63.3917 29.0536L60.7089 29.3324L61.8006 26.9685L64.368 26.7746C62.8172 23.9157 60.7827 21.3662 58.3702 19.2318Z"
                  fill="#6FCF97"
                />
              </svg>
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-flex px-3 py-1 font-normal text-gray-700 transition duration-150 transform rounded-full hover:text-gray-100 dark:text-white hover:scale-110"
              to="/stickers"
              onClick={navigation}
            >
              <svg
                width="30"
                height="30"
                className="-mt-0.5"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 64.334H60C62.2091 64.334 64 62.5431 64 60.334V20.334C64 18.1248 62.2091 16.334 60 16.334H20C17.7909 16.334 16 18.1248 16 20.334V60.334C16 62.5431 17.7909 64.334 20 64.334Z"
                  fill="#56CCF2"
                />
                <path
                  d="M62.8995 20.2626C63.6805 19.4816 63.6805 18.2152 62.8995 17.4342C62.1184 16.6532 60.8521 16.6532 60.0711 17.4342L62.8995 20.2626ZM34.615 42.8902C33.834 43.6713 33.834 44.9376 34.615 45.7187C35.3961 46.4997 36.6624 46.4997 37.4434 45.7187L34.615 42.8902ZM60.0711 17.4342L34.615 42.8902L37.4434 45.7187L62.8995 20.2626L60.0711 17.4342Z"
                  fill="#F2F2F2"
                />
                <path
                  d="M65.1984 22.5616L57.7738 15.1369C56.6813 14.0444 57.3049 12.1735 58.8345 11.955L66.0116 10.9296C67.9915 10.6468 69.6885 12.3439 69.4057 14.3238L68.3804 21.5009C68.1619 23.0305 66.291 23.6541 65.1984 22.5616Z"
                  fill="#2F80ED"
                  stroke="#2F80ED"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-flex px-3 py-1 font-normal text-gray-700 transition duration-150 transform rounded-full hover:text-gray-100 hover:scale-110"
              onClick={() => setTheme(colorTheme)}
            >
              {colorTheme === "light" ? (
                <svg
                  width="30"
                  height="30"
                  className="-mt-0.5 anim"
                  viewBox="0 0 80 80"
                  fill="none"
                  onClick={offSong}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.6333 16.0645C43.4734 13.4658 36.525 13.4658 30.3651 16.0645C24.3093 18.6194 19.5163 23.475 17.0403 29.5634L16.9172 29.866C14.4051 36.0431 14.4051 42.9571 16.9172 49.1342L17.0403 49.4367C19.5163 55.5252 24.3093 60.3808 30.3651 62.9356C36.525 65.5343 43.4734 65.5343 49.6333 62.9356C49.8399 62.8485 50.0449 62.7586 50.2485 62.6662C52.018 61.8626 51.2483 59.276 49.3725 58.7678C48.533 58.5404 47.705 58.2557 46.8944 57.9137C42.1362 55.9063 38.3703 52.0912 36.4248 47.3075L36.3282 47.0697C34.3543 42.2163 34.3543 36.7839 36.3281 31.9304L36.4248 31.6927C38.3703 26.9089 42.1362 23.0938 46.8944 21.0865C47.705 20.7445 48.533 20.4598 49.3726 20.2323C51.2484 19.7242 52.0181 17.1376 50.2486 16.334C50.045 16.2415 49.8399 16.1517 49.6333 16.0645Z"
                    fill="#A78BFA"
                  />
                  <path
                    d="M30.3651 16.0645L29.5877 14.2218V14.2218L30.3651 16.0645ZM49.6333 16.0645L50.4107 14.2218V14.2218L49.6333 16.0645ZM17.0403 29.5634L15.1876 28.81L15.1876 28.81L17.0403 29.5634ZM16.9172 29.866L18.7699 30.6194H18.7699L16.9172 29.866ZM16.9172 49.1342L18.7699 48.3807L16.9172 49.1342ZM17.0403 49.4367L15.1876 50.1902H15.1876L17.0403 49.4367ZM30.3651 62.9356L31.1425 61.0929H31.1425L30.3651 62.9356ZM49.6333 62.9356L48.8559 61.0929L49.6333 62.9356ZM46.8944 57.9137L47.6718 56.071V56.071L46.8944 57.9137ZM36.4248 47.3075L38.2775 46.554L38.2775 46.554L36.4248 47.3075ZM36.3282 47.0697L34.4755 47.8232L34.4755 47.8232L36.3282 47.0697ZM36.3281 31.9304L34.4755 31.177V31.177L36.3281 31.9304ZM36.4248 31.6927L38.2775 32.4461V32.4461L36.4248 31.6927ZM46.8944 21.0865L47.6718 22.9292L46.8944 21.0865ZM49.3726 20.2323L48.8497 18.3019L49.3726 20.2323ZM50.2485 62.6662L51.0755 64.4872L50.2485 62.6662ZM49.3725 58.7678L49.8955 56.8374L49.3725 58.7678ZM31.1425 17.9073C36.8053 15.5182 43.1931 15.5182 48.8559 17.9073L50.4107 14.2218C43.7538 11.4134 36.2446 11.4134 29.5877 14.2218L31.1425 17.9073ZM18.8929 30.3168C21.1692 24.7197 25.5754 20.2559 31.1425 17.9073L29.5877 14.2218C23.0433 16.9828 17.8635 22.2302 15.1876 28.81L18.8929 30.3168ZM18.7699 30.6194L18.8929 30.3168L15.1876 28.81L15.0646 29.1125L18.7699 30.6194ZM18.7699 48.3807C16.4542 42.6867 16.4542 36.3134 18.7699 30.6194L15.0646 29.1125C12.356 35.7727 12.356 43.2274 15.0646 49.8876L18.7699 48.3807ZM18.8929 48.6833L18.7699 48.3807L15.0646 49.8876L15.1876 50.1902L18.8929 48.6833ZM31.1425 61.0929C25.5754 58.7442 21.1692 54.2804 18.8929 48.6833L15.1876 50.1902C17.8635 56.7699 23.0433 62.0173 29.5877 64.7783L31.1425 61.0929ZM48.8559 61.0929C43.1931 63.4819 36.8053 63.4819 31.1425 61.0929L29.5877 64.7783C36.2446 67.5868 43.7538 67.5868 50.4107 64.7783L48.8559 61.0929ZM49.4215 60.8452C49.2344 60.9302 49.0458 61.0128 48.8559 61.0929L50.4107 64.7783C50.6339 64.6842 50.8555 64.5871 51.0755 64.4872L49.4215 60.8452ZM49.8955 56.8374C49.1422 56.6334 48.3992 56.3779 47.6718 56.071L46.1169 59.7564C47.0107 60.1335 47.9237 60.4475 48.8496 60.6983L49.8955 56.8374ZM47.6718 56.071C43.4023 54.2698 40.0232 50.8465 38.2775 46.554L34.5722 48.0609C36.7175 53.336 40.8702 57.5429 46.1169 59.7564L47.6718 56.071ZM38.2775 46.554L38.1808 46.3163L34.4755 47.8232L34.5722 48.0609L38.2775 46.554ZM38.1808 46.3163C36.4035 41.946 36.4035 37.0542 38.1808 32.6839L34.4755 31.177C32.3052 36.5135 32.3052 42.4867 34.4755 47.8232L38.1808 46.3163ZM38.1808 32.6839L38.2775 32.4461L34.5722 30.9393L34.4755 31.177L38.1808 32.6839ZM38.2775 32.4461C40.0232 28.1537 43.4023 24.7304 47.6718 22.9292L46.1169 19.2437C40.8702 21.4573 36.7175 25.6642 34.5722 30.9393L38.2775 32.4461ZM47.6718 22.9292C48.3993 22.6223 49.1422 22.3668 49.8955 22.1627L48.8497 18.3019C47.9238 18.5527 47.0107 18.8667 46.1169 19.2437L47.6718 22.9292ZM48.8559 17.9073C49.0458 17.9874 49.2344 18.07 49.4216 18.155L51.0756 14.513C50.8556 14.4131 50.6339 14.316 50.4107 14.2218L48.8559 17.9073ZM49.8955 22.1627C51.5909 21.7035 52.7488 20.3334 53.1161 18.8859C53.3046 18.1431 53.3099 17.284 52.9754 16.4592C52.6281 15.6026 51.9662 14.9175 51.0756 14.513L49.4216 18.155C49.4311 18.1593 49.4031 18.1478 49.3626 18.1062C49.3219 18.0644 49.2893 18.0133 49.2686 17.9622C49.2288 17.8642 49.2562 17.8342 49.239 17.902C49.2223 17.9679 49.1765 18.0629 49.0954 18.1488C49.019 18.2298 48.934 18.2791 48.8497 18.3019L49.8955 22.1627ZM51.0755 64.4872C51.9661 64.0827 52.6281 63.3975 52.9754 62.541C53.3098 61.7162 53.3045 60.857 53.116 60.1143C52.7487 58.6668 51.5908 57.2967 49.8955 56.8374L48.8496 60.6983C48.9339 60.7211 49.0189 60.7704 49.0954 60.8514C49.1765 60.9373 49.2222 61.0323 49.2389 61.0982C49.2561 61.166 49.2288 61.1359 49.2685 61.038C49.2892 60.9869 49.3218 60.9358 49.3625 60.894C49.403 60.8524 49.4311 60.8408 49.4215 60.8452L51.0755 64.4872Z"
                    fill="#A78BFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.2788 19.8129C32.2027 19.4302 33.2407 19.4302 34.1646 19.8129C35.0884 20.1955 35.8224 20.9295 36.2051 21.8534C36.5877 22.7772 36.5877 23.8152 36.2051 24.7391C35.8224 25.6629 35.0884 26.3969 34.1646 26.7796C33.2407 27.1623 32.2027 27.1623 31.2788 26.7796C30.355 26.3969 29.621 25.6629 29.2383 24.7391C28.8557 23.8152 28.8557 22.7772 29.2383 21.8534C29.621 20.9295 30.355 20.1955 31.2788 19.8129ZM21.5228 33.4946C23.1155 32.8349 24.9051 32.8349 26.4979 33.4946C28.0906 34.1543 29.356 35.4197 30.0157 37.0125C30.6755 38.6052 30.6755 40.3948 30.0157 41.9875C29.356 43.5803 28.0906 44.8457 26.4979 45.5054C24.9051 46.1651 23.1155 46.1651 21.5228 45.5054C19.9301 44.8457 18.6647 43.5803 18.0049 41.9875C17.3452 40.3948 17.3452 38.6052 18.0049 37.0125C18.6647 35.4197 19.9301 34.1543 21.5228 33.4946ZM37.5466 55.7979C37.1856 55.6483 36.78 55.6483 36.419 55.7979C36.058 55.9474 35.7712 56.2342 35.6216 56.5952C35.4721 56.9562 35.4721 57.3619 35.6216 57.7229C35.7712 58.0839 36.058 58.3707 36.419 58.5202C36.78 58.6698 37.1856 58.6698 37.5466 58.5202C37.9076 58.3707 38.1944 58.0839 38.344 57.7229C38.4935 57.3619 38.4935 56.9562 38.344 56.5952C38.1944 56.2342 37.9076 55.9474 37.5466 55.7979Z"
                    fill="#F2F2F2"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  className="-mt-0.5 anim"
                  viewBox="0 0 80 80"
                  fill="none"
                  onClick={onSong}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.2597 23.809L29.4205 25.4377C29.8559 25.1273 30.1489 24.6556 30.2341 24.1278C30.3194 23.5999 30.1897 23.0599 29.8741 22.6283L28.2597 23.809ZM24.7176 18.9656L26.332 17.7849C25.6814 16.8953 24.4337 16.6997 23.5421 17.3475C22.6504 17.9953 22.4509 19.2424 23.0959 20.1361L24.7176 18.9656ZM28.2294 23.831L26.6077 25.0015C26.9207 25.4352 27.3944 25.7254 27.9229 25.8073C28.4514 25.8893 28.9908 25.7562 29.4204 25.4377L28.2294 23.831ZM20.9852 33.802L22.8815 34.4377C23.0515 33.9307 23.0113 33.3768 22.77 32.8995C22.5287 32.4223 22.1064 32.0616 21.5973 31.898L20.9852 33.802ZM15.2726 31.9656L15.8847 30.0615C14.8354 29.7242 13.711 30.2993 13.3705 31.3475C13.0299 32.3957 13.6015 33.5219 14.6486 33.8657L15.2726 31.9656ZM20.9737 33.8376L20.3497 35.7378C20.8578 35.9047 21.4115 35.8611 21.8873 35.6168C22.363 35.3725 22.7211 34.9478 22.8815 34.4377L20.9737 33.8376ZM20.9737 46.1624L22.8815 45.5623C22.7211 45.0522 22.363 44.6275 21.8873 44.3832C21.4115 44.1389 20.8578 44.0953 20.3497 44.2622L20.9737 46.1624ZM15.2726 48.0344L14.6486 46.1343C13.6015 46.4781 13.0299 47.6043 13.3705 48.6525C13.711 49.7007 14.8354 50.2758 15.8847 49.9385L15.2726 48.0344ZM20.9852 46.198L21.5973 48.102C22.1064 47.9384 22.5287 47.5777 22.77 47.1004C23.0113 46.6232 23.0515 46.0693 22.8815 45.5623L20.9852 46.198ZM28.2294 56.169L29.4203 54.5623C28.9907 54.2438 28.4514 54.1107 27.9229 54.1927C27.3944 54.2746 26.9207 54.5649 26.6077 54.9985L28.2294 56.169ZM24.7176 61.0344L23.0959 59.8639C22.4509 60.7576 22.6504 62.0047 23.5421 62.6525C24.4337 63.3003 25.6814 63.1047 26.332 62.2151L24.7176 61.0344ZM28.2597 56.191L29.8741 57.3717C30.1897 56.9401 30.3194 56.4001 30.2341 55.8723C30.1489 55.3445 29.8559 54.8727 29.4205 54.5624L28.2597 56.191ZM39.9813 59.9999L40.0003 58C39.4655 57.9949 38.951 58.2043 38.5716 58.5812C38.1923 58.9582 37.9797 59.4714 37.9813 60.0061L39.9813 59.9999ZM40.0001 66L38.0001 66.0062C38.0035 67.1084 38.8979 68 40.0001 68C41.1022 68 41.9966 67.1084 42 66.0062L40.0001 66ZM40.0188 59.9999L42.0188 60.0062C42.0204 59.4715 41.8079 58.9584 41.4287 58.5814C41.0495 58.2045 40.5351 57.9951 40.0004 58L40.0188 59.9999ZM51.7407 56.1915L50.5805 54.5624C50.1449 54.8727 49.8517 55.3444 49.7664 55.8724C49.681 56.4003 49.8107 56.9404 50.1264 57.3721L51.7407 56.1915ZM55.2825 61.0344L53.6681 62.2151C54.3187 63.1047 55.5664 63.3003 56.458 62.6525C57.3497 62.0047 57.5492 60.7576 56.9042 59.8639L55.2825 61.0344ZM51.771 56.1695L53.3927 54.999C53.0798 54.5654 52.6063 54.2752 52.078 54.1932C51.5496 54.1111 51.0104 54.2441 50.5807 54.5623L51.771 56.1695ZM59.0158 46.1983L57.1196 45.5623C56.9495 46.0693 56.9896 46.6234 57.2309 47.1006C57.4722 47.5779 57.8945 47.9386 58.4037 48.1023L59.0158 46.1983ZM64.7275 48.0344L64.1154 49.9385C65.1647 50.2758 66.2891 49.7007 66.6296 48.6525C66.9702 47.6043 66.3986 46.4781 65.3515 46.1343L64.7275 48.0344ZM59.0273 46.1627L59.6513 44.2625C59.1433 44.0957 58.5896 44.1392 58.1139 44.3834C57.6382 44.6276 57.2801 45.0522 57.1196 45.5622L59.0273 46.1627ZM59.0273 33.8373L57.1196 34.4377C57.2801 34.9478 57.6382 35.3723 58.1139 35.6166C58.5896 35.8608 59.1433 35.9043 59.6513 35.7375L59.0273 33.8373ZM64.7275 31.9656L65.3515 33.8657C66.3986 33.5219 66.9702 32.3957 66.6296 31.3475C66.2891 30.2993 65.1647 29.7242 64.1154 30.0615L64.7275 31.9656ZM59.0158 33.8017L58.4037 31.8977C57.8946 32.0614 57.4722 32.4221 57.2309 32.8993C56.9896 33.3766 56.9495 33.9306 57.1195 34.4376L59.0158 33.8017ZM51.771 23.8305L50.5807 25.4377C51.0104 25.7559 51.5496 25.8889 52.078 25.8068C52.6063 25.7248 53.0798 25.4346 53.3927 25.001L51.771 23.8305ZM55.2825 18.9656L56.9042 20.1361C57.5492 19.2424 57.3497 17.9953 56.458 17.3475C55.5664 16.6997 54.3187 16.8953 53.6681 17.7849L55.2825 18.9656ZM51.7407 23.8085L50.1264 22.6279C49.8107 23.0596 49.681 23.5998 49.7664 24.1277C49.8517 24.6557 50.145 25.1275 50.5807 25.4377L51.7407 23.8085ZM40.0188 20.0001L40.0005 22C40.5352 22.0049 41.0495 21.7955 41.4287 21.4185C41.8079 21.0416 42.0204 20.5285 42.0188 19.9938L40.0188 20.0001ZM40.0001 14L42 13.9938C41.9966 12.8916 41.1022 12 40.0001 12C38.8979 12 38.0035 12.8916 38.0001 13.9938L40.0001 14ZM39.9813 20.0001L37.9813 19.9939C37.9797 20.5287 38.1923 21.0419 38.5717 21.4189C38.9511 21.7958 39.4657 22.0051 40.0005 22L39.9813 20.0001ZM29.8741 22.6283L26.332 17.7849L23.1033 20.1462L26.6454 24.9896L29.8741 22.6283ZM23.0959 20.1361L26.6077 25.0015L29.8511 22.6605L26.3393 17.795L23.0959 20.1361ZM29.4204 25.4377L29.4205 25.4377L27.099 22.1803C27.0787 22.1947 27.0585 22.2094 27.0384 22.2243L29.4204 25.4377ZM21.5973 31.898L15.8847 30.0615L14.6605 33.8696L20.3731 35.7061L21.5973 31.898ZM14.6486 33.8657L20.3497 35.7378L21.5976 31.9375L15.8965 30.0654L14.6486 33.8657ZM22.8815 34.4377L22.8815 34.4377L19.0889 33.1663C19.081 33.1901 19.0733 33.2138 19.0658 33.2376L22.8815 34.4377ZM20.3497 44.2622L14.6486 46.1343L15.8965 49.9346L21.5976 48.0625L20.3497 44.2622ZM15.8847 49.9385L21.5973 48.102L20.3731 44.2939L14.6605 46.1304L15.8847 49.9385ZM22.8815 45.5623L22.8815 45.5623L19.0658 46.7624C19.0733 46.7862 19.081 46.81 19.0889 46.8337L22.8815 45.5623ZM26.6077 54.9985L23.0959 59.8639L26.3393 62.205L29.8511 57.3395L26.6077 54.9985ZM26.332 62.2151L29.8741 57.3717L26.6453 55.0104L23.1033 59.8538L26.332 62.2151ZM29.4205 54.5624C29.4205 54.5624 29.4204 54.5623 29.4203 54.5623L27.0385 57.7758C27.0585 57.7906 27.0786 57.8052 27.0989 57.8197L29.4205 54.5624ZM37.9813 60.0061L38.0001 66.0062L42 65.9938L41.9813 59.9937L37.9813 60.0061ZM42 66.0062L42.0188 60.0062L38.0188 59.9937L38.0001 65.9938L42 66.0062ZM40.0004 58H40.0003L39.9624 61.9998C39.9871 62.0001 40.012 62.0001 40.0371 61.9998L40.0004 58ZM50.1264 57.3721L53.6681 62.2151L56.8968 59.8538L53.3551 55.0109L50.1264 57.3721ZM56.9042 59.8639L53.3927 54.999L50.1493 57.34L53.6608 62.205L56.9042 59.8639ZM50.5807 54.5623L50.5805 54.5624L52.901 57.8206C52.9213 57.8061 52.9415 57.7914 52.9613 57.7767L50.5807 54.5623ZM58.4037 48.1023L64.1154 49.9385L65.3396 46.1304L59.6279 44.2942L58.4037 48.1023ZM65.3515 46.1343L59.6513 44.2625L58.4034 48.0628L64.1036 49.9346L65.3515 46.1343ZM57.1196 45.5622L57.1196 45.5623L60.912 46.8342C60.9198 46.8108 60.9275 46.7871 60.9351 46.7631L57.1196 45.5622ZM59.6513 35.7375L65.3515 33.8657L64.1036 30.0654L58.4034 31.9372L59.6513 35.7375ZM64.1154 30.0615L58.4037 31.8977L59.6278 35.7058L65.3396 33.8696L64.1154 30.0615ZM57.1195 34.4376L57.1196 34.4377L60.9351 33.237C60.9275 33.2128 60.9198 33.1891 60.912 33.1659L57.1195 34.4376ZM53.3927 25.001L56.9042 20.1361L53.6608 17.795L50.1493 22.66L53.3927 25.001ZM53.6681 17.7849L50.1264 22.6279L53.3551 24.9891L56.8968 20.1462L53.6681 17.7849ZM50.5807 25.4377C50.5807 25.4377 50.5807 25.4377 50.5807 25.4377L52.9613 22.2233C52.9413 22.2084 52.9211 22.1938 52.9007 22.1793L50.5807 25.4377ZM42.0188 19.9938L42 13.9938L38.0001 14.0062L38.0188 20.0063L42.0188 19.9938ZM38.0001 13.9938L37.9813 19.9939L41.9813 20.0063L42 14.0062L38.0001 13.9938ZM40.0005 22L40.0005 22L40.037 18.0002C40.012 17.9999 39.9871 17.9999 39.9622 18.0002L40.0005 22Z"
                    fill="#9B51E0"
                  />
                  <path
                    d="M36.4733 29.1459C38.7655 28.4011 41.2345 28.4011 43.5267 29.1459C45.8189 29.8907 47.8164 31.342 49.2331 33.2918C50.6497 35.2416 51.4127 37.5899 51.4127 40C51.4127 42.4101 50.6497 44.7584 49.2331 46.7082C47.8164 48.658 45.8189 50.1093 43.5267 50.8541C41.2345 51.5989 38.7655 51.5989 36.4733 50.8541C34.1811 50.1093 32.1836 48.658 30.7669 46.7082C29.3503 44.7584 28.5873 42.4101 28.5873 40C28.5873 37.5899 29.3503 35.2416 30.7669 33.2918C32.1836 31.342 34.1811 29.8907 36.4733 29.1459Z"
                    fill="#F2F2F2"
                    stroke="#9B51E0"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;