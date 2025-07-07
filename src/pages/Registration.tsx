import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    motivation: "",
    governorate: ""
  });
  const { toast } = useToast();

  const tunisianGovernorates = [
    "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul",
    "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef",
    "Siliana", "Kairouan", "Kasserine", "Sidi Bouzid",
    "Sousse", "Monastir", "Mahdia", "Sfax", "Gafsa",
    "Tozeur", "Kebili", "Gabès", "Medenine", "Tataouine"
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registrierung erfolgreich!",
      description: "Wir werden uns bald bei Ihnen melden. Prüfen Sie Ihre E-Mails für weitere Schritte.",
    });
    setStep(4);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Registrierung</h1>
            <p className="text-muted-foreground">
              Beginnen Sie Ihren Weg zur erfolgreichen Integration in Deutschland
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`flex items-center ${i < 3 ? 'flex-1' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= i ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {i}
                  </div>
                  {i < 3 && (
                    <div className={`flex-1 h-1 mx-4 rounded ${
                      step > i ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Standort</span>
              <span>Kontakt</span>
              <span>Motivation</span>
            </div>
          </div>

          {step === 1 && (
            <Card className="p-8">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Wo befinden Sie sich?</h2>
                <p className="text-muted-foreground">Dies hilft uns, Sie der richtigen WhatsApp-Gruppe zuzuordnen</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="location">Aktueller Aufenthaltsort</Label>
                  <Select onValueChange={(value) => updateFormData('location', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie Ihren Standort" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tunesien">Tunesien</SelectItem>
                      <SelectItem value="deutschland">Deutschland</SelectItem>
                      <SelectItem value="weltweit">Andere Länder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.location === 'tunesien' && (
                  <div>
                    <Label htmlFor="governorate">Gouvernorat</Label>
                    <Select onValueChange={(value) => updateFormData('governorate', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie Ihr Gouvernorat" />
                      </SelectTrigger>
                      <SelectContent>
                        {tunisianGovernorates.map((gov) => (
                          <SelectItem key={gov} value={gov.toLowerCase()}>{gov}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <Button 
                onClick={handleNext} 
                className="w-full mt-6" 
                disabled={!formData.location}
                variant="hero"
              >
                Weiter
              </Button>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-8">
              <div className="text-center mb-6">
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Kontaktinformationen</h2>
                <p className="text-muted-foreground">Wie können wir Sie erreichen?</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="ihre.email@beispiel.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefonnummer (WhatsApp)</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="+49 oder +216..."
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  Zurück
                </Button>
                <Button 
                  onClick={handleNext} 
                  className="flex-1"
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  variant="hero"
                >
                  Weiter
                </Button>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-8">
              <div className="text-center mb-6">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Ihre Motivation</h2>
                <p className="text-muted-foreground">Erzählen Sie uns von Ihren Zielen</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="motivation">Warum möchten Sie sich bei TuniBless registrieren?</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => updateFormData('motivation', e.target.value)}
                    placeholder="Beschreiben Sie Ihre Ziele und wie wir Ihnen helfen können..."
                    rows={5}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  Zurück
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  className="flex-1"
                  variant="hero"
                >
                  Registrierung abschließen
                </Button>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Registrierung erfolgreich!</h2>
              <p className="text-muted-foreground mb-6">
                Vielen Dank für Ihre Registrierung. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
              </p>
              
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Nächste Schritte:</h3>
                  <ul className="text-sm text-muted-foreground text-left space-y-1">
                    <li>• Prüfen Sie Ihre E-Mails für weitere Informationen</li>
                    <li>• Sie erhalten einen Link zur WhatsApp-Gruppe</li>
                    <li>• Laden Sie unsere Checkliste herunter</li>
                    <li>• Nehmen Sie an unserem nächsten Livestream teil</li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="flex-1">
                    WhatsApp Gruppe beitreten
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Checkliste herunterladen
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;