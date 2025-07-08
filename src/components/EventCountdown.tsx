import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, Calendar, Bell, Share, 
  BellRing, CalendarPlus 
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Event } from "@/lib/events-data";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isEventStarted: boolean;
  isEventEnded: boolean;
}

interface EventCountdownProps {
  event: Event;
  onNotifyMe?: (eventId: string) => void;
  onAddToCalendar?: (eventId: string) => void;
  onShare?: (eventId: string) => void;
  className?: string;
  compact?: boolean;
}

const EventCountdown = ({ 
  event, 
  onNotifyMe, 
  onAddToCalendar, 
  onShare,
  className,
  compact = false
}: EventCountdownProps) => {
  const { t, language, direction } = useI18n();
  const [countdown, setCountdown] = useState<CountdownData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEventStarted: false,
    isEventEnded: false
  });
  const [isNotificationSet, setIsNotificationSet] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const eventStart = new Date(`${event.startDate}T${event.startTime}`).getTime();
      const eventEnd = event.endDate && event.endTime 
        ? new Date(`${event.endDate}T${event.endTime}`).getTime()
        : eventStart + (2 * 60 * 60 * 1000); // Default 2 hours if no end time

      const timeUntilStart = eventStart - now;
      const timeUntilEnd = eventEnd - now;

      if (timeUntilStart <= 0 && timeUntilEnd > 0) {
        // Event is currently happening
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEventStarted: true,
          isEventEnded: false
        });
      } else if (timeUntilEnd <= 0) {
        // Event has ended
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEventStarted: true,
          isEventEnded: true
        });
      } else {
        // Event is upcoming
        const days = Math.floor(timeUntilStart / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeUntilStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilStart % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeUntilStart % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
          isEventStarted: false,
          isEventEnded: false
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [event]);

  const formatEventDateTime = () => {
    const date = new Date(event.startDate);
    const dateStr = date.toLocaleDateString(language === 'ar' ? 'ar-TN' : language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return `${dateStr} ${t.events.timeUntil} ${event.startTime}`;
  };

  const addToCalendar = () => {
    const startDate = new Date(`${event.startDate}T${event.startTime}`);
    const endDate = event.endDate && event.endTime 
      ? new Date(`${event.endDate}T${event.endTime}`)
      : new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const formatCalendarDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const calendarUrl = new URL('https://calendar.google.com/calendar/render');
    calendarUrl.searchParams.set('action', 'TEMPLATE');
    calendarUrl.searchParams.set('text', event.title[language]);
    calendarUrl.searchParams.set('dates', `${formatCalendarDate(startDate)}/${formatCalendarDate(endDate)}`);
    calendarUrl.searchParams.set('details', event.description[language]);
    
    if (event.location) {
      calendarUrl.searchParams.set('location', `${event.location.venue}, ${event.location.address}, ${event.location.city}`);
    }

    window.open(calendarUrl.toString(), '_blank');
    onAddToCalendar?.(event.id);
  };

  const handleNotifyMe = () => {
    setIsNotificationSet(!isNotificationSet);
    onNotifyMe?.(event.id);
  };

  if (compact) {
    return (
      <div className={cn("flex items-center gap-4", className)} dir={direction}>
        {countdown.isEventStarted ? (
          <Badge variant="default" className="bg-green-500 text-white">
            {countdown.isEventEnded ? 'Beendet' : 'Live jetzt'}
          </Badge>
        ) : (
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-medium">
              {countdown.days}d {countdown.hours}h {countdown.minutes}m
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <Card className={cn("overflow-hidden", className)} dir={direction}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              {countdown.isEventStarted 
                ? (countdown.isEventEnded ? 'Event beendet' : 'Event läuft') 
                : 'Countdown'
              }
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNotifyMe}
              className="h-8 w-8 p-0"
              aria-label="Benachrichtigung setzen"
            >
              {isNotificationSet ? (
                <BellRing className="w-4 h-4 text-primary" />
              ) : (
                <Bell className="w-4 h-4" />
              )}
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

        {/* Event Info */}
        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
            {event.title[language]}
          </h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatEventDateTime()}</span>
          </div>
        </div>

        {countdown.isEventStarted ? (
          /* Event is Live or Ended */
          <div className="text-center py-8">
            <div className="mb-4">
              {countdown.isEventEnded ? (
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Event beendet
                </Badge>
              ) : (
                <Badge variant="default" className="text-lg px-4 py-2 bg-green-500 animate-pulse">
                  🔴 Live jetzt
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">
              {countdown.isEventEnded 
                ? 'Dieses Event ist beendet. Schauen Sie nach Aufzeichnungen oder kommenden Events.'
                : 'Das Event läuft gerade! Nehmen Sie jetzt teil.'
              }
            </p>
          </div>
        ) : (
          /* Countdown Display */
          <div>
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {countdown.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {t.events.countdown.days}
                </div>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {countdown.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {t.events.countdown.hours}
                </div>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {countdown.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {t.events.countdown.minutes}
                </div>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">
                  {countdown.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {t.events.countdown.seconds}
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground mb-6">
              {t.events.countdown.until}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={addToCalendar}
                className="flex-1"
              >
                <CalendarPlus className="w-4 h-4 me-2" />
                {t.events.addToCalendar}
              </Button>
              
              <Button
                variant={isNotificationSet ? "default" : "outline"}
                size="sm"
                onClick={handleNotifyMe}
                className="flex-1"
              >
                {isNotificationSet ? (
                  <BellRing className="w-4 h-4 me-2" />
                ) : (
                  <Bell className="w-4 h-4 me-2" />
                )}
                {isNotificationSet ? 'Benachrichtigt' : 'Erinnern'}
              </Button>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-sm font-medium text-foreground">
                {event.maxParticipants ? `${event.currentParticipants || 0}/${event.maxParticipants}` : 'Unbegrenzt'}
              </div>
              <div className="text-xs text-muted-foreground">
                Teilnehmer
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">
                {t.events.formats[event.format as keyof typeof t.events.formats]}
              </div>
              <div className="text-xs text-muted-foreground">
                Format
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCountdown;
