import React, { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n-context';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { t, isRTL } = useI18n();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('tunibless-visited');
    
    if (hasVisited) {
      // Skip loading screen for subsequent page loads
      onComplete();
      setIsVisible(false);
      return;
    }

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Mark as visited and complete loading
          setTimeout(() => {
            sessionStorage.setItem('tunibless-visited', 'true');
            setIsVisible(false);
            onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 20 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center 
        bg-gradient-to-br from-primary via-german-gold to-tunisian-red
        transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center text-white z-10 px-6 max-w-lg">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl">
            <span className="text-3xl font-bold animate-pulse">TB</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          TuniBless e.V.
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-12 text-white/90">
          {t.loadingScreen.tagline}
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-white/70 text-sm mt-3">
            {t.loadingScreen.loading} {Math.round(progress)}%
          </p>
        </div>

        {/* Connection Indicator */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" title="Tunisia" />
          <div className="w-8 h-0.5 bg-white/50" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" title="Germany" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
