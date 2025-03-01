import { useQuery } from "@tanstack/react-query"
import {
  getCurrentUserPlaylists,
  getUserId,
  getCurrentUserInfo,
  logout,
  getPlaylist,
  getTracksFeatures,
} from "./api"

const useCurrentUserPlaylists = () => {
  return useQuery({
    queryKey: ["userPlaylists"],
    queryFn: getCurrentUserPlaylists,
  })
}

const useGetCurrentUserInfo = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUserInfo,
  })
}

const useGetPlaylist = (playlistId) => {
  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: () => getPlaylist(playlistId),
  })
}

const useGetTracksFeatures = (tracks) => {
  return useQuery({
    queryKey: ["tracksFeatures", tracks.map((track) => track.id).join(",")],
    queryFn: () => getTracksFeatures(tracks),
  })
}

export {
  getUserId,
  useGetCurrentUserInfo,
  useCurrentUserPlaylists,
  logout,
  useGetPlaylist,
  useGetTracksFeatures,
}
