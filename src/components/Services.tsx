import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Berufsorientierung",
      subtitle: "Career Guidance",
      description: "Free guidance on dual training opportunities in Germany, helping you find the right career path.",
      features: ["Vocational Training Advice", "Industry Insights", "Career Planning", "Employer Connections"],
      icon: "🎯",
      color: "primary"
    },
    {
      title: "KAUSA Project",
      subtitle: "Specialized Training",
      description: "Advising on truck driver recruitment and specialized vocational training programs.",
      features: ["Truck Driver Training", "License Support", "Job Placement", "Ongoing Support"],
      icon: "🚛",
      color: "secondary"
    },
    {
      title: "Document Support",
      subtitle: "CV & Certificate Help",
      description: "Assistance with CV creation, certificate recognition, and document translation.",
      features: ["CV Creation", "Certificate Recognition", "Translation Services", "Document Review"],
      icon: "📋",
      color: "success"
    },
    {
      title: "Community Network",
      subtitle: "Regional Groups",
      description: "24 WhatsApp groups connecting Tunisian families across all German regions.",
      features: ["Regional Groups", "Peer Support", "Information Sharing", "Cultural Events"],
      icon: "🤝",
      color: "accent"
    }
  ];

  const professionalFields = [
    { name: "Gesundheit", nameEn: "Healthcare", icon: "🏥" },
    { name: "Technik", nameEn: "Technology", icon: "⚙️" },
    { name: "Sozial", nameEn: "Social Work", icon: "🤲" },
    { name: "Management", nameEn: "Management", icon: "📊" },
  ];

  const getServiceColor = (color: string) => {
    const colors = {
      primary: "bg-primary/10 border-primary/20",
      secondary: "bg-secondary/10 border-secondary/20",
      success: "bg-success/10 border-success/20",
      accent: "bg-accent/10 border-accent/20"
    };
    return colors[color as keyof typeof colors] || "bg-muted/10 border-muted/20";
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive support services designed to help Tunisian families navigate 
            their integration journey in Germany successfully.
          </p>
        </div>

        {/* Main services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${getServiceColor(service.color)}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional fields */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Fields Open to Tunisians
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {professionalFields.map((field, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{field.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{field.name}</h4>
                  <p className="text-sm text-muted-foreground">{field.nameEn}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Your Journey with TuniBless
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Register", description: "Join based on your region" },
              { step: "2", title: "Connect", description: "Join WhatsApp group" },
              { step: "3", title: "Prepare", description: "Upload documents & get CV support" },
              { step: "4", title: "Succeed", description: "Get connected with employers" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-primary border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-lg mb-6 text-white/90">
                Join thousands of Tunisian families who have successfully integrated into German society with our support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Register Now
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download Documents
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;