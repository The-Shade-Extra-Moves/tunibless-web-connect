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
  Users, 
  Heart, 
  Star, 
  Upload,
  Download,
  CheckCircle,
  Euro,
  Gift
} from "lucide-react";

const Mitglied = () => {
  const { t } = useI18n();
  const [membershipType, setMembershipType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    profession: "",
    motivation: "",
    skills: "",
    timeCommitment: "",
    agreeTerms: false,
    agreeNewsletter: false
  });

  const membershipTypes = [
    {
      id: "regular",
      title: "Ordentliche Mitgliedschaft",
      price: "25€/Jahr",
      description: "Vollmitgliedschaft mit Stimmrecht",
      benefits: [
        "Stimmrecht bei Mitgliederversammlungen",
        "Zugang zu exklusiven Events",
        "Persönliche Beratung",
        "Networking-Veranstaltungen",
        "Jahresbericht und Newsletter"
      ],
      icon: Star,
      color: "border-primary"
    },
    {
      id: "supporting",
      title: "Fördermitgliedschaft",
      price: "50€/Jahr",
      description: "Unterstützen Sie unsere Mission",
      benefits: [
        "Alle Vorteile der ordentlichen Mitgliedschaft",
        "Spendenbescheinigung",
        "Exklusive Förderer-Events",
        "Persönliches Dankschreiben",
        "TuniBless Merchandise"
      ],
      icon: Heart,
      color: "border-red-500"
    },
    {
      id: "honorary",
      title: "Ehrenmitgliedschaft",
      price: "Kostenlos",
      description: "Für besondere Verdienste",
      benefits: [
        "Alle Vorteile der Fördermitgliedschaft",
        "Lebenslange Mitgliedschaft",
        "Besondere Anerkennung",
        "Beratende Funktion"
      ],
      icon: Gift,
      color: "border-yellow-500"
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Membership application:", { membershipType, ...formData });
    window.location.href = '/danke';
  };

  return (
    <div className="min-h-screen bg-background">
      <PageNavigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t.member.title} 🤝
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.member.subtitle}
            </p>
          </div>

          {/* Membership Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-8">
              {t.member.chooseMembership}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {membershipTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                      membershipType === type.id ? type.color : 'border-border'
                    }`}
                    onClick={() => setMembershipType(type.id)}
                  >
                    <CardHeader className="text-center">
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {type.price}
                      </CardDescription>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Application Form */}
          {membershipType && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{t.member.form.title}</CardTitle>
                <CardDescription>
                  {t.member.form.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.member.form.personalInfo}</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">{t.member.form.firstName} *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t.member.form.lastName} *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t.member.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.member.form.phone}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.member.form.addressSection}</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <Label htmlFor="address">{t.member.form.street} *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">{t.member.form.city} *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">{t.member.form.postalCode} *</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">{t.member.form.country} *</Label>
                        <Select onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.member.form.selectCountry} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="germany">{t.member.form.countries.germany}</SelectItem>
                            <SelectItem value="tunisia">{t.member.form.countries.tunisia}</SelectItem>
                            <SelectItem value="other">{t.member.form.countries.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.member.form.professionalInfo}</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="profession">{t.member.form.profession}</Label>
                        <Input
                          id="profession"
                          value={formData.profession}
                          onChange={(e) => handleInputChange('profession', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="skills">{t.member.form.skills}</Label>
                        <Textarea
                          id="skills"
                          placeholder={t.member.form.skillsPlaceholder}
                          value={formData.skills}
                          onChange={(e) => handleInputChange('skills', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.member.form.motivation}</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="motivation">{t.member.form.motivationLabel}</Label>
                        <Textarea
                          id="motivation"
                          placeholder={t.member.form.motivationPlaceholder}
                          value={formData.motivation}
                          onChange={(e) => handleInputChange('motivation', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeCommitment">{t.member.form.timeCommitment}</Label>
                        <Select onValueChange={(value) => handleInputChange('timeCommitment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t.member.form.timeCommitmentPlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">{t.member.form.timeOptions["1-2"]}</SelectItem>
                            <SelectItem value="3-5">{t.member.form.timeOptions["3-5"]}</SelectItem>
                            <SelectItem value="6-10">{t.member.form.timeOptions["6-10"]}</SelectItem>
                            <SelectItem value="10+">{t.member.form.timeOptions["10+"]}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                      />
                      <Label htmlFor="agreeTerms" className="text-sm">
                        {t.member.form.agreeTerms} *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeNewsletter"
                        checked={formData.agreeNewsletter}
                        onCheckedChange={(checked) => handleInputChange('agreeNewsletter', checked as boolean)}
                      />
                      <Label htmlFor="agreeNewsletter" className="text-sm">
                        {t.member.form.agreeNewsletter}
                      </Label>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{t.member.form.documentUpload}</h3>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {t.member.form.uploadInstructions}
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        {t.member.form.chooseFile}
                      </Button>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1"
                      disabled={!formData.agreeTerms}
                    >
                      {t.member.form.submitLabel}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('/downloads/mitgliedsantrag.pdf', '_blank')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t.member.form.downloadPdf}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Payment Information */}
          {membershipType && (
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Euro className="h-5 w-5" />
                {t.member.payment.title}
              </h3>
              <div className="space-y-2 text-sm">
                <p>{t.member.payment.afterRegistration}</p>
                <p>{t.member.payment.annualFee}</p>
                <p>{t.member.payment.questions}</p>
              </div>
            </div>
          )}

          {/* Benefits Overview */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t.member.whyBecomeMember.title}
            </h3>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-medium mb-2">{t.member.whyBecomeMember.community.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.member.whyBecomeMember.community.description}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-medium mb-2">{t.member.whyBecomeMember.influence.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.member.whyBecomeMember.influence.description}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="font-medium mb-2">{t.member.whyBecomeMember.support.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.member.whyBecomeMember.support.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mitglied;
