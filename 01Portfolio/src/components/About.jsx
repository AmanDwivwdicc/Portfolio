import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";


function About() {
  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-16 bg-black text-white">

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-xl text-gray-400 mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            AMAN DWIVEDI
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            B.Tech Information Technology Student
          </p>

          <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "Machine Learning Enthusiast",
    2000,
    "OpenCV & Python Developer",
    2000,
    "DSA Practitioner",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-2xl text-cyan-400 font-semibold"
/>

          <a
  href="/resume.pdf"
  download
  className="px-8 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-400 transition"
>
  Download Resume
</a>

          <div className="flex gap-6 mt-8 text-3xl">

  <a
    href="https://github.com/AmanDwivwdicc"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/aman-kumar-dwivedi-765079343/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 transition"
  >
    <FaLinkedin />
  </a>

  <a
  href="https://leetcode.com/u/YOUR_USERNAME/"
  target="_blank"
  rel="noreferrer"
  className="hover:text-cyan-400 transition"
>
  <SiLeetcode />
</a>

</div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.img
            src="/profile.png"
            alt="Aman Dwivedi"
            className="w-72 md:w-96 rounded-full border-4 border-cyan-500 shadow-2xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

        </motion.div>
        <motion.a
  href="#education"
  className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 cursor-pointer"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  ↓ Scroll Down
</motion.a>

      </div>
      <div className="absolute bottom-0 left-0 w-full">
  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
</div>
    </section>
  );
}

export default About;