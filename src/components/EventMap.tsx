import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map as MapIcon, ExternalLink, Navigation, 
  MapPin, Calendar, Users, Info 
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Event } from "@/lib/events-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface EventMapProps {
  events: Event[];
  selectedEvent?: Event;
  onEventSelect?: (event: Event) => void;
  onEventClick?: (event: Event) => void;
  className?: string;
}

const EventMap = ({ 
  events, 
  selectedEvent, 
  onEventSelect, 
  onEventClick,
  className 
}: EventMapProps) => {
  const { t, language, direction } = useI18n();
  const [mapView, setMapView] = useState<'list' | 'map'>('list');

  // Filter events that have location data
  const mappableEvents = events.filter(event => 
    event.location?.coordinates && 
    event.status !== 'past' &&
    event.format !== 'livestream'
  );

  // Group events by city/region
  const eventsByRegion = mappableEvents.reduce((acc, event) => {
    const region = event.location?.city || 'Unknown';
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const openInGoogleMaps = (event: Event) => {
    if (event.location?.coordinates) {
      const { lat, lng } = event.location.coordinates;
      const query = encodeURIComponent(`${event.title[language]} ${event.location.venue}`);
      const url = `https://maps.google.com/maps?q=${lat},${lng}&query=${query}`;
      window.open(url, '_blank');
    }
  };

  const openDirections = (event: Event) => {
    if (event.location?.coordinates) {
      const { lat, lng } = event.location.coordinates;
      const url = `https://maps.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      window.open(url, '_blank');
    }
  };

  const formatEventDate = (event: Event) => {
    const date = new Date(event.startDate);
    return date.toLocaleDateString(language === 'ar' ? 'ar-TN' : language, {
      month: 'short',
      day: 'numeric'
    });
  };

  if (mappableEvents.length === 0) {
    return (
      <Card className={cn("p-8 text-center", className)} dir={direction}>
        <MapIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Keine Events mit Standort
        </h3>
        <p className="text-muted-foreground">
          Momentan gibt es keine Events mit verfügbaren Standortdaten.
        </p>
      </Card>
    );
  }

  return (
    <Card className={cn("overflow-hidden", className)} dir={direction}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <MapIcon className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Event-Standorte
            </h3>
            <Badge variant="secondary" className="text-xs">
              {mappableEvents.length}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={mapView === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('list')}
              className="text-xs"
            >
              Liste
            </Button>
            <Button
              variant={mapView === 'map' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('map')}
              className="text-xs"
            >
              Karte
            </Button>
          </div>
        </div>

        {mapView === 'list' ? (
          /* List View */
          <div className="space-y-6">
            {Object.entries(eventsByRegion).map(([region, regionEvents]) => (
              <div key={region} className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-foreground">
                    {region}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {regionEvents.length}
                  </Badge>
                </div>
                
                <div className="grid gap-3">
                  {regionEvents.map((event) => (
                    <div
                      key={event.id}
                      className={cn(
                        "p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md",
                        selectedEvent?.id === event.id && "ring-2 ring-primary bg-primary/5"
                      )}
                      onClick={() => onEventSelect?.(event)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {formatEventDate(event)}
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {t.events.types[event.type as keyof typeof t.events.types]}
                            </Badge>
                          </div>
                          
                          <h5 className="font-medium text-foreground mb-1 line-clamp-1">
                            {event.title[language]}
                          </h5>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="line-clamp-1">
                              {event.location?.venue}
                            </span>
                          </div>
                          
                          {event.maxParticipants && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>
                                {event.currentParticipants || 0} / {event.maxParticipants}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-1 ml-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEventClick?.(event);
                            }}
                            className="h-8 w-8 p-0"
                            aria-label="Event-Details"
                          >
                            <Info className="w-4 h-4" />
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDirections(event);
                            }}
                            className="h-8 w-8 p-0"
                            aria-label="Route berechnen"
                          >
                            <Navigation className="w-4 h-4" />
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              openInGoogleMaps(event);
                            }}
                            className="h-8 w-8 p-0"
                            aria-label="Auf Karte anzeigen"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Map View - Placeholder */
          <div className="space-y-4">
            {/* Interactive Map Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="relative text-center">
                <MapIcon className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-foreground mb-2">
                  Interaktive Karte
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Hier wird eine interaktive Karte mit Event-Standorten angezeigt
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    const allCoords = mappableEvents
                      .map(e => e.location?.coordinates)
                      .filter(Boolean);
                    
                    if (allCoords.length > 0) {
                      const avgLat = allCoords.reduce((sum, coord) => sum + coord!.lat, 0) / allCoords.length;
                      const avgLng = allCoords.reduce((sum, coord) => sum + coord!.lng, 0) / allCoords.length;
                      
                      const markers = mappableEvents
                        .map(event => `markers=color:red%7C${event.location!.coordinates!.lat},${event.location!.coordinates!.lng}`)
                        .join('&');
                      
                      const url = `https://maps.google.com/maps?center=${avgLat},${avgLng}&zoom=8&${markers}`;
                      window.open(url, '_blank');
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4 me-2" />
                  In Google Maps öffnen
                </Button>
              </div>
            </div>
            
            {/* Event Markers Legend */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {mappableEvents.slice(0, 8).map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-2 p-2 bg-muted/50 rounded text-xs cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => openInGoogleMaps(event)}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <span className="line-clamp-1 text-muted-foreground">
                    {event.location?.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-6 pt-4 border-t flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {mappableEvents.length} Events in {Object.keys(eventsByRegion).length} Regionen
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const allEvents = mappableEvents.map(event => ({
                title: event.title[language],
                location: event.location?.venue,
                date: event.startDate,
                coordinates: event.location?.coordinates
              }));
              
              console.log('All mappable events:', allEvents);
              // Could export to calendar or other formats
            }}
          >
            Alle exportieren
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EventMap;
