import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursor({
        x: e.pageX,
        y: e.pageY,
      });
    });
  }, [cursor]);
  return (
    <motion.div
      animate={{
        x: cursor.x - 20,
        y: cursor.y - 20,
      }}
      transition={{
        type: "spring",
        damping: 100,
        stiffness: 700,
      }}
      className="w-10 aspect-square absolute border-black bg-transparent border-2 rounded-full pointer-events-none z-[99999] mix-blend-hard-light "
    ></motion.div>
  );
};

export default Cursor;
