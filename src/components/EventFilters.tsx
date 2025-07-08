import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar, Filter, X, Search, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { EventType, EventFormat, EventStatus } from "@/lib/events-data";
import { cn } from "@/lib/utils";

export interface EventFilters {
  search: string;
  type: EventType | 'all';
  format: EventFormat | 'all';
  status: EventStatus | 'all';
  region: string;
  dateRange: 'all' | 'today' | 'week' | 'month' | 'upcoming';
  language: 'all' | 'de' | 'ar' | 'fr' | 'en';
}

interface EventFiltersProps {
  filters: EventFilters;
  onFiltersChange: (filters: EventFilters) => void;
  resultCount?: number;
  className?: string;
}

const EventFiltersComponent = ({ 
  filters, 
  onFiltersChange, 
  resultCount,
  className 
}: EventFiltersProps) => {
  const { t, language, direction } = useI18n();
  const [isExpanded, setIsExpanded] = useState(false);

  // Get active filter count
  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.search) count++;
    if (filters.type !== 'all') count++;
    if (filters.format !== 'all') count++;
    if (filters.status !== 'all') count++;
    if (filters.region !== 'all') count++;
    if (filters.dateRange !== 'all') count++;
    if (filters.language !== 'all') count++;
    return count;
  };

  const activeCount = getActiveFilterCount();

  const updateFilter = (key: keyof EventFilters, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      search: '',
      type: 'all',
      format: 'all',
      status: 'all',
      region: 'all',
      dateRange: 'all',
      language: 'all'
    });
  };

  const clearFilter = (key: keyof EventFilters) => {
    if (key === 'search') {
      updateFilter(key, '');
    } else {
      updateFilter(key, 'all');
    }
  };

  // Event type options
  const typeOptions = [
    { value: 'all', label: t.events.filters.all },
    { value: 'workshop', label: t.events.types.workshop },
    { value: 'info-session', label: t.events.types['info-session'] },
    { value: 'networking', label: t.events.types.networking },
    { value: 'family-camp', label: t.events.types['family-camp'] },
    { value: 'consultation', label: t.events.types.consultation },
    { value: 'cultural', label: t.events.types.cultural }
  ];

  const formatOptions = [
    { value: 'all', label: t.events.filters.all },
    { value: 'in-person', label: t.events.formats['in-person'] },
    { value: 'livestream', label: t.events.formats.livestream },
    { value: 'hybrid', label: t.events.formats.hybrid }
  ];

  const statusOptions = [
    { value: 'all', label: t.events.filters.all },
    { value: 'upcoming', label: t.events.status.upcoming },
    { value: 'live', label: t.events.status.live },
    { value: 'past', label: t.events.status.past }
  ];

  const regionOptions = [
    { value: 'all', label: t.events.regions.all },
    { value: 'berlin', label: t.events.regions.berlin },
    { value: 'hamburg', label: t.events.regions.hamburg },
    { value: 'munich', label: t.events.regions.munich },
    { value: 'cologne', label: t.events.regions.cologne },
    { value: 'frankfurt', label: t.events.regions.frankfurt },
    { value: 'stuttgart', label: t.events.regions.stuttgart },
    { value: 'dusseldorf', label: t.events.regions.dusseldorf },
    { value: 'dortmund', label: t.events.regions.dortmund },
    { value: 'kaiserslautern', label: t.events.regions.kaiserslautern }
  ];

  const dateRangeOptions = [
    { value: 'all', label: t.events.filters.all },
    { value: 'today', label: 'Heute' },
    { value: 'week', label: 'Diese Woche' },
    { value: 'month', label: 'Diesen Monat' },
    { value: 'upcoming', label: 'Kommende' }
  ];

  const languageOptions = [
    { value: 'all', label: t.events.filters.all },
    { value: 'de', label: 'Deutsch' },
    { value: 'ar', label: 'العربية' },
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' }
  ];

  return (
    <Card className={cn("p-6 space-y-6", className)} dir={direction}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            {t.events.filters.all}
          </h3>
          {activeCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeCount}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {resultCount !== undefined && (
            <span className="text-sm text-muted-foreground">
              {resultCount} {resultCount === 1 ? 'Event' : 'Events'}
            </span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder={t.events.searchPlaceholder}
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
          className="pl-10 pr-10"
        />
        {filters.search && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => clearFilter('search')}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Filter Controls */}
      <div className={cn(
        "space-y-4 transition-all duration-200",
        !isExpanded && "lg:block hidden"
      )}>
        {/* Quick Date Filters */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t.events.filters.date}
          </label>
          <div className="flex flex-wrap gap-2">
            {dateRangeOptions.map((option) => (
              <Button
                key={option.value}
                variant={filters.dateRange === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => updateFilter('dateRange', option.value)}
                className="text-xs"
              >
                {option.label}
                {filters.dateRange === option.value && (
                  <X 
                    className="w-3 h-3 ml-1" 
                    onClick={(e) => {
                      e.stopPropagation();
                      clearFilter('dateRange');
                    }}
                  />
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Event Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.events.filters.type}
            </label>
            <Select value={filters.type} onValueChange={(value) => updateFilter('type', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Format */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.events.filters.format}
            </label>
            <Select value={filters.format} onValueChange={(value) => updateFilter('format', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {formatOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Region */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.events.filters.region}
            </label>
            <Select value={filters.region} onValueChange={(value) => updateFilter('region', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {regionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Status
            </label>
            <Select value={filters.status} onValueChange={(value) => updateFilter('status', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.events.filters.language}
            </label>
            <Select value={filters.language} onValueChange={(value) => updateFilter('language', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters */}
        {activeCount > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                Aktive Filter
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs h-8"
              >
                {t.events.filters.clear}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.search && (
                <Badge variant="secondary" className="text-xs">
                  "{filters.search}"
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => clearFilter('search')}
                  />
                </Badge>
              )}
              {filters.type !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  {typeOptions.find(o => o.value === filters.type)?.label}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => clearFilter('type')}
                  />
                </Badge>
              )}
              {filters.format !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  {formatOptions.find(o => o.value === filters.format)?.label}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => clearFilter('format')}
                  />
                </Badge>
              )}
              {filters.region !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  <MapPin className="w-3 h-3 me-1" />
                  {regionOptions.find(o => o.value === filters.region)?.label}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => clearFilter('region')}
                  />
                </Badge>
              )}
              {filters.dateRange !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  <Calendar className="w-3 h-3 me-1" />
                  {dateRangeOptions.find(o => o.value === filters.dateRange)?.label}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => clearFilter('dateRange')}
                  />
                </Badge>
              )}
              {filters.language !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  {languageOptions.find(o => o.value === filters.language)?.label}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => clearFilter('language')}
                  />
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default EventFiltersComponent;
