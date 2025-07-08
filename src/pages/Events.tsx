import { useState, useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, MapPin, Users, Video, Clock, Star, 
  Filter, Search, Map, List, Grid, RefreshCw,
  ArrowUp, Bell, Share, Download
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import PageNavigation from "@/components/PageNavigation";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import CONFIG from "@/lib/config";

// Import our new modular components
import EventsHero from "@/components/EventsHero";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard from "@/components/EventCard";
import EventFilters, { EventFilters as EventFiltersType } from "@/components/EventFilters";
import LivestreamCard from "@/components/LivestreamCard";
import EventMap from "@/components/EventMap";
import EventCountdown from "@/components/EventCountdown";
import RSVPModal from "@/components/RSVPModal";
import EmptyState from "@/components/EmptyState";
import LoadingScreen from "@/components/LoadingScreen";

// Import data
import { 
  eventsData, 
  livestreamSchedule, 
  getEventsByStatus, 
  getEventsByType,
  Event,
  LivestreamSchedule,
  EventStatus,
  EventType 
} from "@/lib/events-data";

const Events = () => {
  const { t, language, direction } = useI18n();
  
  // State management
  const [activeTab, setActiveTab] = useState<'upcoming' | 'livestreams' | 'past' | 'map'>('upcoming');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isSubmittingRSVP, setIsSubmittingRSVP] = useState(false);
  const [savedEvents, setSavedEvents] = useState<Set<string>>(new Set());
  const [notificationEvents, setNotificationEvents] = useState<Set<string>>(new Set());
  
  // Filter state
  const [filters, setFilters] = useState<EventFiltersType>({
    search: '',
    type: 'all',
    format: 'all',
    status: 'all',
    region: 'all',
    dateRange: 'all',
    language: 'all'
  });

  // Refs
  const filtersRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  // Initialize component
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Load saved preferences from localStorage
    const savedEventsFromStorage = localStorage.getItem('tunibless-saved-events');
    if (savedEventsFromStorage) {
      setSavedEvents(new Set(JSON.parse(savedEventsFromStorage)));
    }

    const notificationEventsFromStorage = localStorage.getItem('tunibless-notification-events');
    if (notificationEventsFromStorage) {
      setNotificationEvents(new Set(JSON.parse(notificationEventsFromStorage)));
    }

    return () => clearTimeout(timer);
  }, []);

  // Filtered and sorted events
  const filteredEvents = useMemo(() => {
    let filtered = eventsData.filter(event => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const titleMatch = event.title[language].toLowerCase().includes(searchLower);
        const descMatch = event.description[language].toLowerCase().includes(searchLower);
        const locationMatch = event.location?.city?.toLowerCase().includes(searchLower) || false;
        const tagMatch = event.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!titleMatch && !descMatch && !locationMatch && !tagMatch) {
          return false;
        }
      }

      // Type filter
      if (filters.type !== 'all' && event.type !== filters.type) {
        return false;
      }

      // Format filter
      if (filters.format !== 'all' && event.format !== filters.format) {
        return false;
      }

      // Status filter
      if (filters.status !== 'all' && event.status !== filters.status) {
        return false;
      }

      // Region filter
      if (filters.region !== 'all' && 
          event.location?.city?.toLowerCase() !== filters.region.toLowerCase()) {
        return false;
      }

      // Language filter
      if (filters.language !== 'all' && !event.languages.includes(filters.language as any)) {
        return false;
      }

      // Date range filter
      if (filters.dateRange !== 'all') {
        const now = new Date();
        const eventDate = new Date(event.startDate);
        
        switch (filters.dateRange) {
          case 'today':
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return eventDate >= today && eventDate < tomorrow;
            
          case 'week':
            const weekFromNow = new Date();
            weekFromNow.setDate(weekFromNow.getDate() + 7);
            return eventDate >= now && eventDate <= weekFromNow;
            
          case 'month':
            const monthFromNow = new Date();
            monthFromNow.setMonth(monthFromNow.getMonth() + 1);
            return eventDate >= now && eventDate <= monthFromNow;
            
          case 'upcoming':
            return eventDate >= now;
        }
      }

      return true;
    });

    // Sort by date and featured status
    return filtered.sort((a, b) => {
      // Featured events first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      
      // Then by date
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
  }, [eventsData, filters, language]);

  // Get events by status
  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');
  const featuredEvents = filteredEvents.filter(event => event.featured);

  // Event handlers
  const handleEventRegister = (eventId: string) => {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setIsRSVPModalOpen(true);
    }
  };

  const handleRSVPSubmit = async (eventId: string, formData: any) => {
    setIsSubmittingRSVP(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Close modal and show success
      setIsRSVPModalOpen(false);
      setSelectedEvent(null);
      
      // Could show a success toast here
      console.log('RSVP submitted:', eventId, formData);
      
    } catch (error) {
      console.error('RSVP submission failed:', error);
    } finally {
      setIsSubmittingRSVP(false);
    }
  };

  const handleEventSave = (eventId: string) => {
    const newSavedEvents = new Set(savedEvents);
    if (newSavedEvents.has(eventId)) {
      newSavedEvents.delete(eventId);
    } else {
      newSavedEvents.add(eventId);
    }
    setSavedEvents(newSavedEvents);
    localStorage.setItem('tunibless-saved-events', JSON.stringify([...newSavedEvents]));
  };

  const handleEventShare = (eventId: string) => {
    const event = eventsData.find(e => e.id === eventId);
    if (event && navigator.share) {
      navigator.share({
        title: event.title[language],
        text: event.description[language],
        url: `${window.location.origin}/events/${eventId}`
      });
    } else {
      // Fallback to clipboard
      const url = `${window.location.origin}/events/${eventId}`;
      navigator.clipboard?.writeText(url);
    }
  };

  const handleStreamJoin = (streamId: string) => {
    const stream = livestreamSchedule.find(s => s.id === streamId);
    if (stream) {
      window.open(stream.joinUrl, '_blank');
    }
  };

  const handleNotifyMe = (eventId: string) => {
    const newNotificationEvents = new Set(notificationEvents);
    if (newNotificationEvents.has(eventId)) {
      newNotificationEvents.delete(eventId);
    } else {
      newNotificationEvents.add(eventId);
    }
    setNotificationEvents(newNotificationEvents);
    localStorage.setItem('tunibless-notification-events', JSON.stringify([...newNotificationEvents]));
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <PageTransition>
      <PageNavigation />
      <div className="min-h-screen bg-background pt-20" dir={direction}>
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Hero Section */}
            <EventsHero
              onSearchFocus={() => scrollToSection(filtersRef)}
              onFilterClick={() => scrollToSection(filtersRef)}
              onViewAllClick={() => scrollToSection(eventsRef)}
              featuredEventsCount={featuredEvents.length}
              upcomingEventsCount={upcomingEvents.length}
            />

            {/* Featured Event */}
            {featuredEvents.length > 0 && (
              <section>
                <FeaturedEvent
                  event={featuredEvents[0]}
                  onRegister={handleEventRegister}
                  onShare={handleEventShare}
                  onSave={handleEventSave}
                />
              </section>
            )}

            {/* Main Content Tabs */}
            <section ref={eventsRef}>
              <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <TabsList className="grid w-full lg:w-auto grid-cols-4 lg:grid-cols-4">
                    <TabsTrigger value="upcoming" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.events.upcoming}</span>
                    </TabsTrigger>
                    <TabsTrigger value="livestreams" className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.events.livestreams}</span>
                    </TabsTrigger>
                    <TabsTrigger value="past" className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.events.past}</span>
                    </TabsTrigger>
                    <TabsTrigger value="map" className="flex items-center gap-2">
                      <Map className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.events.map}</span>
                    </TabsTrigger>
                  </TabsList>

                  {(activeTab === 'upcoming' || activeTab === 'past') && (
                    <div className="flex items-center gap-2">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                      >
                        <List className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Filters */}
                {(activeTab === 'upcoming' || activeTab === 'past') && (
                  <div ref={filtersRef}>
                    <EventFilters
                      filters={filters}
                      onFiltersChange={setFilters}
                      resultCount={filteredEvents.length}
                    />
                  </div>
                )}

                {/* Upcoming Events */}
                <TabsContent value="upcoming" className="space-y-8">
                  {upcomingEvents.length > 0 ? (
                    <div className={viewMode === 'grid' 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                      : "space-y-4"
                    }>
                      {upcomingEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          event={event}
                          onRegister={handleEventRegister}
                          onShare={handleEventShare}
                          onSave={handleEventSave}
                          isSaved={savedEvents.has(event.id)}
                          layout={viewMode}
                          showCountdown
                        />
                      ))}
                    </div>
                  ) : (
                    <EmptyState
                      type="filter"
                      selectedCategory={filters.type !== 'all' ? filters.type : undefined}
                      onClearFilters={() => setFilters({
                        search: '',
                        type: 'all',
                        format: 'all',
                        status: 'all',
                        region: 'all',
                        dateRange: 'all',
                        language: 'all'
                      })}
                    />
                  )}
                </TabsContent>

                {/* Weekly Livestreams */}
                <TabsContent value="livestreams" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {livestreamSchedule.map((stream) => (
                      <LivestreamCard
                        key={stream.id}
                        stream={stream}
                        onJoin={handleStreamJoin}
                        onShare={handleEventShare}
                        onSave={handleEventSave}
                      />
                    ))}
                  </div>
                </TabsContent>

                {/* Past Events */}
                <TabsContent value="past" className="space-y-8">
                  {pastEvents.length > 0 ? (
                    <div className={viewMode === 'grid' 
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                      : "space-y-4"
                    }>
                      {pastEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          event={event}
                          onShare={handleEventShare}
                          onSave={handleEventSave}
                          isSaved={savedEvents.has(event.id)}
                          layout={viewMode}
                        />
                      ))}
                    </div>
                  ) : (
                    <EmptyState
                      type="general"
                    />
                  )}
                </TabsContent>

                {/* Event Map */}
                <TabsContent value="map" className="space-y-8">
                  <EventMap
                    events={upcomingEvents}
                    selectedEvent={selectedEvent || undefined}
                    onEventSelect={setSelectedEvent}
                    onEventClick={(event) => {
                      setSelectedEvent(event);
                      setIsRSVPModalOpen(true);
                    }}
                  />
                </TabsContent>
              </Tabs>
            </section>

            {/* Countdown for Next Featured Event */}
            {featuredEvents.length > 1 && (
              <section>
                <EventCountdown
                  event={featuredEvents[1]}
                  onNotifyMe={handleNotifyMe}
                  onAddToCalendar={() => {}}
                  onShare={handleEventShare}
                />
              </section>
            )}
          </div>
        </div>

        {/* RSVP Modal */}
        <RSVPModal
          event={selectedEvent}
          isOpen={isRSVPModalOpen}
          onClose={() => {
            setIsRSVPModalOpen(false);
            setSelectedEvent(null);
          }}
          onSubmit={handleRSVPSubmit}
          isLoading={isSubmittingRSVP}
        />

        {/* Back to Top */}
        <BackToTop />
      </div>
    </PageTransition>
  );
};

export default Events;