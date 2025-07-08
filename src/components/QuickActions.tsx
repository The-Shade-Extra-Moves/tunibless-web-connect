import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { MessageCircle, Send, Mail, Share2 } from "lucide-react";
import CONFIG, { getWhatsAppLink, getContactEmail } from "@/lib/config";

interface QuickActionsProps {
  id?: string;
}

const QuickActions = ({ id = "quick-contact" }: QuickActionsProps) => {
  const { t } = useI18n();

  const quickLinks = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: t.contactPage.quickContact.whatsapp,
      description: t.contactPage.quickContact.whatsappDesc,
      href: getWhatsAppLink(),
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      hoverColor: "hover:bg-green-100 dark:hover:bg-green-950/40"
    },
    {
      id: "messenger",
      icon: Send,
      title: t.contactPage.quickContact.messenger,
      description: t.contactPage.quickContact.messengerDesc,
      href: CONFIG.links.facebookMessenger,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      hoverColor: "hover:bg-blue-100 dark:hover:bg-blue-950/40"
    },
    {
      id: "email",
      icon: Mail,
      title: t.contactPage.quickContact.email,
      description: t.contactPage.quickContact.emailDesc,
      href: getContactEmail(),
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      hoverColor: "hover:bg-orange-100 dark:hover:bg-orange-950/40"
    },
    {
      id: "telegram",
      icon: Share2,
      title: t.contactPage.quickContact.telegram,
      description: t.contactPage.quickContact.telegramDesc,
      href: "https://t.me/your-channel",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      hoverColor: "hover:bg-purple-100 dark:hover:bg-purple-950/40"
    }
  ];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{t.contactPage.quickContact.title}</CardTitle>
          <CardDescription>{t.contactPage.quickContact.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full h-auto p-4 ${link.bgColor} ${link.hoverColor} border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center space-y-3 text-center"
                    >
                      <div className={`p-3 rounded-full ${link.bgColor} ${link.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className={`font-semibold ${link.color}`}>{link.title}</h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuickActions;
