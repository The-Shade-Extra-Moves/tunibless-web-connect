import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n-context";
import { Send, Save, FileText } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  message: string;
}

interface ContactFormProps {
  id?: string;
}

const ContactForm = ({ id = "form" }: ContactFormProps) => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // Load draft from localStorage on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("contact-form-draft");
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        setFormData(draft);
      } catch (error) {
        console.error("Error loading draft:", error);
      }
    }
  }, []);

  // Save draft to localStorage
  const saveDraft = () => {
    localStorage.setItem("contact-form-draft", JSON.stringify(formData));
    toast({
      title: t.contactPage.form.success,
      description: t.contactPage.form.saveDraft,
    });
  };

  // Load draft from localStorage
  const loadDraft = () => {
    const savedDraft = localStorage.getItem("contact-form-draft");
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        setFormData(draft);
        toast({
          title: t.common.success,
          description: t.contactPage.form.loadDraft,
        });
      } catch (error) {
        toast({
          title: t.common.error,
          description: t.contactPage.form.error,
        });
      }
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t.contactPage.form.required;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t.contactPage.form.required;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.contactPage.form.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contactPage.form.invalidEmail;
    }
    if (!formData.topic) {
      newErrors.topic = t.contactPage.form.required;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.contactPage.form.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear form and draft on successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        message: "",
      });
      localStorage.removeItem("contact-form-draft");
      
      toast({
        title: t.contactPage.form.success,
        description: t.contactPage.form.success,
      });
    } catch (error) {
      toast({
        title: t.common.error,
        description: t.contactPage.form.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{t.contactPage.form.title}</CardTitle>
          <CardDescription>{t.contactPage.form.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t.contactPage.form.firstName}</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder={t.contactPage.form.firstNamePlaceholder}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t.contactPage.form.lastName}</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder={t.contactPage.form.lastNamePlaceholder}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">{t.contactPage.form.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={t.contactPage.form.emailPlaceholder}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Topic Field */}
            <div className="space-y-2">
              <Label htmlFor="topic">{t.contactPage.form.topic}</Label>
              <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
                <SelectTrigger className={errors.topic ? "border-destructive" : ""}>
                  <SelectValue placeholder={t.contactPage.form.topicPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="registration">{t.contactPage.form.topics.registration}</SelectItem>
                  <SelectItem value="documents">{t.contactPage.form.topics.documents}</SelectItem>
                  <SelectItem value="volunteer">{t.contactPage.form.topics.volunteer}</SelectItem>
                  <SelectItem value="membership">{t.contactPage.form.topics.membership}</SelectItem>
                  <SelectItem value="technical">{t.contactPage.form.topics.technical}</SelectItem>
                  <SelectItem value="feedback">{t.contactPage.form.topics.feedback}</SelectItem>
                  <SelectItem value="other">{t.contactPage.form.topics.other}</SelectItem>
                </SelectContent>
              </Select>
              {errors.topic && (
                <p className="text-sm text-destructive">{errors.topic}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message">{t.contactPage.form.message}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder={t.contactPage.form.messagePlaceholder}
                rows={5}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 gap-2"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                    {t.contactPage.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contactPage.form.send}
                  </>
                )}
              </Button>
              
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={saveDraft}
                  className="gap-2"
                >
                  <Save className="h-4 w-4" />
                  {t.contactPage.form.saveDraft}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={loadDraft}
                  className="gap-2"
                >
                  <FileText className="h-4 w-4" />
                  {t.contactPage.form.loadDraft}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
