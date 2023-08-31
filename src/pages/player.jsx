import React from "react";
import ReactPlayer from "react-player";
import TransparentBtn from "../components/ui/transparentBtn";
import Menu from "../assets/menu.svg";
import Prev from "../assets/prev.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import Next from "../assets/next.svg";
import Speaker from "../assets/speaker.svg";
import Mute from "../assets/mute.svg";

const Player = () => {
  const data = {
    _id: "61b6f14dc2f7cafd968c3201",
    title: "Amsterdam",
    photo:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Imagine_Dragons_-_%22Amsterdam%22_%28Promotional_single%29.jpg",
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    duration: 280,
    artist: "Imagine Dragons",
  };
  return (
    <div className="absolute bottom-0 h-[150px] bg-black w-full px-8 xl:relative  xl:p-28 xl:h-screen">
      <div className="w-full h-full">
        <div className="flex flex-row justify-between xl:flex-col mt-4">
          <div className="w-full h-full">
            <h1 className="font-bold xl:text-4xl text-white">{data.title}</h1>
            <h4 className="font-light xl:text-base text-white">
              {data.artist}
            </h4>
          </div>
          <img
            src={data.photo}
            alt=""
            className=" w-10 h-10 xl:w-3/4 xl:min-w-[420px] xl:h-full rounded-xl xl:mt-6"
          />{" "}
        </div>
        <div className=" xl:w-3/4 h-[20px] xl:min-w-[420px] mt-4">
          <div className="h-[4px] w-full  bg-white bg-opacity-20 cursor-pointer rounded-2xl">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              className="h-[4px] w-full absolute opacity-0 cursor-pointer "
            />
            <div
              className="h-[4px] bg-white rounded-2xl"
              //   style={{ width: `${played * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-3">
            <TransparentBtn className={"justify-start"}>
              <img
                src={Menu}
                alt="Prev"
                className="w-5/6 h-5/6 g:w-full lg:h-full"
              />
            </TransparentBtn>
            <div className="flex items-center  xs:gap-2 sm:gap-5 xl:gap-9  ">
              <TransparentBtn>
                <img
                  src={Prev}
                  alt="Prev"
                  className="w-3/4 h-3/4 lg:w-full lg:h-full"
                />
              </TransparentBtn>
              <TransparentBtn>
                <img
                  src={Play}
                  alt="Play"
                  className="w-3/4 h-3/4 lg:w-full lg:h-full"
                />
              </TransparentBtn>
              <TransparentBtn>
                <img
                  src={Next}
                  alt="Next"
                  className="w-3/4 h-3/4 lg:w-full lg:h-full"
                />
              </TransparentBtn>
            </div>
            <TransparentBtn className={"justify-end"}>
              <img
                src={Speaker}
                alt="Next"
                className="w-5/6 h-5/6 lg:w-full lg:h-full"
              />
            </TransparentBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
