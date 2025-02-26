import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import blogData from "../data/blogs.json";
console.log(blogData);
export default function Blogs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="space-y-6">
        {blogData.map((blog) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </div>
    </motion.div>
  );
}

function BlogItem({
  title,
  excerpt,
  date,
}: {
  title: string;
  excerpt: string;
  date: string;
}) {
  return (
    // <Link to={`/blog/${id}`} className="block group">
    <>
      <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{date}</p>
      {/* // </Link> */}
    </>
  );
}
