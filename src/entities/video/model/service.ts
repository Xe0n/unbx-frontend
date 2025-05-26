//Yes, i know about N+1, but that's the only way to get rich data from Peertube
import { fetchVideos, fetchVideoById } from "@/shared/api/peertube";
import { components } from "@/shared/api/types/rest/schema";

export const getEnrichedVideos = async (): Promise<
  (Omit<components["schemas"]["VideoDetails"], "id"> & { id: string })[]
> => {
  const list = await fetchVideos();
  if (!list) return [];

  const enriched = await Promise.all(
    list.map(async (item) => {
      if (!item?.uuid) {
        console.error("No uuid for video", item.id);
        return null;
      }

      const full = await fetchVideoById(item?.uuid);
      return {
        ...full,
        id: item.uuid,
      };
    })
  );

  return enriched.filter(
    (item): item is NonNullable<typeof item> => item !== null
  );
};
