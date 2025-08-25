import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next DevOps challenge or explore collaboration opportunities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* LinkedIn Card */}
          <Card className="bg-gradient-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground mb-6">Connect with me professionally</p>
              <Button variant="social" size="lg" asChild className="w-full">
                <a 
                  href="https://www.linkedin.com/in/satyajit-das-86bbb948/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Profile
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* GitHub Card */}
          <Card className="bg-gradient-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-foreground/20 group-hover:bg-foreground/30 transition-colors">
                  <Github className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-6">Explore my code repositories</p>
              <Button variant="social" size="lg" asChild className="w-full">
                <a 
                  href="https://github.com/satya-jit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Repositories
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <Card className="bg-gradient-card border border-primary/20 shadow-glow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:satyajit@example.com" className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Available Globally</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-muted/50">Remote Work</Badge>
              <Badge variant="secondary" className="bg-muted/50">Consulting</Badge>
              <Badge variant="secondary" className="bg-muted/50">Full-time</Badge>
              <Badge variant="secondary" className="bg-muted/50">Contract</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2024 Satyajit Das. Built with modern DevOps practices.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;