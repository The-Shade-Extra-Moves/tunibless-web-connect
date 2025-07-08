import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, MapPin, Users, Clock, Star, 
  ExternalLink, Map, Share, Bookmark, 
  AccessibilityIcon as Accessibility
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Event } from "@/lib/events-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FeaturedEventProps {
  event: Event;
  onRegister?: (eventId: string) => void;
  onShare?: (eventId: string) => void;
  onSave?: (eventId: string) => void;
}

const FeaturedEvent = ({ 
  event, 
  onRegister, 
  onShare, 
  onSave 
}: FeaturedEventProps) => {
  const { t, language, direction } = useI18n();
  const [isSaved, setIsSaved] = useState(false);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'ar' ? 'ar-TN' : language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeStr: string) => {
    return timeStr;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'live': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'full': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.(event.id);
  };

  const spotsLeft = event.maxParticipants && event.currentParticipants 
    ? event.maxParticipants - event.currentParticipants 
    : event.spotsLeft;

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-primary fill-primary" />
            <Badge variant="secondary" className="text-sm font-medium">
              {t.events.featuredEvent}
            </Badge>
            <Badge 
              className={cn("text-xs", getStatusColor(event.status))}
              variant="outline"
            >
              {t.events.status[event.status as keyof typeof t.events.status] || event.status}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              className="h-8 w-8 p-0"
              aria-label={isSaved ? "Event entfernen" : "Event speichern"}
            >
              <Bookmark className={cn("w-4 h-4", isSaved && "fill-current")} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onShare?.(event.id)}
              className="h-8 w-8 p-0"
              aria-label="Event teilen"
            >
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                {event.title[language]}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description[language]}
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">
                    {formatDate(event.startDate)}
                    {event.endDate && event.endDate !== event.startDate && 
                      ` - ${formatDate(event.endDate)}`
                    }
                  </div>
                  <div className="text-sm">
                    {formatTime(event.startTime)}
                    {event.endTime && ` - ${formatTime(event.endTime)}`}
                    {event.timezone && ` (${event.timezone.split('/')[1]})`}
                  </div>
                </div>
              </div>

              {event.location && (
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">
                      {event.location.venue}
                    </div>
                    <div className="text-sm">
                      {event.location.address}, {event.location.city}
                    </div>
                  </div>
                </div>
              )}

              {event.maxParticipants && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">
                      {event.currentParticipants || 0} / {event.maxParticipants} {t.events.participants}
                    </div>
                    {spotsLeft && spotsLeft > 0 && (
                      <div className="text-sm text-green-600 dark:text-green-400">
                        {spotsLeft} {t.events.spotsLeft}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Languages */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  {t.events.language}:
                </span>
                <div className="flex gap-2">
                  {event.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              {event.targetAudience?.[language] && (
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.events.targetAudience}:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {event.targetAudience[language].map((audience, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {audience}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="flex-1"
                onClick={() => onRegister?.(event.id)}
                disabled={event.status === 'full' || event.status === 'past'}
              >
                <Users className="w-5 h-5 me-2" />
                {event.status === 'full' 
                  ? t.events.fullEvent 
                  : event.status === 'past'
                  ? t.events.status.past
                  : t.events.registerNow
                }
              </Button>
              
              {event.location?.coordinates && (
                <Button 
                  variant="outline"
                  onClick={() => {
                    const { lat, lng } = event.location!.coordinates!;
                    window.open(`https://maps.google.com/maps?q=${lat},${lng}`, '_blank');
                  }}
                  className="sm:w-auto"
                >
                  <Map className="w-4 h-4 me-2" />
                  {t.events.getDirections}
                </Button>
              )}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            {event.image ? (
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img 
                  src={event.image} 
                  alt={event.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <Star className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {event.title[language]}
                  </p>
                </div>
              </div>
            )}

            {/* Quick Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">
                      {event.endDate && event.endDate !== event.startDate
                        ? `${Math.ceil((new Date(event.endDate).getTime() - new Date(event.startDate).getTime()) / (1000 * 60 * 60 * 24))} ${t.events.countdown.days}`
                        : `${formatTime(event.startTime)} - ${formatTime(event.endTime || event.startTime)}`
                      }
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {t.events.formats[event.format as keyof typeof t.events.formats]}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives */}
        {event.objectives?.[language] && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t.events.objectives}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {event.objectives[language].slice(0, 4).map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-sm text-muted-foreground">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FeaturedEvent;
