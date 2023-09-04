import React from "react";
import SearchBar from "../components/searchbar";
import ListItem from "../components/listItem";
import { useQuery } from "@apollo/client";
import { GET_PLAYLISTS, GET_SONGS, SEARCH_SONGS } from "../lib/query";
import { useNavigate, useParams, useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchColor, setSelectedSong, setSongList } from "../redux/songSlice";
import ListItemSkeleton from "../components/listItemSkeleton";
import { useState } from "react";

const Home = ({ headerData, headerLoading }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState(null);

  const { data, error, loading } = useQuery(SEARCH_SONGS, {
    variables: { playlistId: parseInt(id), searchQuery: search },
  });

  // if we redirect without any id.
  // we could make this dynamic by loading the playlist in global state
  // then redirecting to 1st id of the playlist state.
  useEffect(() => {
    if (!id) {
      navigate("/1", { state: "For You" }); //hardcoding this.
    }
  }, [id]);

  useEffect(() => {
    if (!loading) {
      dispatch(setSongList(data.getSongs));
    }
  }, [loading]);

  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.song.selectedSong);

  const handleSongClick = (song) => {
    dispatch(setSelectedSong(song));
    dispatch(fetchColor(song.photo));
  };

  const handleOnSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="w-full h-full mt-[50px] sm:mt-0 flex justify-center  ">
      <div className="w-full max-w-[432px] min-w-[180px] h-full flex flex-col">
        {headerLoading && !headerData.getPlaylists.length >= 1 ? (
          <div className="sm:h-[60px]" />
        ) : (
          <div className=" font-bold text-3xl flex px-4 text-white pb-0 sm:pt-6">
            {id ? (
              <h1>
                {headerData?.getPlaylists.find((item) => item.id == id).title}
              </h1>
            ) : (
              <div />
            )}
          </div>
        )}
        <SearchBar
          loading={loading}
          onSearch={handleOnSearch}
          placeholder={"Search Song, Artist"}
        />
        {/* used tailwind utility class to hide the scroll bar */}
        <div className="overflow-y-scroll h-full scrollbar-hide mb-[210px] sm:mb-[160px] xl:mb-0">
          {loading ? (
            // If the loading flag is true, display a loading skeleton.
            Array.from(new Array(3)).map((_, index) => (
              <ListItemSkeleton key={index} />
            ))
          ) : data.getSongs.length === 0 ? (
            // If data.getSongs is empty, display a "No match found" message.
            <p className="mx-auto font-bold text-white w-full text-center">
              No match found
            </p>
          ) : (
            // If data.getSongs is not empty, map through the songs and render each ListItem or ListItemSkeleton.
            data.getSongs.map((song) => {
              if (song) {
                return (
                  <ListItem
                    key={song._id}
                    onClick={handleSongClick}
                    selectedId={selectedSong._id}
                    details={song}
                  />
                );
              } else {
                return <ListItemSkeleton key={Math.random()} />;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
