import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { MapPin, Navigation, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface EmbeddedMapProps {
  id?: string;
}

const EmbeddedMap = ({ id = "map" }: EmbeddedMapProps) => {
  const { t } = useI18n();
  const [isExpanded, setIsExpanded] = useState(false);

  const address = "Husarenäcker 4, 67659 Kaiserslautern, Germany";
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {t.contactPage.map.title}
              </CardTitle>
              <CardDescription>{t.contactPage.map.subtitle}</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardHeader>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="space-y-6">
              {/* Address Information */}
              <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{address}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    TuniBless e.V. Headquarters
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="relative overflow-hidden rounded-lg border border-border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.1234567890123!2d7.751!3d49.444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI2JzM4LjQiTiA3wrA0NSc3LjIiRQ!5e0!3m2!1sen!2sde!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TuniBless e.V. Location"
                    className="absolute inset-0"
                  />
                  {/* Fallback content */}
                  <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Loading map...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="flex-1 gap-2"
                  size="lg"
                >
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4" />
                    {t.contactPage.map.directions}
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="gap-2"
                >
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t.contactPage.map.viewLarger}
                  </a>
                </Button>
              </div>

              {/* Additional Information */}
              <div className="p-4 bg-secondary/20 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-foreground mb-2">Getting Here</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• By car: Free parking available nearby</p>
                  <p>• By train: Kaiserslautern Hauptbahnhof (10 min walk)</p>
                  <p>• By bus: Bus lines 101, 102, 103 (Husarenäcker stop)</p>
                </div>
              </div>
            </CardContent>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};

export default EmbeddedMap;
