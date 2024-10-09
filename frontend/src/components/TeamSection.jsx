import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper import
import "swiper/css"; // Swiper CSS import

export default function TeamSection() {
  const Teams = [
    {
      id: 1,
      pfpImg: "/Team/pfp speakerone.jpeg",
      name: "Utkarsh Upadhyay",
      post: "Founder & lead",
      links: {
        linkedIn: "https://www.linkedin.com/in/utk2103/",
        twitter: "https://x.com/utk2103",
        instagram: "https://instagram.com/utkarsh_k21",
      },
    },
    {
      id: 2,
      pfpImg: "/Team/Saurabh.png",
      name: "Saurabh Upadhyay",
      post: "Founder & outreach",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      pfpImg: "/Team/Abhishek Sharma.jpg",
      name: "Abhishek Sharma",
      post: "Web lead",
      links: {
        linkedIn: "https://www.linkedin.com/in/abhishek-sharma-655182215/",
        twitter: "https://x.com/As0755213Sharma",
        instagram: "https://www.instagram.com/abhi.navsharma_/",
      },
    },
    {
      id: 4,
      pfpImg: "/Team/Aakash Mahajan.png",
      name: "Aakash Mahajan",
      post: "Web dev contributer",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      pfpImg: "/Team/RAJVEER SINGH.jpg",
      name: "Rajveer Singh",
      post: "Community advocate",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 6,
      pfpImg: "/Team/Ashika Gupta.png",
      name: "Ashika Gupta",
      post: "UI/UX team",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 7,
      pfpImg: "/Team/Kusum Kharayat.jpg",
      name: "Kusum Kharayat",
      post: "Community advocate",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 8,
      pfpImg: "/Team/YASHDEEP SINGH.jpg",
      name: "Yashdeep Singh",
      post: "Social media",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 9,
      pfpImg: "/Team/vanshika goel.jpeg",
      name: "Vanshika Goel",
      post: "PR and social media",
      links: {
        linkedIn: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="flex flex-col w-full my-12 px-4 md:px-12 lg:px-24">
      {" "}
      {/* Changed background to dark */}
      {/* <div className="flex flex-col"> */}
      <div className="flex flex-col mt-8">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-white text-4xl font-bold mb-8">
                {" "}
                {/* Text color to white */}
                Meet the Team
              </h1>
              <p className="text-gray-300 text-lg font-light">
                {" "}
                {/* Text color to light gray */}
                With over 100 years of combined experience, we've got a
                well-seasoned team at the helm.
              </p>
            </div>
          </div>

          {/* Swiper Section */}
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // Default 1 slide visible
            breakpoints={{
              768: { slidesPerView: 2 }, // 2 slides for medium screens
              1024: { slidesPerView: 3 }, // 3 slides for medium screens
              1280: { slidesPerView: 4 }, // 4 slides for large screens
              // 3 slides on large screens
            }}
            pagination={{ clickable: true }}
          >
            {Teams.map((Team) => {
              return (
                <SwiperSlide key={Team.id}>
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover" // Fixed image size
                        src={Team.pfpImg}
                        alt="Team Member"
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-white text-xl font-bold mb-1">
                        {" "}
                        {/* Text color to white */}
                        {Team.name}
                      </h1>
                      <div className="text-gray-400 font-light mb-2">
                        {" "}
                        {/* Text color to light gray */}
                        {Team.post}
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={Team.links.linkedIn}
                          className="flex rounded-full justify-center items-center hover:bg-indigo-700 h-12 w-12"
                        >
                          <i className="mdi mdi-linkedin text-indigo-400 mx-auto"></i>
                        </a>
                        <a
                          href={Team.links.twitter}
                          className="flex rounded-full justify-center items-center hover:bg-blue-700 h-12 w-12"
                        >
                          <i className="mdi mdi-twitter text-blue-300 mx-auto"></i>
                        </a>
                        <a
                          href={Team.links.instagram}
                          className="flex rounded-full justify-center items-center hover:bg-orange-700 h-12 w-12"
                        >
                          <i className="mdi mdi-instagram text-orange-400 mx-auto"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
