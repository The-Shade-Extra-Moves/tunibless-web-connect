import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Calendar, 
  Users, 
  Phone,
  Mail,
  ArrowRight,
  Heart,
  Zap,
  Shield
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { CONFIG, getWhatsAppLink, getContactEmail, getPhoneLink } from "@/lib/config";

interface ServicesCTAProps {
  className?: string;
}

export const ServicesCTA = ({ className = "" }: ServicesCTAProps) => {
  const { t, language } = useI18n();

  const ctaOptions = [
    {
      icon: MessageCircle,
      title: t.services?.cta?.whatsapp || "Join WhatsApp Group",
      description: "Treten Sie unserer aktiven WhatsApp-Community bei und erhalten Sie sofortigen Support",
      action: () => window.open(getWhatsAppLink(), '_blank'),
      buttonText: "WhatsApp beitreten",
      variant: "default" as const,
      gradient: "from-green-500 to-green-600",
      badge: "Sofort verfügbar"
    },
    {
      icon: Calendar,
      title: t.services?.cta?.consultation || "Book Consultation",
      description: "Buchen Sie einen persönlichen Beratungstermin mit unseren Experten",
      action: () => window.location.href = '/contact',
      buttonText: "Termin buchen",
      variant: "outline" as const,
      gradient: "from-blue-500 to-blue-600",
      badge: "Kostenlos"
    },
    {
      icon: Users,
      title: t.services?.cta?.community || "Join Community",
      description: "Werden Sie Teil unserer wachsenden Community von erfolgreichen Mitgliedern",
      action: () => window.location.href = '/member',
      buttonText: "Community beitreten",
      variant: "outline" as const,
      gradient: "from-purple-500 to-purple-600",
      badge: "Exklusiv"
    }
  ];

  const quickContacts = [
    {
      icon: Phone,
      label: "Telefon",
      value: CONFIG.contact.phone,
      action: () => window.open(getPhoneLink(), '_self')
    },
    {
      icon: Mail,
      label: "Email",
      value: CONFIG.contact.email,
      action: () => window.open(getContactEmail(), '_self')
    }
  ];

  const supportFeatures = [
    {
      icon: Zap,
      title: "Schnelle Antworten",
      description: "Durchschnittlich 2 Stunden Antwortzeit"
    },
    {
      icon: Shield,
      title: "Vertrauenswürdig",
      description: "Über 1000 erfolgreiche Beratungen"
    },
    {
      icon: Heart,
      title: "Persönlich",
      description: "Individuelle Betreuung für jeden"
    }
  ];

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
            <MessageCircle className="w-4 h-4 mr-2" />
            Support & Beratung
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.services?.cta?.title || "Need personal consultation?"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services?.cta?.description || "Our team is available for individual questions and support."}
          </p>
        </motion.div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/20 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${option.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${option.gradient} text-white`}>
                      <option.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {option.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <Button
                    variant={option.variant}
                    onClick={option.action}
                    className="w-full gap-2 group"
                  >
                    {option.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Support Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Direkter Kontakt
            </h3>
            <p className="text-muted-foreground">
              Erreichen Sie uns direkt für dringende Fragen
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {quickContacts.map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={contact.action}
                  className="gap-3 p-4 h-auto flex-col sm:flex-row bg-background hover:bg-muted"
                >
                  <contact.icon className="w-5 h-5 text-primary" />
                  <div className="text-center sm:text-left">
                    <div className="font-medium">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Unser Support-Team ist Mo-Fr von 9:00-18:00 Uhr für Sie da.
            <br />
            Alle Beratungen sind kostenlos und vertraulich.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesCTA;
