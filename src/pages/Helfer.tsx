import PageNavigation from "@/components/PageNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { 
  HandHeart, 
  Clock, 
  MessageCircle, 
  Users, 
  BookOpen,
  Video,
  Globe,
  Award,
  Heart,
  CheckCircle,
  Calendar
} from "lucide-react";

const Helfer = () => {
  const { t } = useI18n();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    languages: "",
    experience: "",
    availability: "",
    motivation: "",
    skills: "",
    agreeTerms: false,
    agreeWhatsApp: false
  });

  const volunteerAreas = [
    {
      id: "beratung",
      title: t.volunteer.areas.consultation.title,
      description: t.volunteer.areas.consultation.description,
      icon: Users,
      timeCommitment: t.volunteer.areas.consultation.timeCommitment,
      requirements: t.volunteer.areas.consultation.requirements
    },
    {
      id: "workshops",
      title: t.volunteer.areas.workshops.title,
      description: t.volunteer.areas.workshops.description,
      icon: BookOpen,
      timeCommitment: t.volunteer.areas.workshops.timeCommitment,
      requirements: t.volunteer.areas.workshops.requirements
    },
    {
      id: "ubersetzung",
      title: t.volunteer.areas.translation.title,
      description: t.volunteer.areas.translation.description,
      icon: Globe,
      timeCommitment: t.volunteer.areas.translation.timeCommitment,
      requirements: t.volunteer.areas.translation.requirements
    },
    {
      id: "content",
      title: t.volunteer.areas.content.title,
      description: t.volunteer.areas.content.description,
      icon: Video,
      timeCommitment: t.volunteer.areas.content.timeCommitment,
      requirements: t.volunteer.areas.content.requirements
    },
    {
      id: "whatsapp",
      title: t.volunteer.areas.moderation.title,
      description: t.volunteer.areas.moderation.description,
      icon: MessageCircle,
      timeCommitment: t.volunteer.areas.moderation.timeCommitment,
      requirements: t.volunteer.areas.moderation.requirements
    },
    {
      id: "events",
      title: t.volunteer.areas.events.title,
      description: t.volunteer.areas.events.description,
      icon: Calendar,
      timeCommitment: t.volunteer.areas.events.timeCommitment,
      requirements: t.volunteer.areas.events.requirements
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: t.volunteer.benefits.titles[0],
      description: t.volunteer.benefits.items[0]
    },
    {
      icon: Users,
      title: t.volunteer.benefits.titles[1],
      description: t.volunteer.benefits.items[1]
    },
    {
      icon: BookOpen,
      title: t.volunteer.benefits.titles[2],
      description: t.volunteer.benefits.items[2]
    },
    {
      icon: Heart,
      title: t.volunteer.benefits.titles[3],
      description: t.volunteer.benefits.items[3]
    }
  ];

  const handleAreaToggle = (areaId: string) => {
    setSelectedAreas(prev => 
      prev.includes(areaId) 
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId]
    );
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Volunteer application:", { selectedAreas, ...formData });
    // Auto-join WhatsApp if agreed
    if (formData.agreeWhatsApp) {
      window.open('https://chat.whatsapp.com/volunteer-group', '_blank');
    }
    window.location.href = '/danke';
  };

  return (
    <div className="min-h-screen bg-background">
      <PageNavigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <HandHeart className="h-10 w-10 text-orange-500" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t.volunteer.title} 🤝
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.volunteer.subtitle}
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">{t.volunteer.statistics.activeHelpers}</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-sm text-muted-foreground">{t.volunteer.statistics.supportedStudents}</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-muted-foreground">{t.volunteer.statistics.volunteerHours}</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-muted-foreground">{t.volunteer.statistics.successfulApplications}</div>
            </div>
          </div>

          {/* Volunteer Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">
              {t.volunteer.areas.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {volunteerAreas.map((area) => {
                const Icon = area.icon;
                const isSelected = selectedAreas.includes(area.id);
                return (
                  <Card 
                    key={area.id}
                    className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                      isSelected ? 'border-primary bg-primary/5' : 'border-border'
                    }`}
                    onClick={() => handleAreaToggle(area.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{area.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {area.timeCommitment}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="text-sm font-medium mb-2">{t.volunteer.areas.requirementsLabel}</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {area.requirements.map((req, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Application Form */}
          <Card className="border-2 mb-12">
            <CardHeader>
              <CardTitle>{t.volunteer.form.title}</CardTitle>
              <CardDescription>
                {t.volunteer.form.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t.volunteer.form.personalInfo}</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">{t.volunteer.form.firstName} *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t.volunteer.form.lastName} *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.volunteer.form.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t.volunteer.form.phone}</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">{t.volunteer.form.city}</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">{t.volunteer.form.country}</Label>
                      <Select onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Land auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="germany">Deutschland</SelectItem>
                          <SelectItem value="tunisia">Tunesien</SelectItem>
                          <SelectItem value="other">Anderes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Skills & Experience */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Fähigkeiten & Erfahrung</h3>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="languages">{t.volunteer.form.languages}</Label>
                      <Input
                        id="languages"
                        placeholder="z.B. Deutsch (fließend), Arabisch (Muttersprache), Französisch"
                        value={formData.languages}
                        onChange={(e) => handleInputChange('languages', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">{t.volunteer.form.experience}</Label>
                      <Textarea
                        id="experience"
                        placeholder="Beschreiben Sie Ihre Erfahrung in Bildung, Beratung oder ehrenamtlicher Arbeit"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="skills">{t.volunteer.form.skills}</Label>
                      <Textarea
                        id="skills"
                        placeholder="z.B. Design, Programmierung, Social Media, Präsentation"
                        value={formData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Availability & Motivation */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Verfügbarkeit & Motivation</h3>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="availability">{t.volunteer.form.availability}</Label>
                      <Select onValueChange={(value) => handleInputChange('availability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Zeitaufwand auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 Stunden pro Woche</SelectItem>
                          <SelectItem value="3-5">3-5 Stunden pro Woche</SelectItem>
                          <SelectItem value="6-10">6-10 Stunden pro Woche</SelectItem>
                          <SelectItem value="10+">Mehr als 10 Stunden pro Woche</SelectItem>
                          <SelectItem value="flexible">Flexibel nach Bedarf</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="motivation">{t.volunteer.form.motivation}</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Warum möchten Sie bei TuniBless ehrenamtlich helfen?"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Selected Areas Summary */}
                {selectedAreas.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Gewählte Bereiche</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedAreas.map(areaId => {
                        const area = volunteerAreas.find(a => a.id === areaId);
                        return (
                          <Badge key={areaId} variant="default">
                            {area?.title}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      {t.volunteer.form.agreeTerms} *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeWhatsApp"
                      checked={formData.agreeWhatsApp}
                      onCheckedChange={(checked) => handleInputChange('agreeWhatsApp', checked as boolean)}
                    />
                    <Label htmlFor="agreeWhatsApp" className="text-sm">
                      {t.volunteer.form.agreeWhatsApp}
                    </Label>
                  </div>
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.agreeTerms || selectedAreas.length === 0}
                >
                  {t.volunteer.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">
              {t.volunteer.benefits.title} 🌟
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Testimonial */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <blockquote className="text-lg italic text-foreground mb-4">
              "Als Helfer bei TuniBless kann ich direkt anderen beim Erreichen ihrer Träume helfen. 
              Es ist unglaublich erfüllend zu sehen, wie Studierende erfolgreich nach Deutschland kommen."
            </blockquote>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">AS</span>
              </div>
              <div className="text-left">
                <div className="font-medium">Ahmed Salhi</div>
                <div className="text-sm text-muted-foreground">Helfer seit 2022</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Helfer;
