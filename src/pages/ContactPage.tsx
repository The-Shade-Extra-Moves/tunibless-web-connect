import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Kontakt</h1>
            <p className="text-xl text-muted-foreground">Wir sind hier, um Ihnen zu helfen</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Nachricht senden</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" placeholder="Ihr Vorname" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" placeholder="Ihr Nachname" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-Mail-Adresse</Label>
                  <Input id="email" type="email" placeholder="ihre.email@beispiel.com" />
                </div>
                <div>
                  <Label htmlFor="topic">Betreff</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie ein Thema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registration">Registrierung</SelectItem>
                      <SelectItem value="documents">Dokumente</SelectItem>
                      <SelectItem value="volunteer">Ehrenamtlich helfen</SelectItem>
                      <SelectItem value="membership">Mitgliedschaft</SelectItem>
                      <SelectItem value="other">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea id="message" placeholder="Ihre Nachricht..." rows={5} />
                </div>
                <Button variant="hero" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Kontaktinformationen</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>tunibless@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Husarenäcker 4, 67659 Kaiserslautern</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Mo-Fr: 9:00-18:00 Uhr</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Schneller Kontakt</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Gruppe beitreten
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Facebook Messenger
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Bankverbindung</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Bank:</strong> Sparkasse Kaiserslautern</div>
                  <div><strong>IBAN:</strong> DE14 5405 0220 0000 6402 68</div>
                  <div><strong>BIC:</strong> MALADE51KLK</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;