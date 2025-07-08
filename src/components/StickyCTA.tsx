import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Link } from "react-router-dom";
import CONFIG, { getWhatsAppLink } from "@/lib/config";

const StickyCTA = () => {
  const { t, isRTL } = useI18n();

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <div className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 flex flex-col gap-3`}>
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-3 h-auto group hover:scale-110 transition-all duration-300"
        size="sm"
        title={t.contact.joinWhatsApp}
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
        <span className="sr-only">{t.contact.joinWhatsApp}</span>
      </Button>

      {/* Register Button */}
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 shadow-lg rounded-full p-3 h-auto group hover:scale-110 transition-all duration-300"
        size="sm"
        title={t.nav.registration}
      >
        <Link to={CONFIG.routes.registration}>
          <UserPlus className="h-6 w-6 group-hover:animate-pulse" />
          <span className="sr-only">{t.nav.registration}</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyCTA;
