import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Users, MapPin, Clock, 
  Filter, Search, Sparkles, ArrowRight 
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Event } from "@/lib/events-data";
import { cn } from "@/lib/utils";

interface EventsHeroProps {
  onSearchFocus?: () => void;
  onFilterClick?: () => void;
  onViewAllClick?: () => void;
  featuredEventsCount?: number;
  upcomingEventsCount?: number;
  className?: string;
}

const EventsHero = ({ 
  onSearchFocus, 
  onFilterClick, 
  onViewAllClick,
  featuredEventsCount = 0,
  upcomingEventsCount = 0,
  className 
}: EventsHeroProps) => {
  const { t, language, direction } = useI18n();

  const stats = [
    {
      icon: Calendar,
      label: t.events.hero.stats.upcomingEvents,
      value: upcomingEventsCount,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      label: t.events.hero.stats.communityMembers,
      value: '2.5K+',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: MapPin,
      label: t.events.hero.stats.citiesInGermany,
      value: '15+',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className={cn("relative overflow-hidden", className)} dir={direction}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
      
      <div className="relative">
        <div className="text-center space-y-6 mb-12">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 me-2" />
              {t.events.title}
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t.events.hero.title.split(t.events.hero.highlightText).map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-primary">{t.events.hero.highlightText}</span>
                  )}
                </span>
              ))}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.events.description}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={onViewAllClick}
              className="flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              {t.events.hero.viewAllEvents}
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={onFilterClick}
              className="flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              {t.events.hero.filterEvents}
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-200">
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className={cn("w-6 h-6", stat.color)} />
                    </div>
                  </div>
                  <div>
                    <div className={cn("text-2xl font-bold", stat.color)}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Upcoming Events Highlight */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border-blue-200 dark:border-blue-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.events.upcoming}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nächste Veranstaltungen
                  </p>
                </div>
              </div>
              <Badge variant="secondary">
                {upcomingEventsCount}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Verpassen Sie nicht unsere kommenden Workshops, Networking-Events und Familien-Camps in ganz Deutschland.
            </p>
            <Button variant="outline" size="sm" onClick={onViewAllClick}>
              Events ansehen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Weekly Livestreams Highlight */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 border-purple-200 dark:border-purple-800">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.events.weeklyLivestreams}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Regelmäßige Online-Sessions
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                Live
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Nehmen Sie an unseren wöchentlichen Livestreams teil: Deutschkurse, Q&A Sessions und Erfahrungsaustausch.
            </p>
            <Button variant="outline" size="sm">
              Livestreams ansehen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>

        {/* Community Engagement */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Werden Sie Teil unserer Gemeinschaft
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Vernetzen Sie sich mit anderen tunesischen Familien in Deutschland, 
              teilen Sie Erfahrungen und unterstützen Sie sich gegenseitig bei der Integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default">
                Event erstellen
              </Button>
              <Button variant="outline">
                Community beitreten
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Search Preview */}
        <div className="mt-12 max-w-md mx-auto">
          <div 
            className="relative cursor-pointer group"
            onClick={onSearchFocus}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="w-full pl-10 pr-4 py-3 border border-input bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-muted-foreground group-hover:border-primary">
              {t.events.searchPlaceholder}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;
