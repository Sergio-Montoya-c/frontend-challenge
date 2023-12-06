"use client";
import MediaBanner from "./components/MediaBanner";
import { useData, MediaBanner as MediaBannerType } from "./useData";

export default function Home() {
  const { data } = useData();
  const mediaBanner = data?.mediaBanner as MediaBannerType;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-5 md:p-24">
      <MediaBanner {...mediaBanner} orientation="left" className="mb-10"/>
      <MediaBanner {...mediaBanner} style={{ border: "5px solid #cdcdcd"}} className="mb-10"/>
      <MediaBanner {...mediaBanner} orientation="left"/>
    </main>
  );
}
