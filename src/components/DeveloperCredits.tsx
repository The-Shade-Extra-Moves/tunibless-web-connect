import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Mail, 
  MessageCircle, 
  ExternalLink,
  Code2
} from "lucide-react";

interface DeveloperCreditsProps {
  variant?: 'minimal' | 'compact' | 'inline';
  className?: string;
}

const DeveloperCredits: React.FC<DeveloperCreditsProps> = ({ 
  variant = 'compact', 
  className = '' 
}) => {
  const contacts = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:nassim.bennsib@hotmail.com",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/21622601631",
      color: "text-green-600 hover:text-green-700"
    },
    {
      name: "GitHub",
      icon: ExternalLink,
      href: "https://github.com/shade-vybes",
      color: "text-gray-700 hover:text-gray-800 dark:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: ExternalLink,
      href: "https://linkedin.com/in/shade-vybes",
      color: "text-blue-700 hover:text-blue-800"
    }
  ];

  if (variant === 'minimal') {
    return (
      <div className={`text-center py-3 border-t border-border/50 ${className}`}>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Code2 className="h-3 w-3" />
          <span>Built with</span>
          <Heart className="h-3 w-3 text-red-500 animate-pulse" />
          <span>by</span>
          <button
            onClick={() => window.open('https://github.com/shade-vybes', '_blank')}
            className="font-medium text-primary hover:text-primary/80 transition-colors"
          >
            ShadeVybes
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border border-border/30 text-xs ${className}`}
      >
        <Code2 className="h-3 w-3 text-primary" />
        <span className="text-muted-foreground">by</span>
        <span className="font-semibold text-primary">Nassim Ben Nsib</span>
        <span className="text-muted-foreground">|</span>
        <span className="font-medium text-german-gold">ShadeVybes</span>
      </motion.div>
    );
  }

  // Default: compact variant
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30 border border-border/30 rounded-lg p-4 ${className}`}
    >
      <div className="text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Code2 className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Developer</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-german-gold rounded-full"></div>
        </div>

        {/* Developer Info */}
        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            Crafted by{" "}
            <span className="font-semibold text-primary">Nassim Ben Nsib</span>
            {" "}aka{" "}
            <span className="font-medium text-german-gold">ShadeVybes</span>
          </p>
          <p className="text-xs text-muted-foreground/80 mt-1">
            Software Engineer • AI Developer • DevOps Enthusiast
          </p>
        </div>

        {/* Contact Icons */}
        <div className="flex items-center justify-center gap-2">
          {contacts.map((contact) => (
            <Button
              key={contact.name}
              variant="ghost"
              size="sm"
              onClick={() => window.open(contact.href, '_blank')}
              className={`p-1.5 h-auto ${contact.color} hover:scale-110 transition-all duration-200`}
              title={`Contact via ${contact.name}`}
            >
              <contact.icon className="h-3 w-3" />
              <span className="sr-only">{contact.name}</span>
            </Button>
          ))}
        </div>

        {/* Love Message */}
        <div className="flex items-center justify-center gap-1 mt-3 text-xs text-muted-foreground/70">
          <span>Made with</span>
          <Heart className="h-3 w-3 text-red-500 animate-pulse" />
          <span>for the community</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperCredits;
