"use client";

import { projects } from "./projectsData";
import ProjectItem from "./ProjectItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function ProjectsCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
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
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
