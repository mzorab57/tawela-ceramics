import React from "react";
import { useTranslation } from "react-i18next";
import VideoText from "../videoText/VideoText";
import VideoCard from "../videoCard/VideoCard";
import AnimatedComponent from "../animations/AnimatedComponent";

// Import videos
import services_vide from "/assets/videos/tv1.mp4";
import services_vide2 from "/assets/videos/tv2.mp4";
import services_vide3 from "/assets/videos/tv3.MP4?url";

const VideoWorks = () => {
  const { t } = useTranslation();

  // Video data array for better organization
  const videos = [
    {
      id: "01",
      title: "Ceramics",
      description: "Beautify your home",
      videoSrc: services_vide,
      poster: "/assets/images/gallery/g(4).JPG",
    },
    {
      id: "02",
      title: "Porcelain",
      description: "Beautify your home",
      videoSrc: services_vide2,
      poster: "/assets/images/gallery/g(15).JPG",
    },
    {
      id: "03",
      title: "Granite",
      description: "Beautify your home",
      videoSrc: services_vide3,
      poster: "/assets/images/gallery/g(16).JPG",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 py-20 lg:py-28">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(https://arkio-next.netlify.app/images/testimonial/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
  {/* Header Section */}
  <header className="relative max-w-[1650px] px-5 mb-5  mx-auto uppercase">
          <AnimatedComponent animationType="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-jost font-medium text-gray-800">
              {t("Our Video Projects")}
            </h2>
          </AnimatedComponent>
        </header>
<div className="size-full bg-slate-100">
<div className="container mx-auto px-4 w-full   max-w-[1650px]">
      

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-0">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/3">
            <AnimatedComponent animationType="fade-right">
              <VideoText />
            </AnimatedComponent>
          </div>

          {/* Right Column - Video Grid */}
          <div className="lg:w-2/3 lg:-translate-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-14">
              {videos.map((video) => (
                <AnimatedComponent
                  key={video.id}
                  animationType="fade-up"
                  className="h-full"
                >
                  <VideoCard
                    number={video.id}
                    title={t(video.title)}
                    description={t(video.description)}
                    videoSrc={video.videoSrc}
                    poster={video.poster}
                  />
                </AnimatedComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
</div>
      
    </section>
  );
};

export default VideoWorks;
