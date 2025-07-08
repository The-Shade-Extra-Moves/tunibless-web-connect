import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, UserPlus } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Service } from "@/lib/services-data";
import CONFIG, { getWhatsAppLink } from "@/lib/config";

interface ServiceCardProps {
  service: Service;
  searchQuery?: string;
  index: number;
}

const ServiceCard = ({ service, searchQuery, index }: ServiceCardProps) => {
  const { language } = useI18n();

  const handleAction = () => {
    if (service.downloadUrl) {
      // Trigger download
      const link = document.createElement('a');
      link.href = service.downloadUrl;
      link.download = service.downloadUrl.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (service.externalUrl) {
      // Open external link
      window.open(service.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (service.action === 'join') {
      // Join WhatsApp group
      window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
    }
  };

  const getActionIcon = () => {
    if (service.downloadUrl) return Download;
    if (service.externalUrl) return ExternalLink;
    if (service.action === 'join') return UserPlus;
    return Download;
  };

  const getActionText = () => {
    if (service.downloadUrl) return 'Download';
    if (service.externalUrl) return 'Open';
    if (service.action === 'join') return 'Join';
    return 'View';
  };

  const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const ActionIcon = getActionIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-muted hover:border-primary/20">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <Badge variant="outline" className="text-xs w-fit">
                  {service.type}
                </Badge>
                {service.popular && (
                  <Badge variant="default" className="text-xs w-fit">
                    🔥 Popular
                  </Badge>
                )}
                {service.new && (
                  <Badge variant="destructive" className="text-xs w-fit">
                    ✨ New
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <CardTitle className="text-lg leading-tight">
            {highlightText(service.title[language], searchQuery)}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          <CardDescription className="flex-1 mb-4 leading-relaxed">
            {highlightText(service.description[language], searchQuery)}
          </CardDescription>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {service.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {service.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{service.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Action Button */}
          <Button 
            onClick={handleAction}
            className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            variant="outline"
          >
            <ActionIcon className="h-4 w-4" />
            {getActionText()}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
