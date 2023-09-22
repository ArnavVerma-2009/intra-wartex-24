import { motion } from "framer-motion";

const animations = {
  initial: { scaleY: 0 },
  animate: { scaleY: 0 },
  exit: { scaleY: 1 },
};
const animationsOut = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0},
  exit: { scaleY: 0 },
};

const Transition = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className="slide-out flex justify-center items-center"
        variants={animationsOut}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.5, ease: [0.9, 0.64, 0.36, 1], delay: 1.2,}}
      >
        {/* <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl  akira p-16 text-center">WE ARE THE TECHNOCRATS</h1> */}
      </motion.div>
    </>
  );
};
// const animations = {
//   initial: { opacity: 0, y: -100, },
//   animate: { opacity: 1, y: 0,  },
//   exit: { opacity: 0, y: 100, },
// };

// const Transition = ({ children }) => {
//   return (
//     <motion.div
//       variants={animations}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ duration: 0.5, ease : [0.22, 1, 0.36, 1] }}
//     >
//       {children}
//     </motion.div>
//   );
// };

export default Transition;
