import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Cloud, 
  Container, 
  Database, 
  GitBranch, 
  Monitor, 
  Shield, 
  Zap,
  Settings,
  Terminal
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      color: "text-primary"
    },
    {
      title: "Containerization",
      icon: <Container className="w-6 h-6" />,
      skills: ["Docker", "Kubernetes", "Podman", "Docker Compose"],
      color: "text-code-purple"
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Git", "ArgoCD"],
      color: "text-terminal-green"
    },
    {
      title: "Infrastructure as Code",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      color: "text-warning-orange"
    },
    {
      title: "Monitoring & Logging",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
      color: "text-primary"
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "S3"],
      color: "text-code-purple"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Security Scanning", "IAM", "SSL/TLS", "Vault", "OWASP"],
      color: "text-terminal-green"
    },
    {
      title: "Scripting & Automation",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Bash", "Python", "PowerShell", "YAML", "JSON"],
      color: "text-warning-orange"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DevOps toolkit spanning cloud infrastructure, automation, and modern deployment practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-gradient-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold ml-3 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border border-primary/20 shadow-glow">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2">Performance Optimization</h4>
              <p className="text-muted-foreground text-sm">Reduced deployment time by 75% through automated CI/CD pipelines</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border border-code-purple/20 shadow-glow">
            <CardContent className="p-6 text-center">
              <Server className="w-8 h-8 text-code-purple mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2">Infrastructure Scaling</h4>
              <p className="text-muted-foreground text-sm">Managed auto-scaling architecture serving 1M+ requests daily</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border border-terminal-green/20 shadow-glow">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-terminal-green mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2">Security Implementation</h4>
              <p className="text-muted-foreground text-sm">Implemented zero-trust security model across cloud infrastructure</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;