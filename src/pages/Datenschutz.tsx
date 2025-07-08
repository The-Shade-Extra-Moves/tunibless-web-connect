import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-xl text-muted-foreground">
              Schutz Ihrer personenbezogenen Daten
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Datenschutz auf einen Blick</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Allgemeine Hinweise</h4>
                  <p className="text-sm text-muted-foreground">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                    Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                    denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Datenerfassung auf dieser Website</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Hosting und Content Delivery Networks (CDN)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Externes Hosting</h4>
                  <p className="text-sm text-muted-foreground">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                    die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann 
                    es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, 
                    Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Datenschutz</h4>
                  <p className="text-sm text-muted-foreground">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                    Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen 
                    sowie dieser Datenschutzerklärung.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Hinweis zur verantwortlichen Stelle</h4>
                  <p className="text-sm text-muted-foreground">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    TuniBless e.V.<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland<br /><br />
                    Telefon: +49 (0) 123 456789<br />
                    E-Mail: datenschutz@tunibless.org
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Datenerfassung auf dieser Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner 
                    keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
                    effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt 
                    werden und die Ihr Browser speichert.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Server-Log-Dateien</h4>
                  <p className="text-sm text-muted-foreground">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Kontaktformular</h4>
                  <p className="text-sm text-muted-foreground">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                    von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Registrierung auf dieser Website</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen zu nutzen. Die dazu 
                    eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, 
                    für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen 
                    vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Soziale Medien</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">
                    Wir nutzen WhatsApp für die Kommunikation mit unseren Mitgliedern und Interessenten. Wenn Sie 
                    unseren WhatsApp-Gruppen beitreten, stimmen Sie der Verarbeitung Ihrer Telefonnummer und der 
                    Nachrichten gemäß den WhatsApp-Datenschutzbestimmungen zu.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Facebook</h4>
                  <p className="text-sm text-muted-foreground">
                    Auf dieser Website sind Funktionen des sozialen Netzwerks Facebook integriert. Diese Funktionen 
                    werden durch die Meta Platforms Ireland Limited bereitgestellt. Wenn Sie den Facebook-Button 
                    anklicken, werden Sie auf unsere Facebook-Seite weitergeleitet.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Ihre Rechte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">Auskunft, Berichtigung und Löschung</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                    oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                    haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Recht auf Datenübertragbarkeit</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines 
                    Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, 
                    maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                  <p className="text-sm text-muted-foreground">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. SSL- bzw. TLS-Verschlüsselung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                  wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                  Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in 
                  Ihrer Browserzeile.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Bei Fragen zum Datenschutz kontaktieren Sie uns unter: datenschutz@tunibless.org
            </p>
            <p className="text-sm text-muted-foreground">
              Stand: Januar 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;
