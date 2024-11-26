import React from "react";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Tapesh Sharma",
      role: "Frontend And Backend Developer",
      description:
        "Tapesh is the all-rounder of our team. He contributed to both backend and frontend development, created the project schema, connected the two ends, and resolved bugs during the integration process. His holistic approach ensured the platform's smooth functionality.",
      github: "https://github.com/tapesh1134",
      image: "path/to/tapesh-profile-pic.jpg", // Replace with actual image path or URL
    },
    {
      id: 2,
      name: "Ankit Rai",
      role: "Backend Developer",
      description:
        "Ankit is the architect of our backend. He built a robust and scalable backend system to handle the platform's core functionalities seamlessly.",
      github: "https://github.com/anuj23awasthi",
      image: "path/to/ankit-profile-pic.jpg", // Replace with actual image path or URL
    },
    {
      id: 3,
      name: "Abhishek",
      role: "Frontend Developer",
      description:
        "Abhishek is our frontend expert. He focused on designing an intuitive and responsive user interface while also tackling any bugs that arose during development to ensure a smooth user experience.",
      github: "https://github.com/anuj23awasthi",
      image: "path/to/abhishek-profile-pic.jpg", // Replace with actual image path or URL
    },
    {
      id: 4,
      name: "Aditya",
      role: "Frontend Developer",
      description:
        "Aditya contributed to the frontend development by working closely with Abhishek, providing valuable assistance in crafting a polished and engaging interface for users.",
      github: "https://github.com/anuj23awasthi",
      image: "path/to/aditya-profile-pic.jpg", // Replace with actual image path or URL
    },
    {
      id: 5,
      name: "Anuj Awasthi",
      role: "Frontend Developer",
      description:
        "Anuj is the go-to person for collaboration and support. He assisted Aditya and Abhishek, ensuring smooth progress on the frontend development and debugging processes.",
      github: "https://github.com/anuj23awasthi",
      image: "path/to/anuj-profile-pic.jpg", // Replace with actual image path or URL
    },
  ];

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
      <div>
        <h1 className="text-[#42b9be] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
          About Us
        </h1>
        <p className="text-xl text-stone-600">
          Welcome to our Auction Platform! We are a passionate team of five
          dynamic individuals who have come together to bring this project to
          life. Our goal is to create a seamless and user-friendly platform that
          simplifies the auction process for buyers and sellers alike.
        </p>
      </div>
      <div>
        <p className="text-xl text-stone-600">
          <p>
            <strong>Project GitHub:</strong> <a className="text-[#42b9be]" href="https://github.com/tapesh1134/Onile-Auction-System">github.com/tapesh1134/Onile-Auction-System</a>
          </p>
        </p>
      </div>
      {teamMembers.map((member) => (
        <div key={member.id} className="flex items-center gap-4 mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-[#11111] font-bold mb-1">{member.name}</h2>
            <p className="text-[#11111] font-bold mb-1">{member.role}</p>
            <p>{member.description}</p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a className="text-[#42b9be]" href={member.github}>
                {member.github}
              </a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
