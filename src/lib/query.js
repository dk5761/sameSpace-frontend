import { gql } from "@apollo/client";

const GET_PLAYLISTS = gql`
  query {
    getPlaylists {
      id
      title
    }
  }
`;

const GET_SONGS = gql`
  query GetPlaylist($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      title
      photo
      url
      duration
      artist
    }
    getPlaylists {
      id
      title
    }
  }
`;

const SEARCH_SONGS = gql`
  query GetSongs($playlistId: Int!, $searchQuery: String) {
    getSongs(playlistId: $playlistId, search: $searchQuery) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }
`;

export { GET_PLAYLISTS, GET_SONGS, SEARCH_SONGS };
