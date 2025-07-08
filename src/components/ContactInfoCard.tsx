import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";
import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import CONFIG, { getContactEmail, getLocalizedContent } from "@/lib/config";

interface ContactInfoCardProps {
  id?: string;
}

const ContactInfoCard = ({ id = "info" }: ContactInfoCardProps) => {
  const { t, language } = useI18n();

  const contactItems = [
    {
      icon: Mail,
      label: t.contactPage.info.email,
      value: CONFIG.contact.email,
      href: getContactEmail(),
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: MapPin,
      label: t.contactPage.info.address,
      value: CONFIG.contact.address.full,
      href: CONFIG.links.googleMaps,
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Clock,
      label: t.contactPage.info.hours,
      value: getLocalizedContent(CONFIG.contact.hours, language),
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: MessageSquare,
      label: t.contactPage.info.responseTime,
      value: "Within 24 hours",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{t.contactPage.info.title}</CardTitle>
          <CardDescription>{t.contactPage.info.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    item.href 
                      ? 'hover:bg-muted/50 cursor-pointer hover:scale-105' 
                      : 'bg-muted/20'
                  }`}
                >
                  <div className={`p-2 rounded-full bg-background shadow-sm ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfoCard;
