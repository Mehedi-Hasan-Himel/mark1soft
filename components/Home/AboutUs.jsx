import React, { useState } from "react";

function AboutUs() {
  const [peopleCount, setPeopleCount] = useState(8);

  const viewMore = () => {
    setPeopleCount(peopleCount + 4);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Md.Osman Gani",
      image: "https://i.postimg.cc/ZYdV4S56/founder.jpg",
      position: "Founder & CEO",
    },
    {
      id: 2,
      name: "Soniya Akter",
      image: "https://i.postimg.cc/vm23H8nt/cofounder.jpg",
      position: "Co-Founder & Software Quality Analyst ",
    },
    {
      id: 3,
      name: "Hritik  Hossain",
      image: "https://i.postimg.cc/7ZmNmPKr/sse.jpg",
      position: "Senior Software Engineer",
    },
    {
      id: 4,
      name: "Sifat Ullah",
      image: "https://i.postimg.cc/ZntPCW5p/seo.jpg",
      position: "Web Developer & SEO Specialist",
    },
    {
      id: 5,
      name: "Abdullah Al Kajim",
      image: "https://i.postimg.cc/X7KLBkFJ/wordpress.jpg",
      position: "Wordpress Developer",
    },
    {
      id: 6,
      name: "Mehedi Hasan Himel",
      image: "https://i.postimg.cc/MHVDDyF9/mern.jpg",
      position: "Full Stack Developer (MERN)",
    },
    {
      id: 7,
      name: "Rajibur Rahman",
      image: "https://i.postimg.cc/x10RvNyP/mern2.png",
      position: "Full Stack Developer (MERN)",
    },
    {
      id: 8,
      name: "Sahinur Islam",
      image: "https://i.postimg.cc/V6bBfqmz/swe.png",
      position: "Software Engineer",
    },

    {
      id: 9,
      name: "Syed Bipul Rahman",
      image: "https://i.postimg.cc/25t7NcpH/android.jpg",
      position: "Android App Developer",
    },
    {
      id: 10,
      name: "Simanto Morul",
      image: "https://i.postimg.cc/Wp8cmg09/backend.png",
      position: "Backend Developer (PHP - Laravel)",
    },
    {
      id: 11,
      name: "Muhaiminul Islam Hasin",
      image: "https://i.postimg.cc/gJN4ZdrN/hasin.jpg",
      position: "App-Developer",
    },
    {
      id: 12,
      name: "Asifur Rahman Asif",
      image: "https://i.postimg.cc/d0TK6HG2/asif.jpg",
      position: "Web-Designer",
    },
    {
      id: 13,
      name: "Bornali Sarkar",
      image: "https://i.postimg.cc/s2PT35zF/bornali.jpg",
      position: "App-Developer",
    },
    {
      id: 14,
      name: "Md Masipul Islam Siam",
      image: "https://i.postimg.cc/6QgwrsSL/siam.jpg",
      position: "Backend -Developer (Python - Django)",
    },
    {
      id: 15,
      name: "MD Farhan Tanvir Fahim",
      image: "https://i.postimg.cc/BQw09LcQ/ui-ux.png",
      position: "Ui-UX Designer",
    },
    {
      id: 16,
      name: "Mominul Houqe",
      image: "https://i.postimg.cc/d33Jr8mp/mominul.png",
      position: "Web Developer (MERN)",
    },
    {
      id: 17,
      name: "Moruzzaman Monir",
      image: "https://i.postimg.cc/tgy0jhfP/monir.jpg",
      position: "Senior Wordpress Developer",
    },
  ];
  return (
    <div id="about">
      <div className="container py-10">
        <h1
          data-aos="fade-right"
          className="text-[40px] text-center md:text-left md:text-[56px] font-semibold"
        >
          Team members
        </h1>
        <p className="text-sm text-center md:text-left">
          Mark One Soft diverse professionals have been driving innovation and
          success since 2011. Discover our story and let our expertise speak for
          itself
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 place-items-center">
          {teamMembers.slice(0, peopleCount).map((member) => (
            <div key={member.id} className="flex flex-col items-center py-2">
              <img
                className="border-dashed  border-[1px] border-primary rounded-full h-60 w-60 p-1"
                src={member.image}
                alt=""
              />
              <h1 className="text-[20px] font-medium">{member.name}</h1>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
        {teamMembers.length !== peopleCount && (
          <div className="flex justify-center mt-5">
            <button
              className="bg-primary text-white p-3 rounded-xl w-full lg:max-w-[516px]"
              onClick={() => viewMore()}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
