import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Calendar, MapPin, Users, Clock, Star, ExternalLink, Share, 
  Bookmark, Phone, Mail, Navigation, Download, Info, Play,
  CheckCircle, AlertCircle, Globe, Heart, Handshake
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Event } from "@/lib/events-data";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'featured' | 'compact';
  showModal?: boolean;
  className?: string;
  onRegister?: (eventId: string) => void;
  onShare?: (eventId: string) => void;
  onSave?: (eventId: string) => void;
  isSaved?: boolean;
  layout?: 'grid' | 'list';
  showCountdown?: boolean;
}

export const EventCard = ({ 
  event, 
  variant = 'default', 
  showModal = true,
  className = "",
  onRegister,
  onShare,
  onSave,
  isSaved = false,
  layout = 'grid',
  showCountdown = false
}: EventCardProps) => {
  const { t, language } = useI18n();
  const [isBookmarked, setIsBookmarked] = useState(isSaved);
  const [showRegistration, setShowRegistration] = useState(false);
  
  // Safe access to translations with fallbacks
  const getEventTypeLabel = (type: string) => {
    return t?.events?.types?.[type as keyof typeof t.events.types] || type;
  };

  const getEventFormatLabel = (format: string) => {
    return t?.events?.formats?.[format as keyof typeof t.events.formats] || format;
  };

  const getEventStatusLabel = (status: string) => {
    return t?.events?.status?.[status as keyof typeof t.events.status] || status;
  };

  // Event-specific data with safe access
  const localizedTitle = event.title?.[language] || event.title?.de || event.title?.en || 'Untitled Event';
  const localizedDescription = event.description?.[language] || event.description?.de || event.description?.en || '';
  const localizedShortDescription = event.shortDescription?.[language] || event.shortDescription?.de || event.shortDescription?.en || localizedDescription.substring(0, 100) + '...';

  // Event handlers
  const handleRegister = () => {
    if (onRegister) {
      onRegister(event.id);
    } else {
      setShowRegistration(true);
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare(event.id);
    } else {
      // Default share functionality
      if (navigator.share) {
        navigator.share({
          title: localizedTitle,
          text: localizedShortDescription,
          url: window.location.href
        });
      }
    }
  };

  const handleSave = () => {
    setIsBookmarked(!isBookmarked);
    if (onSave) {
      onSave(event.id);
    }
  };

  // Utility functions
  const formatEventDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'ar' ? 'ar-TN' : language === 'fr' ? 'fr-FR' : 'de-DE', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatEventTime = (timeStr: string) => {
    return timeStr;
  };

  const isEventLive = () => {
    const now = new Date();
    const eventStart = new Date(`${event.startDate}T${event.startTime}`);
    const eventEnd = event.endDate && event.endTime 
      ? new Date(`${event.endDate}T${event.endTime}`)
      : new Date(eventStart.getTime() + 2 * 60 * 60 * 1000); // Default 2 hours
    
    return now >= eventStart && now <= eventEnd;
  };

  const getEventTypeIcon = () => {
    switch (event.type) {
      case 'workshop': return Users;
      case 'info-session': return Info;
      case 'networking': return Handshake;
      case 'family-camp': return Heart;
      case 'consultation': return Phone;
      case 'cultural': return Globe;
      default: return Calendar;
    }
  };

  const IconComponent = getEventTypeIcon();
  const isLive = isEventLive();
  const spotsLeft = event.maxParticipants && event.currentParticipants 
    ? event.maxParticipants - event.currentParticipants 
    : event.spotsLeft;

  // Render functions
  const renderDefaultCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={cn(
        "hover:shadow-lg transition-all duration-300 group h-full flex flex-col",
        className
      )}>
        <CardHeader className="pb-3 flex-shrink-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <IconComponent className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">
                {getEventTypeLabel(event.type)}
              </Badge>
              {event.featured && <Star className="w-4 h-4 text-yellow-500" />}
              {isLive && (
                <Badge variant="destructive" className="text-xs animate-pulse">
                  🔴 {t?.events?.status?.live || 'Live'}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSave}
                className="hover:bg-primary/10"
              >
                <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-primary text-primary")} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="hover:bg-primary/10"
              >
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
            {localizedTitle}
          </CardTitle>
          
          <CardDescription className="line-clamp-2">
            {localizedShortDescription}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatEventDate(event.startDate)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{formatEventTime(event.startTime)}</span>
              </div>
            </div>
            
            {event.location && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{event.location.venue}, {event.location.city}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2 flex-wrap">
              {spotsLeft !== undefined && spotsLeft > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {spotsLeft} {t?.events?.spotsLeft || 'spots left'}
                </Badge>
              )}
              <Badge variant="outline" className="text-xs">
                {getEventFormatLabel(event.format)}
              </Badge>
              {event.price !== undefined && event.price > 0 && (
                <Badge variant="outline" className="text-xs">
                  {event.price}€
                </Badge>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            {showModal && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Info className="w-4 h-4 mr-2" />
                    {t?.events?.learnMore || 'Details'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <EventDetailsModal event={event} onRegister={handleRegister} />
                </DialogContent>
              </Dialog>
            )}
            
            <Button 
              onClick={handleRegister}
              disabled={event.status === 'full' || event.status === 'past'}
              className="w-full"
              variant={isLive ? "default" : "outline"}
            >
              {event.status === 'full' 
                ? t?.events?.fullEvent || 'Full'
                : event.status === 'past'
                ? t?.events?.status?.past || 'Past'
                : isLive
                ? t?.events?.joinLive || 'Join Live'
                : t?.events?.register || 'Register'
              }
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderCompactCard = () => (
    <Card className={`hover:shadow-md transition-all duration-300 ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
            <IconComponent className="w-5 h-5 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground truncate">{localizedTitle}</h3>
              {event.featured && <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />}
              {isLive && <Badge variant="destructive" className="text-xs">Live</Badge>}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{formatEventDate(event.startDate)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatEventTime(event.startTime)}</span>
              </div>
            </div>
            
            {event.location && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                <MapPin className="w-3 h-3" />
                <span>{event.location.city}</span>
              </div>
            )}
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {localizedShortDescription}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {spotsLeft !== undefined && spotsLeft > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {spotsLeft} {t?.events?.spotsLeft || 'spots left'}
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs">
                  {getEventTypeLabel(event.type)}
                </Badge>
              </div>
              
              <Button size="sm" onClick={handleRegister} disabled={event.status === 'full'}>
                {event.status === 'full' 
                  ? t?.events?.fullEvent || 'Full'
                  : t?.events?.register || 'Register'
                }
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderFeaturedCard = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className={cn(
        "border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent",
        "hover:shadow-xl transition-all duration-300",
        className
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <Star className="w-3 h-3 mr-1" />
                {t?.events?.featured || 'Featured'}
              </Badge>
              {isLive && (
                <Badge variant="destructive" className="animate-pulse">
                  🔴 {t?.events?.status?.live || 'Live'}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={handleSave}>
                <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-primary text-primary")} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <IconComponent className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 leading-tight">
                {localizedTitle}
              </CardTitle>
              <CardDescription className="text-base">
                {localizedShortDescription}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">{formatEventDate(event.startDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>{formatEventTime(event.startTime)}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{event.location.venue}, {event.location.city}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span>
                  {event.currentParticipants || 0} / {event.maxParticipants || '∞'} {t?.events?.participants || 'participants'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">
                  {getEventTypeLabel(event.type)}
                </Badge>
                <Badge variant="outline">
                  {getEventFormatLabel(event.format)}
                </Badge>
                {event.price !== undefined && event.price > 0 && (
                  <Badge variant="outline">
                    {event.price}€
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            {showModal && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <Info className="w-4 h-4 mr-2" />
                    {t?.events?.learnMore || 'Details'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <EventDetailsModal event={event} onRegister={handleRegister} />
                </DialogContent>
              </Dialog>
            )}
            
            <Button 
              onClick={handleRegister}
              disabled={event.status === 'full' || event.status === 'past'}
              size="lg"
              className="flex-1"
              variant={isLive ? "default" : "outline"}
            >
              {event.status === 'full' 
                ? t?.events?.fullEvent || 'Full'
                : event.status === 'past'
                ? t?.events?.status?.past || 'Past'
                : isLive
                ? t?.events?.joinLive || 'Join Live'
                : t?.events?.register || 'Register'
              }
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderListCard = () => (
    <Card className={cn("hover:shadow-md transition-all duration-200", className)}>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />
              <Badge variant="outline" className="text-xs">
                {getEventTypeLabel(event.type)}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {formatEventDate(event.startDate)}
              </Badge>
              {isLive && (
                <Badge className="text-xs bg-red-500 text-white">
                  {t?.events?.liveNow || 'Live'}
                </Badge>
              )}
            </div>
            
            <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
              {localizedTitle}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {localizedShortDescription}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {event.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location.city}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatEventTime(event.startTime)}</span>
              </div>
              {spotsLeft !== undefined && spotsLeft > 0 && (
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>{spotsLeft} {t?.events?.spotsLeft || 'spots'}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="sm" onClick={handleSave}>
              <Bookmark className={cn("w-4 h-4", isBookmarked && "fill-primary text-primary")} />
            </Button>
            <Button 
              onClick={handleRegister}
              disabled={event.status === 'full' || event.status === 'past'}
              size="sm"
            >
              {event.status === 'full' 
                ? t?.events?.fullEvent || 'Full'
                : isLive
                ? t?.events?.joinLive || 'Join'
                : t?.events?.register || 'Register'
              }
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  // Main component render logic
  if (layout === 'list') {
    return renderListCard();
  }

  switch (variant) {
    case 'featured':
      return renderFeaturedCard();
    case 'compact':
      return renderCompactCard();
    default:
      return renderDefaultCard();
  }
};

// Event Details Modal Component
const EventDetailsModal = ({ event, onRegister }: { event: Event; onRegister: () => void }) => {
  const { t, language } = useI18n();
  
  const localizedTitle = event.title?.[language] || event.title?.de || event.title?.en || 'Untitled Event';
  const localizedDescription = event.description?.[language] || event.description?.de || event.description?.en || '';
  const localizedObjectives = event.objectives?.[language] || event.objectives?.de || event.objectives?.en || [];
  const localizedTargetAudience = event.targetAudience?.[language] || event.targetAudience?.de || event.targetAudience?.en || '';
  const localizedRequirements = event.requirements?.[language] || event.requirements?.de || event.requirements?.en || [];

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-xl">{localizedTitle}</DialogTitle>
      </DialogHeader>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">{t?.events?.what || 'What'}</h3>
          <p className="text-muted-foreground">{localizedDescription}</p>
        </div>
        
        {localizedObjectives.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">{t?.events?.objectives || 'Objectives'}</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {localizedObjectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}
        
        {localizedTargetAudience && (
          <div>
            <h3 className="font-semibold mb-2">{t?.events?.targetAudience || 'Target Audience'}</h3>
            <p className="text-muted-foreground">{localizedTargetAudience}</p>
          </div>
        )}
        
        {localizedRequirements.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">{t?.events?.requirements || 'Requirements'}</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {localizedRequirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        )}
        
        {event.organizer && (
          <div>
            <h3 className="font-semibold mb-2">{t?.events?.organizer || 'Organizer'}</h3>
            <div className="space-y-2">
              <p className="font-medium">{event.organizer.name}</p>
              {event.organizer.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${event.organizer.email}`} className="text-primary hover:underline">
                    {event.organizer.email}
                  </a>
                </div>
              )}
              {event.organizer.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${event.organizer.phone}`} className="text-primary hover:underline">
                    {event.organizer.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-2 pt-4 border-t">
        <Button onClick={onRegister} className="flex-1" disabled={event.status === 'full'}>
          <Users className="w-4 h-4 mr-2" />
          {event.status === 'full' 
            ? t?.events?.fullEvent || 'Full'
            : t?.events?.registerNow || 'Register Now'
          }
        </Button>
        {event.location && (
          <Button 
            variant="outline" 
            onClick={() => window.open(
              `https://maps.google.com/?q=${encodeURIComponent(event.location!.address + ', ' + event.location!.city)}`, 
              '_blank'
            )}
          >
            <Navigation className="w-4 h-4 mr-2" />
            {t?.events?.getDirections || 'Directions'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
