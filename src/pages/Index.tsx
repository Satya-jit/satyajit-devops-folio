import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
