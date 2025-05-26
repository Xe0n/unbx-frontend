import { components } from "@/shared/api/types/rest/schema";

type VideoListResponse = components["schemas"]["VideoListResponse"];
type VideoDetailResponse = components["schemas"]["VideoDetails"];

const API_BASE = process.env.API_BASE;

export async function fetchVideos(): Promise<VideoListResponse["data"]> {
  const res = await fetch(`${API_BASE}/api/v1/videos`);

  if (!res.ok) {
    throw new Error(`Failed to fetch videos: ${res.status}`);
  }

  const data: VideoListResponse = await res.json();
  return data.data;
}

export async function fetchVideoById(id: string): Promise<VideoDetailResponse> {
  const res = await fetch(`${API_BASE}/api/v1/videos/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch video ${id}: ${res.status}`);
  }

  const data: VideoDetailResponse = await res.json();
  return data;
}
