import React from "react";
import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles";

const icons = [
  "https://img.icons8.com/color/48/000000/react-native.png", // React
  "https://img.icons8.com/color/48/000000/nodejs.png", // Node.js
  "https://img.icons8.com/color/48/000000/python.png", // Python
  "https://img.icons8.com/color/48/000000/docker.png", // Docker
  "https://img.icons8.com/color/48/000000/tensorflow.png", // TensorFlow
  "https://img.icons8.com/color/48/000000/javascript.png", // JavaScript
  "https://img.icons8.com/color/48/000000/html-5.png", // HTML5
  "https://img.icons8.com/color/48/000000/css3.png", // CSS3
  "https://img.icons8.com/color/48/000000/git.png", // Git
  "https://img.icons8.com/color/48/000000/github.png", // GitHub
  "https://img.icons8.com/color/48/000000/mysql.png", // MySQL
  "https://img.icons8.com/color/48/000000/mongodb.png", // MongoDB
  "https://img.icons8.com/color/48/000000/graphql.png", // GraphQL
  "https://img.icons8.com/color/48/000000/typescript.png", // TypeScript
  "https://img.icons8.com/color/48/000000/redux.png", // Redux
  "https://img.icons8.com/color/48/000000/kubernetes.png", // Kubernetes
  "https://img.icons8.com/color/48/000000/aws.png", // AWS
  "https://img.icons8.com/color/48/000000/azure.png", // Azure
  "https://img.icons8.com/color/48/000000/linux.png", // Linux
  "https://img.icons8.com/color/48/000000/ansible.png", // Ansible
  "https://img.icons8.com/color/48/000000/apache-spark.png", // Apache Spark
  "https://img.icons8.com/color/48/000000/flask.png", // Flask
  "https://img.icons8.com/color/48/000000/redis.png", // Redis
  // Add more icon URLs here
];

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await tsParticles.load(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {/* Color Particles */}
      <Particles
        id="tsparticles-colors"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#ffffff", // Background color
            },
          },
          fpsLimit: 30, // Lower frame rate for a more subtle effect
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 10, // Fewer particles on click
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: [
                "#a8edea",
                "#fcb045",
                "#6a82fb",
                "#f5f7fa",
                "#f8b500",
                "#ffe76e",
                "#ff5e5e",
                "#97ff5e",
                "#e88efa",
              ], // Subtle pastel colors
            },
            links: {
              color: "#dddddd",
              distance: 100,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.7, // Slower particle movement for a subtle effect
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // Balanced number of particles
            },
            opacity: {
              value: { min: 0.3, max: 0.6 }, // Subtle transparency
            },
            shape: {
              type: "circle", // Circle shape for color particles
            },
            size: {
              value: { min: 2, max: 4 }, // Moderate size for particles
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Icon Particles */}
      <Particles
        id="tsparticles-icons"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#ffffff", // Background color
            },
          },
          fpsLimit: 20, // Lower frame rate for a more subtle effect
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5, // Fewer particles on click
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Invisible color for icons
            },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: false,
              opacity: 0,
              width: 0,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5, // Faster movement for icons
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 5, // Number of icons
            },
            opacity: {
              value: 1, // Full opacity for icons
            },
            shape: {
              type: "image", // Use images for icons
              image: icons.map((src) => ({
                src,
                width: 48,
                height: 48,
              })),
            },
            size: {
              value: { min: 10, max: 30 }, // Size for icons
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default ParticleBackground;
