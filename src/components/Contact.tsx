import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n-context";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { t, isRTL } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      title: t.contact.email,
      value: "info@tunibless.org",
      description: "General inquiries and support",
      icon: Mail
    },
    {
      title: t.contact.address,
      value: t.footer.address,
      description: "Registered office location",
      icon: MapPin
    },
    {
      title: t.contact.phone,
      value: t.footer.phone,
      description: "Business hours only",
      icon: Phone
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16 bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-foreground mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Opening Hours */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{t.contact.hours}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>{t.contact.mondayFriday}:</span>
                        <span>9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t.contact.saturday}:</span>
                        <span>10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t.contact.sunday}:</span>
                        <span>{t.contact.closed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.contact.joinWhatsApp}
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Facebook className="h-5 w-5 mr-2" />
                {t.contact.followFacebook}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.contact.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder={t.forms.firstName}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t.forms.email}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Textarea
                  placeholder={t.forms.message}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Mail className="h-5 w-5 mr-2" />
                {t.forms.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;