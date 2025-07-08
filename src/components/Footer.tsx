import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  ExternalLink
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Link } from "react-router-dom";
import CONFIG, { getWhatsAppLink, getContactEmail } from "@/lib/config";

const Footer = () => {
  const { t, isRTL } = useI18n();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t.footer.quickLinks,
      links: [
        { name: t.nav.home, href: CONFIG.routes.home },
        { name: t.nav.about, href: CONFIG.routes.about },
        { name: t.footer.services, href: CONFIG.routes.services },
        { name: t.nav.events, href: CONFIG.routes.events },
        { name: "FAQ", href: CONFIG.routes.faq },
        { name: t.nav.contact, href: CONFIG.routes.contact }
      ]
    },
    {
      title: t.footer.community,
      links: [
        { name: t.footer.registration, href: CONFIG.routes.registration },
        { name: t.footer.onboarding, href: CONFIG.routes.onboarding },
        { name: t.footer.roadmap, href: CONFIG.routes.roadmap },
        { name: t.footer.downloads, href: CONFIG.routes.downloads },
        { name: t.footer.glossary, href: CONFIG.routes.glossary },
        { name: t.footer.tunisia, href: CONFIG.routes.tunisia }
      ]
    },
    {
      title: t.footer.getInvolved,
      links: [
        { name: t.footer.becomeHelper, href: CONFIG.routes.volunteer },
        { name: t.footer.becomeMember, href: CONFIG.routes.member },
        { name: t.footer.donate, href: CONFIG.routes.donate },
        { name: t.footer.germany, href: CONFIG.routes.germany },
        { name: t.footer.worldwide, href: CONFIG.routes.worldwide }
      ]
    },
    {
      title: t.footer.legal,
      links: [
        { name: t.footer.imprint, href: CONFIG.routes.imprint },
        { name: t.footer.privacyPolicy, href: CONFIG.routes.privacy },
        { name: t.footer.cookies, href: CONFIG.routes.cookies }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: getWhatsAppLink(),
      icon: MessageCircle,
      color: "hover:text-green-500"
    },
    {
      name: "Facebook",
      href: CONFIG.links.facebook,
      icon: Facebook,
      color: "hover:text-blue-500"
    }
  ];

  const quickActions = [
    { name: `🚀 ${t.nav.registration}`, href: CONFIG.routes.registration, primary: true },
    { name: `📞 ${t.contact.sendMessage}`, href: CONFIG.routes.contact, primary: false },
    { name: `📄 ${t.footer.downloads}`, href: CONFIG.routes.downloads, primary: false }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="py-8 border-b border-border">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t.footer.readyNextStep}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.primary ? "default" : "outline"}
                  asChild
                  className={action.primary ? "" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
                >
                  <Link to={action.href}>
                    {action.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid gap-8 lg:grid-cols-6">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">TB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">TuniBless e.V.</h3>
                  <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                {t.footer.brandDescription}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{t.footer.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{t.footer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{t.footer.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(social.href, '_blank')}
                      className={`p-2 ${social.color}`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} TuniBless e.V. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Gemacht mit</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>für die tunesische Community</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => window.location.href = '/impressum'}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => window.location.href = '/datenschutz'}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </button>
              <button
                onClick={() => window.location.href = '/cookies'}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Regional Links */}
        <div className="py-4 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Regionale Gruppen:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['tunis', 'sfax', 'sousse', 'monastir', 'bizerte', 'gabes'].map((region) => (
                <Button
                  key={region}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.location.href = `/region/${region}`}
                  className="text-xs"
                >
                  {region.charAt(0).toUpperCase() + region.slice(1)}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
