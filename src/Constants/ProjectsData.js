import environment from "../assets/environment.jpg";
import filesharing from "../assets/filesharing.png";
import resumeBuilder from "../assets/resume-builder.jpg";
import lessonPlanner from "../assets/lesson-plan.jpeg";
export const ProjectsData = [
  {
    id: 11,
    title: "Blockopoly",
    img:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21vbm9wb2x5LXJ1bGVzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6IjEyMDAifX19" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/Hack-SRM-reloaded",
    projectDesc:
      "Blockopoly is a blockchain-powered version of the classic Monopoly game. It leverages Web3 technologies such as ERC20 tokens, NFTs, and Ethereum smart contracts to create a decentralized and transparent gaming experience.",
    techStack: ["TypeScript", "Solidity", "Web Sockets"],
    demoUrl: "",
  },
  {
    id: 12,
    title: "ATS Forge",
    img:
      resumeBuilder ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/resume-builder",
    projectDesc:
      "A modern, dynamic Resume Builder that allows users to create, preview, and download beautifully formatted, ATS-friendly resumes in PDF format — all within the browser.",
    techStack: ["Next JS", "Tailwind CSS"],
    demoUrl: "https://ats-forge.vercel.app/",
  },
  {
    id: 13,
    title: "HyVault",
    img:
      filesharing ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/hyvault",
    projectDesc:
      "HyVault is a secure file sharing web application built using Hybrid Encryption, combining the speed of AES (Advanced Encryption Standard) with the secure key distribution capabilities of RSA (Rivest–Shamir–Adleman).It ensures that files are encrypted end-to-end, such that only the intended recipient with the correct private key can decrypt and access the data — all while maintaining speed, security, and scalability.",
    techStack: ["React JS", "Node-Forge (Crypto Library)", "Tailwind CSS"],
    demoUrl: "https://hyvault.vercel.app/",
  },
  {
    id: 14,
    title: "Course Lesson Planner",
    img:
      lessonPlanner ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/course-gpt",
    projectDesc:
      "Developed a responsive web application that enables educators to automatically generate structured lesson plans based on custom inputs like subject, grade level, and duration. Leveraged Gemini LLM with tailored prompt engineering to produce high-quality educational content, including learning objectives, topic outlines, and activity suggestions. The tool significantly reduces manual effort in lesson planning, offering a fast, intuitive, and intelligent solution for teachers and academic institutions.",
    techStack: ["React JS", "Generative AI", "Tailwind CSS"],
    demoUrl: "https://course-gpt-phi.vercel.app/",
  },
  {
    id: 1,
    title: "SRMAP Mess App",
    img:
      "https://srmap.edu.in/file/2019/12/Logo-2.png" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/amcny/srmap_messapp",
    projectDesc:
      "The SRM Andhra Pradesh Mess App aims to assist students in locating the available food items in the mess for any given day. The new feature, a feedback form, allows students to provide their opinions and suggestions about the food and mess services, enhancing the overall dining experience and enabling continuous improvement based on user input.",
    techStack: ["FlutterFlow", "Firebase"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.mycompany.srmapmess",
  },
  {
    id: 2,
    title: "Environment Monitoring System",
    img:
      environment ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/Environment_Monitoring_System",
    projectDesc:
      "The Environmental Monitoring System is a project designed to track environmental parameters such as air quality, temperature, and humidity, predict pollution trends, and alert users in real-time. By leveraging IoT devices (simulated via frontend inputs), machine learning, and web technologies, this project aims to empower communities to respond proactively to environmental changes.",
    techStack: ["Python", "Node JS", "Firebase", "React", "Scikit-Learn"],
    demoUrl: "",
  },

  {
    id: 3,
    title: "Quiz Application",
    img:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4JZA2rkwK0ANwYuShWI_50VzxJy42kDQkZleKORjf8R56q1cN" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/Quiz-App-Dummy",
    projectDesc:
      'Developed a full-stack quiz application using the MERN stack for my university, featuring secure Google OAuth 2.0 authentication, real-time leaderboards, and dynamic quiz creation and management. Implemented responsive design and animations to enhance user experience across various devices."',
    techStack: ["React JS", "Mongo DB", "Node JS", "Express JS", "Socket IO"],
    demoUrl: "https://quiz-app-dummy.vercel.app/",
  },
  {
    id: 4,
    title: "Job Matching Platform",
    img:
      "https://static.vecteezy.com/system/resources/previews/000/174/133/non_2x/job-search-in-newspaper-vector.jpg" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/Job-Matching",
    projectDesc:
      "An AI-powered job matching platform that connects job seekers with the best-fit job openings by analyzing their skills, experience, and preferences using Gemini LLM. The platform intelligently compares resumes skills with job descriptions to provide accurate matches and personalized recommendations. It helps candidates find relevant roles efficiently, while employers receive curated applications tailored to their needs.",
    techStack: ["React", "Express JS", "Firebase", "Mongo DB", "OCR API"],
    demoUrl: "https://job-matching-18.vercel.app/",
  },
  {
    id: 5,
    title: "Sleep Finder App",
    img:
      "https://www.mattressclarity.com/wp-content/uploads/2019/11/best-sleep-app-sleepcycle.jpg" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/Sleep-Finder",
    projectDesc:
      "Sleep Finder is an application that evaluates user sleep patterns based on diary notes and offers personalized recommendations to enhance sleep quality and overall health, aiming to help users establish healthier sleep habits and improve their well-being.",
    techStack: ["FlutterFlow", "Firebase"],
    demoUrl: "",
  },
  {
    id: 6,
    title: "CPU Scheduler Simulation",
    img:
      "https://play-lh.googleusercontent.com/1BE54SQTCoPojdO9T6Nz0bmWe6xsoWavXZuV_dWxPJkjEUzN-I8cD8g2A2H2_mHKFoZ0" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/CPU-Scheduler-Simulation",
    projectDesc:
      "This simulates a CPU Scheduler that dynamically manages multiple jobs across available CPU cores based on priority and core availability. The scheduler incorporates features such as preemptive scheduling, job queueing, and fallback mechanisms for core allocation. It is designed to provide insights into CPU scheduling concepts, job handling, and efficient resource allocation strategies.",
    techStack: ["Python"],
    demoUrl: "",
  },
  // {
  //   id: 7,
  //   title: "Github User Search",
  //   img:
  //     "https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630" ||
  //     "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
  //   gitUrl: "https://github.com/YuvaSriSai18/GitHub-User-Search",
  //   projectDesc:
  //     "This dynamic website allows users to retrieve and display data from GitHub by entering a GitHub username, fetching information such as repositories, followers, and other profile details associated with the username.",
  //   techStack: ["HTML5", "CSS3", "JavaScript"],
  //   demoUrl: "https://github-user-search-yuva.vercel.app/",
  // },
  // {
  //   id: 8,
  //   title: "Weather App",
  //   img:
  //     "https://play-lh.googleusercontent.com/WHVv_pVDetZqwAsjUAdRfEXe1RFXJ__39sHlIHDsRpNPwAL_9FXVrrnOfV3_cSccJes=w240-h480-rw" ||
  //     "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
  //   gitUrl: "https://github.com/YuvaSriSai18/Weather-App",
  //   projectDesc:
  //     "The Weather App is a straightforward web application that delivers up-to-date weather information for any specified location, allowing users to easily access current conditions, forecasts, and other weather-related data.",
  //   techStack: ["HTML5", "CSS3", "JavaScript"],
  //   demoUrl: "https://yuva-weather-app.vercel.app/",
  // },

  {
    id: 9,
    title: "Round Robin Scheduling",
    img:
      "" ||
      "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
    gitUrl: "https://github.com/YuvaSriSai18/Round-Robin-Scheduling",
    projectDesc:
      "Round Robin Scheduling is an operating system algorithm that manages process execution by assigning each process a fixed time slice or quantum in a cyclic order, ensuring all processes receive equal CPU time and preventing any single process from monopolizing the processor.",
    techStack: ["C Programming"],
    demoUrl: "",
  },
  // {
  //   id: 10,
  //   title: "News Aggregator with Login Register",
  //   img:
  //     "https://www.searchenginejournal.com/wp-content/uploads/2022/03/aggregator-sites-outperform-623daf7d46f42-sej.png" ||
  //     "https://i.pinimg.com/originals/44/f0/0d/44f00d6dc54c73e29bcc362c1bd5cd8a.png",
  //   gitUrl:
  //     "https://github.com/YuvaSriSai18/News-Aggregator-with-Login-Register",
  //   projectDesc:
  //     "This repository hosts a PHP-based system that offers user registration and login functionalities, along with a news aggregator feature. Registered users can log in to browse news articles, which are organized into various categories like sports, politics, technology, and entertainment, providing a personalized news-browsing experience.",
  //   techStack: ["PHP", "HTML", "CSS", "JavaScript", "My SQL"],
  //   demoUrl: "",
  // },
];
