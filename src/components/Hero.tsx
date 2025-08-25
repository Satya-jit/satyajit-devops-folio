import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import heroImage from "@/assets/devops-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-code-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-card border border-primary/20">
            <Terminal className="w-4 h-4 mr-2" />
            DevOps Engineer
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Satyajit Das
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Orchestrating scalable infrastructure and streamlining deployment pipelines with cutting-edge DevOps practices
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Button variant="hero" size="lg" asChild>
            <a href="#skills" className="scroll-smooth">
              View My Skills
            </a>
          </Button>
          <Button variant="social" size="lg" asChild>
            <a href="#contact">
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Deployed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Achieved</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;