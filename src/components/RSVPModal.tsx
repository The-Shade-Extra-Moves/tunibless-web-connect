import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  User, Mail, Phone, MessageSquare, 
  Calendar, MapPin, Users, Clock,
  Check, AlertCircle, Loader2 
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Event } from "@/lib/events-data";
import { cn } from "@/lib/utils";

interface RSVPFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dietaryRequirements: string;
  accessibility: string;
  message: string;
  agreeToTerms: boolean;
  marketingConsent: boolean;
  language: string;
}

interface RSVPModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (eventId: string, formData: RSVPFormData) => void;
  isLoading?: boolean;
}

const RSVPModal = ({ 
  event, 
  isOpen, 
  onClose, 
  onSubmit, 
  isLoading = false 
}: RSVPModalProps) => {
  const { t, language, direction } = useI18n();
  const [formData, setFormData] = useState<RSVPFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dietaryRequirements: '',
    accessibility: '',
    message: '',
    agreeToTerms: false,
    marketingConsent: false,
    language: language
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof RSVPFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t.events.registration.firstName + ' ist erforderlich';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t.events.registration.lastName + ' ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = t.events.registration.email + ' ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Sie müssen den Teilnahmebedingungen zustimmen';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!event || !validateForm()) {
      return;
    }

    onSubmit(event.id, formData);
  };

  const formatEventDate = (event: Event) => {
    const date = new Date(event.startDate);
    return date.toLocaleDateString(language === 'ar' ? 'ar-TN' : language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const spotsLeft = event?.maxParticipants && event?.currentParticipants 
    ? event.maxParticipants - event.currentParticipants 
    : event?.spotsLeft;

  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir={direction}>
        <DialogHeader>
          <DialogTitle className="text-xl">
            {t.events.registration.title}
          </DialogTitle>
          <DialogDescription>
            {t.events.registration.subtitle}
          </DialogDescription>
        </DialogHeader>

        {/* Event Summary */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h4 className="font-semibold text-foreground">
            {event.title[language]}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{formatEventDate(event)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span>
                {event.startTime}
                {event.endTime && ` - ${event.endTime}`}
              </span>
            </div>
            
            {event.location && (
              <div className="flex items-center gap-2 md:col-span-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{event.location.venue}, {event.location.city}</span>
              </div>
            )}
            
            {spotsLeft && spotsLeft > 0 && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-green-600 dark:text-green-400">
                  {spotsLeft} {t.events.spotsLeft}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              {t.events.types[event.type as keyof typeof t.events.types]}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {t.events.formats[event.format as keyof typeof t.events.formats]}
            </Badge>
            {event.languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs">
                {lang.toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h5 className="font-medium text-foreground">Persönliche Angaben</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t.events.registration.firstName} *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className={cn(errors.firstName && "border-red-500")}
                  placeholder="Ihr Vorname"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  {t.events.registration.lastName} *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  className={cn(errors.lastName && "border-red-500")}
                  placeholder="Ihr Nachname"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.events.registration.email} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={cn(errors.email && "border-red-500")}
                placeholder="ihre.email@beispiel.de"
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t.events.registration.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+49 123 456789"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h5 className="font-medium text-foreground">Zusätzliche Angaben</h5>
            
            <div className="space-y-2">
              <Label htmlFor="language">Bevorzugte Sprache</Label>
              <Select value={formData.language} onValueChange={(value) => updateField('language', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietary">Ernährungshinweise</Label>
              <Input
                id="dietary"
                value={formData.dietaryRequirements}
                onChange={(e) => updateField('dietaryRequirements', e.target.value)}
                placeholder="z.B. vegetarisch, halal, Allergien..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accessibility">Barrierefreiheit</Label>
              <Input
                id="accessibility"
                value={formData.accessibility}
                onChange={(e) => updateField('accessibility', e.target.value)}
                placeholder="Besondere Bedürfnisse oder Unterstützung..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                {t.events.registration.message}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Fragen, Kommentare oder besondere Anfragen..."
                rows={3}
              />
            </div>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => updateField('agreeToTerms', checked as boolean)}
                className={cn(errors.agreeToTerms && "border-red-500")}
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                {t.events.registration.terms} *
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.agreeToTerms}
              </p>
            )}

            <div className="flex items-start space-x-2">
              <Checkbox
                id="marketing"
                checked={formData.marketingConsent}
                onCheckedChange={(checked) => updateField('marketingConsent', checked as boolean)}
              />
              <Label htmlFor="marketing" className="text-sm leading-relaxed">
                Ich möchte über zukünftige Events und Neuigkeiten von TuniBless informiert werden
              </Label>
            </div>
          </div>
        </form>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Abbrechen
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                {t.events.registration.submit}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPModal;
