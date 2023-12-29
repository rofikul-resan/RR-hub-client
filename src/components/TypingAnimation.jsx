import { motion } from "framer-motion";

const TypingAnimation = () => {
  return (
    <div className="flex justify-center">
      <div className="space-x-2">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-3 h-3 rounded-full bg-gray-400 animate-bounce"
            initial={{ translateY: 0 }}
            animate={{
              translateY: [-5, 5],
              yoyo: true,
              duration: 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TypingAnimation;
