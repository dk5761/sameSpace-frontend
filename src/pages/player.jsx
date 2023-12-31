import React from "react";
import ReactPlayer from "react-player";
import TransparentBtn from "../components/ui/transparentBtn";
import Menu from "../assets/icons/menu.svg";
import Prev from "../assets/icons/prev.svg";
import Play from "../assets/icons/play.svg";
import Pause from "../assets/icons/pause.svg";
import Next from "../assets/icons/next.svg";
import Speaker from "../assets/icons/speaker.svg";
import Mute from "../assets/icons/mute.svg";
import { useDispatch, useSelector } from "react-redux";
import { prevSong, nextSong } from "../redux/songSlice";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { cn } from "../lib/utils";
import Blank from "../assets/images/blank.jpg";

const Player = () => {
  const song = useSelector((state) => state.song.selectedSong);

  const dispatch = useDispatch();
  const playerRef = useRef(null);

  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [current, setCurrent] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setCurrent(state.played);
    }
  };

  const handleSeekChange = (e) => {
    const newTime = e.target.value;
    setCurrent(newTime);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
    playerRef.current.seekTo(current);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleNextSong = () => {
    dispatch(nextSong());
    setCurrent(0);
    playerRef.current.seekTo(0);
  };

  const handlePrevSong = () => {
    dispatch(prevSong());
    setCurrent(0);
    playerRef.current.seekTo(0);
  };

  useEffect(() => {
    if (current == 1) {
      dispatch(nextSong());
      setCurrent(0);
      playerRef.current.seekTo(0);
    }
  }, [current]);

  useEffect(() => {
    setCurrent(0);
    playerRef.current.seekTo(0);
  }, [song._id]);

  return (
    <div
      className={cn(
        "absolute bottom-0 h-[160px] pt-4 bg-black xl:bg-transparent w-full xl:w-full px-8 xl:relative xl:h-full xl:min-h-screen xl:max-h-screen flex justify-start xl:items-center  xl:mr-10  ",
        Object.keys(song).length > 0 ? "flex" : "hidden xl:flex"
      )}
    >
      <div className=" xl:max-w-[480px] xl:min-h-[700px] xl:h-[600px] flex flex-col xl:justify-center xl:items-start w-full md:px-10">
        <div className="flex flex-row  justify-start xl:flex-col xl:mt-4  xl:h-full w-full flex-wrap">
          <div className=" w-3/4 xl:w-full h-max ">
            <h1 className="font-bold xl:text-4xl text-white w-full max-w-[517px] truncate">
              {song.title}
            </h1>
            <h4 className="font-light xl:text-base text-white">
              {song.artist}
            </h4>
          </div>
          {song.photo ? (
            <div className="w-1/4 flex justify-end xl:block">
              <img
                src={song.photo}
                alt=""
                className=" w-10 h-10 xl:min-w-[420px] xl:min-h-[420px] xl:max-w-[517px]  xl:w-full rounded-xl xl:mt-6 aspect-square object-cover self-end xl:self-start  "
              />
            </div>
          ) : (
            <div
              className=" w-10 h-10 xl:w-full xl:aspect-square xl:min-w-[420px] xl:h-max rounded-xl xl:mt-6 relative flex justify-center items-center "
              style={{ backgroundImage: `url(${Blank})` }}
            >
              <div className="text-white font-semibold text-2xl">
                Select a song to play
              </div>
            </div>
          )}
          <ReactPlayer
            ref={playerRef}
            url={song.url}
            playing={isPlaying}
            onProgress={handleProgress}
            controls={false}
            muted={isMuted}
            height={"0%"}
            style={{
              display: "none",
            }}
          />
          {song.url ? (
            <>
              <div className=" xl:w-full h-[20px] xl:min-w-[420px] mt-4 relative w-full ">
                <div className="h-[6px] w-full  bg-white bg-opacity-20 cursor-pointer rounded-2xl">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    className="h-[4px] w-full absolute opacity-0 cursor-pointer "
                    onMouseDown={handleSeekMouseDown}
                    onMouseUp={handleSeekMouseUp}
                    onChange={handleSeekChange}
                  />
                  <div
                    className="h-[6px] bg-white rounded-2xl"
                    style={{ width: `${current * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-3 mb-5">
                  <TransparentBtn className={"p-3"}>
                    <img
                      src={Menu}
                      alt="Prev"
                      className="lg:w-full lg:h-full"
                    />
                  </TransparentBtn>
                  <div className="flex items-center  xs:gap-2 sm:gap-5 xl:gap-3  ">
                    <TransparentBtn
                      onClick={handlePrevSong}
                      className={
                        "bg-transparent p-3 opacity-50 hover:opacity-80"
                      }
                    >
                      <img
                        src={Prev}
                        alt="Prev"
                        className="lg:w-full lg:h-full"
                      />
                    </TransparentBtn>
                    <TransparentBtn
                      onClick={handlePlayPause}
                      className={"overflow-hidden bg-transparent w-12 h-12"}
                    >
                      {isPlaying ? (
                        <img
                          src={Pause}
                          alt="Pause"
                          className=" lg:w-14 lg:h-14  p-0"
                        />
                      ) : (
                        <img
                          src={Play}
                          alt="Play"
                          className=" lg:w-14 lg:h-14 p-0"
                        />
                      )}
                    </TransparentBtn>

                    <TransparentBtn
                      onClick={handleNextSong}
                      className={"bg-transparent opacity-50 hover:opacity-80"}
                    >
                      <img
                        src={Next}
                        alt="Next"
                        className="lg:w-full lg:h-full p-3"
                      />
                    </TransparentBtn>
                  </div>
                  <TransparentBtn className={"p-3"} onClick={handleMute}>
                    {isMuted ? (
                      <img
                        src={Mute}
                        alt="Mute"
                        className=" lg:w-full lg:h-full"
                      />
                    ) : (
                      <img
                        src={Speaker}
                        alt="Speaker"
                        className="lg:w-full lg:h-full"
                      />
                    )}
                  </TransparentBtn>
                </div>
              </div>
            </>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
