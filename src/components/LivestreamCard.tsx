import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, Clock, User, Play, ExternalLink, 
  Calendar, Share, Bookmark, Volume2 
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { LivestreamSchedule } from "@/lib/events-data";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LivestreamCardProps {
  stream: LivestreamSchedule;
  onJoin?: (streamId: string) => void;
  onShare?: (streamId: string) => void;
  onSave?: (streamId: string) => void;
  className?: string;
}

const LivestreamCard = ({ 
  stream, 
  onJoin, 
  onShare, 
  onSave,
  className 
}: LivestreamCardProps) => {
  const { t, language, direction } = useI18n();
  const [isLive, setIsLive] = useState(false);
  const [nextStreamTime, setNextStreamTime] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkIfLive = () => {
      const now = new Date();
      const currentTime = now.toTimeString().substring(0, 5);
      
      // Simple check - could be enhanced with actual timezone logic
      const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const todayIndex = now.getDay();
      const todayName = dayNames[todayIndex];
      
      const streamDayIndex = dayNames.indexOf(stream.day.toLowerCase());
      const isToday = todayName === stream.day.toLowerCase();
      
      if (isToday) {
        const streamTime = stream.time;
        const streamHour = parseInt(streamTime.split(':')[0]);
        const streamMinute = parseInt(streamTime.split(':')[1]);
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        const streamTotalMinutes = streamHour * 60 + streamMinute;
        const currentTotalMinutes = currentHour * 60 + currentMinute;
        
        // Consider live if within 2 hours of start time
        setIsLive(
          currentTotalMinutes >= streamTotalMinutes && 
          currentTotalMinutes <= streamTotalMinutes + 120
        );
      } else {
        setIsLive(false);
      }
      
      // Calculate next stream time
      let daysUntilNext = streamDayIndex - todayIndex;
      if (daysUntilNext <= 0) daysUntilNext += 7;
      
      const nextDate = new Date(now);
      nextDate.setDate(now.getDate() + daysUntilNext);
      const [hours, minutes] = stream.time.split(':').map(Number);
      nextDate.setHours(hours, minutes, 0, 0);
      
      setNextStreamTime(nextDate.toLocaleDateString(language === 'ar' ? 'ar-TN' : language, {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }));
    };

    checkIfLive();
    const interval = setInterval(checkIfLive, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [stream, language]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return '📺';
      case 'facebook': return '📘';
      case 'zoom': return '💻';
      case 'whatsapp': return '💬';
      default: return '🎥';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'facebook': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'zoom': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'whatsapp': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getLanguageFlag = (lang: string) => {
    switch (lang) {
      case 'de': return '🇩🇪';
      case 'ar': return '🇹🇳';
      case 'fr': return '🇫🇷';
      case 'en': return '🇬🇧';
      default: return '🌐';
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.(stream.id);
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-lg", className)} dir={direction}>
      {/* Header with Live Indicator */}
      {isLive && (
        <div className="bg-red-500 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <Volume2 className="w-4 h-4" />
          <span>{t.events.liveNow}</span>
        </div>
      )}
      
      <div className="p-6">
        {/* Top Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl" role="img" aria-label={`${stream.language} language`}>
              {getLanguageFlag(stream.language)}
            </div>
            <div>
              <Badge 
                className={cn("text-xs mb-1", getPlatformColor(stream.platform))}
                variant="outline"
              >
                {getPlatformIcon(stream.platform)} {stream.platform}
              </Badge>
              <div className="text-xs text-muted-foreground">
                {t.events.days[stream.day as keyof typeof t.events.days]}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              className="h-8 w-8 p-0"
              aria-label={isSaved ? "Stream entfernen" : "Stream speichern"}
            >
              <Bookmark className={cn("w-4 h-4", isSaved && "fill-current")} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onShare?.(stream.id)}
              className="h-8 w-8 p-0"
              aria-label="Stream teilen"
            >
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 text-primary mb-3">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className="font-semibold text-lg">
            {stream.time}
          </span>
          <span className="text-sm text-muted-foreground">
            ({stream.timezone.split('/')[1]})
          </span>
        </div>

        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
            {stream.title[language]}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {stream.description[language]}
          </p>
        </div>

        {/* Host and Audience */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">{t.events.host}:</span>
            <span className="font-medium text-foreground">{stream.host}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <strong>{t.events.audience}:</strong> {stream.audience[language]}
          </div>
        </div>

        {/* Next Stream Time */}
        {!isLive && nextStreamTime && (
          <div className="bg-muted/50 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium text-foreground">
                  {t.events.nextStream}
                </div>
                <div className="text-muted-foreground">
                  {nextStreamTime}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            variant={isLive ? "default" : "outline"}
            size="sm"
            className="flex-1"
            onClick={() => onJoin?.(stream.id)}
            disabled={!stream.isActive}
          >
            {isLive ? (
              <>
                <Play className="w-4 h-4 me-2" />
                {t.events.joinLive}
              </>
            ) : (
              <>
                <Video className="w-4 h-4 me-2" />
                {t.events.joinLive}
              </>
            )}
          </Button>
          
          {stream.replayUrl && (
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => window.open(stream.replayUrl, '_blank')}
              className="px-3"
              aria-label="Wiederholung ansehen"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Offline State */}
        {!stream.isActive && (
          <div className="mt-3 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <p className="text-xs text-orange-600 dark:text-orange-400 text-center">
              Dieser Stream ist momentan pausiert
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default LivestreamCard;
