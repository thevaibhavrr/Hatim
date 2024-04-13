import { motion } from "framer-motion";

const Transtion = (Ogcomponent) => {
  return () => (
    <>
      <Ogcomponent />
      <motion.div
        // className="slide-in"
        className="slide-out"

        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        // className="slide-out"
        className="slide-in"

        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transtion;