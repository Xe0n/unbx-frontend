import { getEnrichedVideos } from "./service";

export const resolvers = {
  Query: {
    videos: async () => {
      const videos = await getEnrichedVideos();
      return videos.map((video) => ({
        id: video.uuid,
        name: video.name,
        hls: video?.streamingPlaylists?.[0]?.playlistUrl ?? "",
      }));
    },
  },
};
