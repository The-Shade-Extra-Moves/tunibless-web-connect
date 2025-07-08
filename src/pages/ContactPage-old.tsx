import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import PageNavigation from "@/components/PageNavigation";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import QuickActions from "@/components/QuickActions";
import BankingDetails from "@/components/BankingDetails";
import EmbeddedMap from "@/components/EmbeddedMap";
import { Button } from "@/components/ui/button";
import { ArrowUp, Anchor } from "lucide-react";

const ContactPage = () => {
  const { t, direction } = useI18n();
  return (
    <>
      <PageNavigation />
      <div className="min-h-screen bg-background pt-20" dir={direction}>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t.contactPage.title}</h1>
            <p className="text-xl text-muted-foreground">{t.contactPage.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t.contactPage.form.title}</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t.contactPage.form.firstName}</Label>
                    <Input id="firstName" placeholder={t.contactPage.form.firstNamePlaceholder} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t.contactPage.form.lastName}</Label>
                    <Input id="lastName" placeholder={t.contactPage.form.lastNamePlaceholder} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">{t.contactPage.form.email}</Label>
                  <Input id="email" type="email" placeholder={t.contactPage.form.emailPlaceholder} />
                </div>
                <div>
                  <Label htmlFor="topic">{t.contactPage.form.topic}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contactPage.form.topicPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registration">{t.contactPage.form.topics.registration}</SelectItem>
                      <SelectItem value="documents">{t.contactPage.form.topics.documents}</SelectItem>
                      <SelectItem value="volunteer">{t.contactPage.form.topics.volunteer}</SelectItem>
                      <SelectItem value="membership">{t.contactPage.form.topics.membership}</SelectItem>
                      <SelectItem value="other">{t.contactPage.form.topics.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">{t.contactPage.form.message}</Label>
                  <Textarea id="message" placeholder={t.contactPage.form.messagePlaceholder} rows={5} />
                </div>
                <Button variant="hero" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  {t.contactPage.form.send}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">{t.contactPage.info.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>{t.contactPage.info.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{t.contactPage.info.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">{t.contactPage.info.hours}</div>
                      <div className="text-sm text-muted-foreground">{t.contactPage.info.hoursValue}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">{t.contactPage.quickContact.title}</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {t.contactPage.quickContact.whatsapp}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    {t.contactPage.quickContact.messenger}
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">{t.contactPage.banking.title}</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>{t.contactPage.banking.bank}:</strong> Sparkasse Kaiserslautern</div>
                  <div><strong>IBAN:</strong> {t.contactPage.banking.iban}</div>
                  <div><strong>BIC:</strong> {t.contactPage.banking.bic}</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;