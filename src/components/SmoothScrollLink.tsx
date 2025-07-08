import { ReactNode } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

interface SmoothScrollLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

const SmoothScrollLink = ({ 
  to, 
  children, 
  className = "", 
  offset = 80,
  onClick 
}: SmoothScrollLinkProps) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(to, offset);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default SmoothScrollLink;
