import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { getImageColor } from "../lib/utils";

const getIdx = (arr, id) => {
  let foundIndex = 0;

  arr.map((obj, index) => {
    if (obj._id === id) {
      foundIndex = index;
    }
  });

  return foundIndex;
};

export const fetchColor = createAsyncThunk(
  "song/fetchColor",
  async (url, _) => {
    const res = await getImageColor(url);
    return res;
  }
);

const songSlice = createSlice({
  name: "song",
  initialState: {
    selectedSong: {},
    songList: [],
    color: { r: 0, b: 0, g: 0 },
  },
  reducers: {
    setSongList: (state, action) => {
      state.songList = action.payload;
    },
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    prevSong: (state) => {
      const cState = current(state);

      const idx = getIdx(cState.songList, cState.selectedSong._id);

      state.selectedSong = state.songList[idx > 0 ? idx - 1 : idx];
    },

    nextSong: (state) => {
      const cState = current(state);
      const idx = getIdx(cState.songList, cState.selectedSong._id);

      state.selectedSong = state.songList[idx + 1];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchColor.fulfilled, (state, action) => {
      // Add user to the state array
      state.color = action.payload;
    });
  },
});

export const { setSelectedSong, prevSong, nextSong, setSongList } =
  songSlice.actions;
export default songSlice.reducer;
