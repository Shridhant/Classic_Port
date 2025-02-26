import { motion } from "framer-motion";

export default function About() {
  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for individual items
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item} className="text-2xl font-bold mb-4">
          About Me
        </motion.h1>
        <motion.p
          variants={item}
          className="text-gray-600 dark:text-gray-400 mb-4"
        >
          I'm Kevipulie David Iralu, a Python Developer based in Melbourne,
          Australia, with a strong foundation in GIS and a passion for
          leveraging technology to solve real-world problems. With experience in
          the spatial, EdTech, and telecommunications industries, I specialize
          in building efficient web applications and solutions using Python,
          JavaScript, React.js, and Docker.
        </motion.p>
        <motion.p
          variants={item}
          className="text-gray-600 dark:text-gray-400 mb-4"
        >
          I hold a Graduate Diploma in GIS from Curtin University and a Master's
          in Geology from Savitribai Phule Pune University. My academic
          background has provided me with a solid understanding of spatial
          analysis, remote sensing, and data management. Throughout my career, I
          have worked with various companies, including Infosys, where I
          currently develop innovative solutions, and NagaEd, where I manage the
          technical aspects of our Learning Management System.
        </motion.p>
        <motion.p
          variants={item}
          className="text-gray-600 dark:text-gray-400 mb-4"
        >
          Outside of work, I enjoy exploring new technologies, participating in
          open-source projects, and sharing my insights on tech. I believe in
          the importance of lifelong learning and am always looking for ways to
          push the boundaries of what's possible in web development and GIS
          applications.
        </motion.p>
        <motion.p variants={item} className="text-gray-600 dark:text-gray-400">
          Feel free to reach out if you're interested in collaborating on a
          project or just want to chat about technology and innovation!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
