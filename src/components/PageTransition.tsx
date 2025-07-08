import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n-context";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const { direction } = useI18n();

  const slideDirection = direction === "rtl" ? 1 : -1;

  const pageVariants = {
    initial: {
      opacity: 0,
      x: slideDirection * 50,
      scale: 0.98
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: slideDirection * -50,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.4
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
