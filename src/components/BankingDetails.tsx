import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Copy, Heart, QrCode, ExternalLink } from "lucide-react";
import CONFIG from "@/lib/config";

interface BankingDetailsProps {
  id?: string;
}

const BankingDetails = ({ id = "banking" }: BankingDetailsProps) => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [showQR, setShowQR] = useState(false);

  const bankingInfo = {
    bank: CONFIG.banking.bankName,
    iban: CONFIG.banking.iban,
    bic: CONFIG.banking.bic,
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: t.contactPage.banking.copied,
        description: `${label}: ${text}`,
      });
    } catch (error) {
      toast({
        title: t.common.error,
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            {t.contactPage.banking.title}
          </CardTitle>
          <CardDescription>{t.contactPage.banking.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Banking Information */}
          <div className="space-y-4">
            {Object.entries(bankingInfo).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg group hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground capitalize">
                    {t.contactPage.banking[key as keyof typeof t.contactPage.banking]}
                  </p>
                  <p className="font-mono text-sm font-semibold text-foreground">
                    {value}
                  </p>
                </div>
                {(key === 'iban' || key === 'bic') && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(value, key.toUpperCase())}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Purpose of Transfer */}
          <div className="p-3 bg-secondary/20 rounded-lg border-l-4 border-secondary">
            <p className="text-sm text-muted-foreground">{t.contactPage.banking.purpose}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild className="flex-1 gap-2" size="lg">
              <Link to="/donate">
                <Heart className="h-4 w-4" />
                {t.contactPage.banking.donate}
              </Link>
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowQR(!showQR)}
                className="gap-2"
              >
                <QrCode className="h-4 w-4" />
                {t.contactPage.banking.qrCode}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => copyToClipboard(bankingInfo.iban, 'IBAN')}
                className="gap-2"
              >
                <Copy className="h-4 w-4" />
                {t.contactPage.banking.copyIban}
              </Button>
            </div>
          </div>

          {/* QR Code Section */}
          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-border"
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <QrCode className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">QR Code Placeholder</p>
                    <p className="text-xs text-muted-foreground">
                      {t.contactPage.banking.qrCode}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Scan this QR code with your banking app to make a transfer
                </p>
              </div>
            </motion.div>
          )}

          {/* External Link */}
          <div className="pt-4 border-t border-border">
            <Button
              variant="link"
              asChild
              className="w-full gap-2 text-primary hover:text-primary/80"
            >
              <a
                href="https://www.sparkasse-kaiserslautern.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Visit {bankingInfo.bank}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BankingDetails;
