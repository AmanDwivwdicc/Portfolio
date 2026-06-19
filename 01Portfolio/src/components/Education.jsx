import { motion } from "framer-motion";
import certificates from "../data/certificates";

function Education() {
  return (
    <section className="min-h-screen bg-transparent text-white px-8 md:px-16 flex items-center pt-24">

      <motion.div
  className="max-w-4xl mx-auto"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{
    once: true
  }}
>

        <motion.div
  className="mb-16"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <motion.p
    className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)] uppercase tracking-[0.3em] text-sm mb-4"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Academic Journey
  </motion.p>

  <motion.h2
    className="text-5xl md:text-6xl font-bold mb-4"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true}}
  >
    Education &
    <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
      {" "}Certifications
    </span>
  </motion.h2>

  <motion.div
    className="h-1 bg-cyan-400 rounded-full"
    initial={{ width: 0 }}
    whileInView={{ width: "8rem" }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
  />
</motion.div>

        <p className="text-base md:text-xl leading-8 md:leading-10 text-xl leading-10 text-gray-300">
          I scored 85% in Class 12 and am currently pursuing
          B.Tech in Information Technology from
          Jabalpur Engineering College (JEC), Jabalpur.
          <br /><br />

          I have a keen interest in Software Development,
          Full Stack Web Development, Machine Learning,
          OpenCV and Python.

          <br /><br />

          I have solved 100+ DSA problems on LeetCode
          along with many more on various coding platforms.

          <br /><br />

          I love creating things and designing elegant
          animations using Python Turtle and Canvas.
        </p>
       {/* Certifications Section */}

<h3 className="text-4xl font-bold text-cyan-400 text-center mt-24 mb-12">
  Certifications (Adding Only few of them)
</h3>

<div className="flex flex-wrap justify-center gap-8">
  {certificates.map((certificate, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="group"
    >
      <a
        href={certificate.image}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="
            w-72
            rounded-2xl
            shadow-xl
            border border-zinc-700
            group-hover:scale-105
            group-hover:border-cyan-400
            group-hover:shadow-cyan-500/30
            transition duration-300
          "
        />
      </a>
    </motion.div>
  ))}
</div>


      </motion.div>

    </section>
  );
}

export default Education;