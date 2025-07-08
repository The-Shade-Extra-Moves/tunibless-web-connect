import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const { t, direction } = useI18n();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    // Simulate loading progress
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Check if all assets are loaded
    const checkAssetsLoaded = () => {
      if (document.readyState === "complete") {
        // Wait a bit more for a smooth experience
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out animation
          }, 300);
        }, 800);
      } else {
        // Fallback timeout after 2 seconds
        timeoutId = setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 300);
        }, 2000);
      }
    };

    // Listen for window load event
    if (document.readyState === "loading") {
      window.addEventListener("load", checkAssetsLoaded);
    } else {
      checkAssetsLoaded();
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeoutId);
      window.removeEventListener("load", checkAssetsLoaded);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-teal-600 via-primary to-red-600
      dark:from-teal-800 dark:via-primary-dark dark:to-red-800
      transition-opacity duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce-slow delay-1000"></div>
      </div>

      {/* Main content */}
      <div className={`
        relative z-10 text-center px-8 max-w-2xl mx-auto
        ${direction === 'rtl' ? 'text-right' : 'text-center'}
      `}>
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
              <span className="text-2xl font-bold text-primary">TB</span>
            </div>
            <div className="absolute inset-0 w-24 h-24 border-4 border-white/30 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          TuniBless
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-6 animate-fade-in-up delay-300">
          {t.loadingScreen.tagline}
        </p>

        {/* Slogan */}
        <p className={`
          text-lg md:text-xl text-white/80 mb-8 font-medium animate-fade-in-up delay-500
          ${direction === 'rtl' ? 'text-right' : 'text-center'}
        `}>
          "{t.loadingScreen.slogan}"
        </p>

        {/* Progress bar */}
        <div className="mb-6 animate-fade-in-up delay-700">
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-300 ease-out animate-shimmer"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-white/70 text-sm mt-3 animate-fade-in-up delay-1000">
            {t.loadingScreen.loading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
