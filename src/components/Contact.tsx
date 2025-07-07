import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "tunibless@gmail.com",
      description: "General inquiries and support",
      icon: "📧"
    },
    {
      title: "Address",
      value: "Husarenäcker 4, 67659 Kaiserslautern",
      description: "Registered office location",
      icon: "📍"
    },
    {
      title: "Bank Details",
      value: "Sparkasse Kaiserslautern",
      description: "IBAN: DE14 5405 0220 0000 6402 68",
      icon: "🏦"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook Page",
      url: "https://www.facebook.com/TuniBless",
      description: "Follow our updates and announcements",
      icon: "📘"
    },
    {
      name: "Facebook Group",
      url: "https://www.facebook.com/groups/399441904483291",
      description: "TuniBless Initiative zur Ausbildung",
      icon: "👥"
    },
    {
      name: "Current Website",
      url: "https://sites.google.com/view/ausbildungfuertunesier",
      description: "Our current information hub",
      icon: "🌐"
    }
  ];

  const documents = [
    { name: "Satzung arabisch", description: "Association statute in Arabic" },
    { name: "Flyer arabisch", description: "Mission flyer in Arabic" },
    { name: "Mitgliedsantrag", description: "Membership application form" },
    { name: "Erklärung zur Impfung", description: "Vaccination declaration" },
    { name: "Vollmacht zur Anerkennung", description: "Power of attorney for recognition" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your integration journey? Contact us today or join our community platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-lg text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <Card className="bg-gradient-primary border-0 text-white">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Register Now</h4>
                  <p className="text-sm text-white/90 mb-4">
                    Start your integration journey today
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    Register
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-success/10 border-success/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Monthly Live Sessions</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our Facebook Live Q&A sessions
                  </p>
                  <Button variant="success" className="w-full">
                    Join Session
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">WhatsApp Groups</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    24 regional groups available
                  </p>
                  <Button variant="outline" className="w-full">
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Connect with Us Online
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{link.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    Visit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Important Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">{doc.name}</h4>
                      <p className="text-xs text-muted-foreground">{doc.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      📄
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="text-center">
          <Card className="bg-muted/50 border-0">
            <CardContent className="p-8">
              <h4 className="font-semibold text-foreground mb-4">
                Legal Notice & Disclaimer
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                TuniBless e.V. is a registered non-profit association in Germany. 
                We provide guidance and support but cannot guarantee specific outcomes. 
                All external links are provided for information purposes only.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>© 2024 TuniBless e.V. - Alle Rechte vorbehalten</p>
                <p>Registered in Germany as a gemeinnütziger Verein</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;