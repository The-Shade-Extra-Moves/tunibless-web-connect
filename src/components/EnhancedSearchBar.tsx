import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  X, 
  Filter, 
  SortAsc, 
  Clock,
  TrendingUp,
  Star,
  ArrowUpAZ
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/lib/i18n-context";
import { servicesData, searchServices } from "@/lib/services-data";

interface EnhancedSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSortChange?: (sort: 'popular' | 'new' | 'rating' | 'alphabetical') => void;
  currentSort?: 'popular' | 'new' | 'rating' | 'alphabetical';
  placeholder?: string;
  showSuggestions?: boolean;
  className?: string;
}

export const EnhancedSearchBar = ({ 
  value, 
  onChange, 
  onSortChange,
  currentSort = 'popular',
  placeholder, 
  showSuggestions = true,
  className = "" 
}: EnhancedSearchBarProps) => {
  const { t, language } = useI18n();
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('tunibless-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        localStorage.removeItem('tunibless-recent-searches');
      }
    }
  }, []);

  useEffect(() => {
    if (value.length > 1) {
      // Generate suggestions based on search
      const searchResults = searchServices(value, language);
      const newSuggestions = Array.from(new Set([
        ...searchResults.slice(0, 5).map(s => s.title[language]),
        ...searchResults.flatMap(s => s.tags).filter(tag => 
          tag.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 3)
      ]));
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [value, language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (newValue: string) => {
    onChange(newValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    addToRecentSearches(suggestion);
    setIsFocused(false);
  };

  const addToRecentSearches = (search: string) => {
    if (!search.trim()) return;
    
    const updated = [search, ...recentSearches.filter(s => s !== search)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('tunibless-recent-searches', JSON.stringify(updated));
  };

  const clearSearch = () => {
    onChange('');
    setIsFocused(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      addToRecentSearches(value);
      setIsFocused(false);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('tunibless-recent-searches');
  };

  const handleSort = (sortType: 'popular' | 'new' | 'rating' | 'alphabetical') => {
    onSortChange?.(sortType);
  };

  const getSortIcon = (sortType: string) => {
    switch (sortType) {
      case 'popular': return TrendingUp;
      case 'new': return Clock;
      case 'rating': return Star;
      case 'alphabetical': return ArrowUpAZ;
      default: return SortAsc;
    }
  };

  const getSortLabel = (sortType: string) => {
    switch (sortType) {
      case 'popular': return t.services?.sortBy?.popular || 'Popular';
      case 'new': return t.services?.sortBy?.new || 'New';
      case 'rating': return t.services?.sortBy?.rating || 'Rating';
      case 'alphabetical': return t.services?.sortBy?.alphabetical || 'Alphabetical';
      default: return t.services?.sortBy?.popular || 'Popular';
    }
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder={placeholder || t.services?.searchPlaceholder || 'Search services...'}
            value={value}
            onChange={(e) => handleSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="pl-12 pr-10 py-3 text-lg rounded-xl border-2 focus:border-primary"
          />
          {value && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {onSortChange && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg" className="px-4">
                {React.createElement(getSortIcon(currentSort), { className: "w-4 h-4 mr-2" })}
                <span className="hidden sm:inline">{getSortLabel(currentSort)}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {(['popular', 'new', 'rating', 'alphabetical'] as const).map((sortType) => {
                const SortIcon = getSortIcon(sortType);
                return (
                  <DropdownMenuItem 
                    key={sortType}
                    onClick={() => handleSort(sortType)}
                    className={`flex items-center gap-2 ${currentSort === sortType ? 'bg-muted' : ''}`}
                  >
                    <SortIcon className="w-4 h-4" />
                    {getSortLabel(sortType)}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </form>

      {/* Search Suggestions */}
      {showSuggestions && isFocused && (value.length > 0 || recentSearches.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {value.length > 1 && suggestions.length > 0 && (
            <>
              <div className="p-3 border-b">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Suggestions
                </h4>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Search className="w-3 h-3 text-muted-foreground" />
                        {suggestion}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {value.length === 0 && recentSearches.length > 0 && (
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Recent Searches
                </h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearRecentSearches}
                  className="text-xs h-6"
                >
                  Clear
                </Button>
              </div>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      {search}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {value.length > 1 && suggestions.length === 0 && (
            <div className="p-6 text-center text-sm text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>{t.services?.noResults || 'No results found'}</p>
              <p className="text-xs mt-1">{t.services?.noResultsDesc || 'Try different search terms'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnhancedSearchBar;
