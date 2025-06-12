"use client";

import { projects } from "./projectsData";
import ProjectItem from "./ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

export default function ProjectsCarousel() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="relative"
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={nextRef}
        className="custom-next absolute right-4 z-10 text-primary bg-base-100/80 hover:bg-base-100 border border-base-content/10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all"
      >
        →
      </button>
      <button
        ref={prevRef}
        className="custom-prev absolute left-4 z-10 text-primary bg-base-100/80 hover:bg-base-100 border border-base-content/10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all"
      >
        ←
      </button>
    </div>
  );
}
