import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n-context";
import PageNavigation from "@/components/PageNavigation";

const Registration = () => {
  const { t, direction } = useI18n();
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
      title: t.registration.toast.title,
      description: t.registration.toast.description,
    });
    setStep(4);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <PageNavigation />
      <div className="min-h-screen bg-background pt-20" dir={direction}>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t.registration.title}</h1>
            <p className="text-muted-foreground">
              {t.registration.subtitle}
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
              <span>{t.registration.progress.location}</span>
              <span>{t.registration.progress.contact}</span>
              <span>{t.registration.progress.motivation}</span>
            </div>
          </div>

          {step === 1 && (
            <Card className="p-8">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{t.registration.step1.title}</h2>
                <p className="text-muted-foreground">{t.registration.step1.subtitle}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="location">{t.registration.step1.location}</Label>
                  <Select onValueChange={(value) => updateFormData('location', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.registration.step1.locationPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tunesien">{t.registration.step1.tunisia}</SelectItem>
                      <SelectItem value="deutschland">{t.registration.step1.germany}</SelectItem>
                      <SelectItem value="weltweit">{t.registration.step1.worldwide}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.location === 'tunesien' && (
                  <div>
                    <Label htmlFor="governorate">{t.registration.step1.governorate}</Label>
                    <Select onValueChange={(value) => updateFormData('governorate', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.registration.step1.governoratePlaceholder} />
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
                {t.registration.step1.next}
              </Button>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-8">
              <div className="text-center mb-6">
                <User className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{t.registration.step2.title}</h2>
                <p className="text-muted-foreground">{t.registration.step2.subtitle}</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t.registration.step2.firstName}</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      placeholder={t.registration.step2.firstNamePlaceholder}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t.registration.step2.lastName}</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      placeholder={t.registration.step2.lastNamePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">{t.registration.step2.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder={t.registration.step2.emailPlaceholder}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.registration.step2.phone}</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder={t.registration.step2.phonePlaceholder}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  {t.registration.step2.back}
                </Button>
                <Button 
                  onClick={handleNext} 
                  className="flex-1"
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  variant="hero"
                >
                  {t.registration.step2.next}
                </Button>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-8">
              <div className="text-center mb-6">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{t.registration.step3.title}</h2>
                <p className="text-muted-foreground">{t.registration.step3.subtitle}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="motivation">{t.registration.step3.motivation}</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => updateFormData('motivation', e.target.value)}
                    placeholder={t.registration.step3.motivationPlaceholder}
                    rows={5}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button onClick={handleBack} variant="outline" className="flex-1">
                  {t.registration.step3.back}
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  className="flex-1"
                  variant="hero"
                >
                  {t.registration.step3.submit}
                </Button>
              </div>
            </Card>
          )}

          {step === 4 && (
            <Card className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">{t.registration.success.title}</h2>
              <p className="text-muted-foreground mb-6">
                {t.registration.success.message}
              </p>
              
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{t.registration.success.nextSteps}</h3>
                  <ul className="text-sm text-muted-foreground text-left space-y-1">
                    <li>• {t.registration.success.checkEmail}</li>
                    <li>• {t.registration.success.joinWhatsApp}</li>
                    <li>• {t.registration.success.downloadChecklist}</li>
                    <li>• {t.registration.success.joinLivestream}</li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="flex-1">
                    {t.registration.success.joinWhatsAppButton}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    {t.registration.success.downloadButton}
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Registration;