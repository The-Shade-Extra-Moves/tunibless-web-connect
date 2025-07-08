import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Download, 
  ExternalLink, 
  Star, 
  Clock, 
  Users, 
  Languages,
  Bookmark,
  Share2,
  Eye,
  MessageCircle,
  Calendar,
  FileText,
  Zap,
  UserPlus,
  Heart,
  Flag
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Service } from "@/lib/services-data";
import { CONFIG, getWhatsAppLink } from "@/lib/config";

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
  showModal?: boolean;
  searchQuery?: string;
  index: number;
  className?: string;
}

export const EnhancedServiceCard = ({ 
  service, 
  variant = 'default', 
  showModal = true,
  searchQuery,
  index,
  className = "" 
}: ServiceCardProps) => {
  const { t, language } = useI18n();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const IconComponent = service.icon;
  const localizedTitle = service.title[language];
  const localizedDescription = service.description[language];
  const localizedShortDescription = service.shortDescription?.[language] || localizedDescription;

  const handleAction = () => {
    if (service.downloadUrl) {
      // Handle download
      const link = document.createElement('a');
      link.href = service.downloadUrl;
      link.download = `${localizedTitle}.${service.type.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (service.externalUrl) {
      // Handle external link
      window.open(service.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (service.whatsappLink) {
      // Handle WhatsApp link
      const whatsappUrl = CONFIG.links.whatsapp[service.whatsappLink as keyof typeof CONFIG.links.whatsapp] || CONFIG.links.whatsapp.main;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getActionText = () => {
    if (service.downloadUrl) return t.services.actions.downloadPdf;
    if (service.externalUrl) return t.services.actions.visitWebsite;
    if (service.whatsappLink) return t.services.actions.joinWhatsapp;
    return t.services.actions.openTool;
  };

  const getActionIcon = () => {
    if (service.downloadUrl) return Download;
    if (service.externalUrl) return ExternalLink;
    if (service.whatsappLink) return MessageCircle;
    return Eye;
  };

  const ActionIcon = getActionIcon();

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    // Here you would typically save to localStorage or send to backend
    const bookmarks = JSON.parse(localStorage.getItem('tunibless-bookmarks') || '[]');
    if (isBookmarked) {
      localStorage.setItem('tunibless-bookmarks', JSON.stringify(bookmarks.filter((id: string) => id !== service.id)));
    } else {
      localStorage.setItem('tunibless-bookmarks', JSON.stringify([...bookmarks, service.id]));
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: localizedTitle,
        text: localizedShortDescription,
        url: window.location.href + '#service-' + service.id
      });
    } else {
      navigator.clipboard.writeText(window.location.href + '#service-' + service.id);
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="h-full"
      >
        <Card className={`p-4 hover:shadow-md transition-all duration-300 group cursor-pointer ${className}`}>
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-medium text-foreground">
                  {highlightText(localizedTitle, searchQuery)}
                </h3>
                {service.popular && (
                  <Badge variant="secondary" className="text-xs">
                    🔥 {t.services.popular}
                  </Badge>
                )}
                {service.new && (
                  <Badge variant="default" className="text-xs bg-green-500">
                    ✨ {t.services.new}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {highlightText(localizedShortDescription, searchQuery)}
              </p>
            </div>
            <Button size="sm" variant="ghost" onClick={handleAction}>
              <ActionIcon className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="h-full"
      >
        <Card className={`p-6 hover:shadow-xl transition-all duration-500 group border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden ${className}`}>
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Zap className="w-3 h-3 mr-1" />
                        {t.services.featured}
                      </Badge>
                    )}
                    {service.popular && (
                      <Badge variant="secondary">
                        🔥 {t.services.popular}
                      </Badge>
                    )}
                    {service.new && (
                      <Badge className="bg-green-500 text-white">
                        ✨ {t.services.new}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" onClick={toggleBookmark}>
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
                </Button>
                <Button size="sm" variant="ghost" onClick={handleShare}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
              {highlightText(localizedTitle, searchQuery)}
            </h3>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {highlightText(localizedDescription, searchQuery)}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                {service.type}
              </span>
              {service.difficulty && (
                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(service.difficulty)}`}>
                  {t.services.difficultyLevels[service.difficulty as keyof typeof t.services.difficultyLevels]}
                </span>
              )}
              {service.duration && (
                <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {service.duration}
                </span>
              )}
              {service.language && service.language.length > 0 && (
                <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-2 py-1 rounded-full flex items-center gap-1">
                  <Languages className="w-3 h-3" />
                  {service.language.length} Lang
                </span>
              )}
            </div>

            {service.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(service.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {service.rating} ({service.reviews} {t.services.reviews})
                </span>
              </div>
            )}

            <div className="flex gap-2">
              <Button 
                className="flex-1 group-hover:scale-105 transition-transform shadow-md" 
                onClick={handleAction}
              >
                <ActionIcon className="w-4 h-4 mr-2" />
                {getActionText()}
              </Button>
              {showModal && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="shadow-md">
                      <Eye className="w-4 h-4 mr-2" />
                      {t.services.viewMore}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                        {localizedTitle}
                      </DialogTitle>
                    </DialogHeader>
                    <ServiceModal service={service} />
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-muted hover:border-primary/20 ${className}`}>
        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <Badge variant="outline" className="text-xs w-fit">
                  {service.type}
                </Badge>
                <div className="flex gap-1 flex-wrap">
                  {service.popular && (
                    <Badge variant="secondary" className="text-xs w-fit">
                      🔥 {t.services.popular}
                    </Badge>
                  )}
                  {service.new && (
                    <Badge className="text-xs w-fit bg-green-500">
                      ✨ {t.services.new}
                    </Badge>
                  )}
                  {service.featured && (
                    <Badge className="text-xs w-fit bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      <Zap className="w-3 h-3 mr-1" />
                      {t.services.featured}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button size="sm" variant="ghost" onClick={toggleBookmark}>
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
              </Button>
              <Button size="sm" variant="ghost" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
            {highlightText(localizedTitle, searchQuery)}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="flex-1 mb-4 leading-relaxed">
            {highlightText(localizedDescription, searchQuery)}
          </CardDescription>

          {/* Metadata */}
          <div className="flex flex-wrap gap-2 mb-3 text-xs">
            {service.difficulty && (
              <span className={`px-2 py-1 rounded-full ${getDifficultyColor(service.difficulty)}`}>
                {t.services.difficultyLevels[service.difficulty as keyof typeof t.services.difficultyLevels]}
              </span>
            )}
            {service.duration && (
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {service.duration}
              </span>
            )}
            {service.rating && (
              <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                {service.rating}
              </span>
            )}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {service.tags.slice(0, 3).map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {service.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{service.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-2">
            <Button 
              onClick={handleAction}
              className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              variant="outline"
            >
              <ActionIcon className="h-4 w-4" />
              {getActionText()}
            </Button>

            {showModal && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="ghost" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    {t.services.viewMore}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                      {localizedTitle}
                    </DialogTitle>
                  </DialogHeader>
                  <ServiceModal service={service} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Service Modal Component
const ServiceModal = ({ service }: { service: Service }) => {
  const { t, language } = useI18n();
  
  const localizedTitle = service.title[language];
  const localizedDescription = service.description[language];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">{t.services.modal.description}</h4>
        <p className="text-muted-foreground leading-relaxed">{localizedDescription}</p>
      </div>

      {service.requirements && service.requirements.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">{t.services.modal.requirements}</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {service.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {service.language && service.language.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">{t.services.modal.languages}</h4>
          <div className="flex flex-wrap gap-2">
            {service.language.map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs">
                <Languages className="w-3 h-3 mr-1" />
                {lang.toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm">
        {service.duration && (
          <div>
            <span className="font-medium">{t.services.duration}:</span>
            <div className="flex items-center gap-1 mt-1">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{service.duration}</span>
            </div>
          </div>
        )}
        
        {service.fileSize && (
          <div>
            <span className="font-medium">{t.services.fileSize}:</span>
            <div className="flex items-center gap-1 mt-1">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{service.fileSize}</span>
            </div>
          </div>
        )}

        {service.lastUpdated && (
          <div>
            <span className="font-medium">{t.services.lastUpdated}:</span>
            <div className="flex items-center gap-1 mt-1">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {new Date(service.lastUpdated).toLocaleDateString(language)}
              </span>
            </div>
          </div>
        )}

        {service.rating && (
          <div>
            <span className="font-medium">{t.services.rating}:</span>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(service.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-xs">
                ({service.reviews} {t.services.reviews})
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Tags */}
      <div>
        <h4 className="font-semibold mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedServiceCard;
