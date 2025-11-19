import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailPopup(true);
    setTimeout(() => setShowEmailPopup(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1419] via-[#1a1f2e] to-[#0F1419] text-foreground overflow-hidden">
      <div className="grid-pattern fixed inset-0 opacity-20" />

      <div className="relative z-10">
        <header className="container mx-auto px-6 py-8">
          <nav className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 md:gap-6 animate-fade-in"
            >
              <img
                src="https://cdn.poehali.dev/files/942a20c3-aa82-4fd6-ab72-0d07f7644ce0.png"
                alt="Tenderex Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain animate-float"
              />
              <div>
                <h1 className="text-2xl md:text-4xl font-bold glow-cyan bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Tenderex
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  3D Creatives for Mobile Games
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center">
              <Link to="/" className="text-primary font-semibold">
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <button
                onClick={handleEmailClick}
                className="group relative px-4 md:px-6 py-2 md:py-3 overflow-hidden bg-primary/10 border border-primary/30 rounded-lg hover:border-primary transition-all duration-300 inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2 text-primary font-semibold text-sm md:text-base">
                  <Icon
                    name="Mail"
                    size={16}
                    className="md:w-[18px] md:h-[18px]"
                  />
                  Contact
                </span>
              </button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-purple bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent leading-tight">
              We create
              <br />
              the impossible
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Powerful 3D creatives for mobile games
            </p>
          </section>

          <section className="mb-20 flex justify-center">
            <div className="relative group w-full max-w-4xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse" />

              <div className="relative bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/k65aDf1SFV0"
                    title="Tenderex Portfolio"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "Trophy",
                title: "Top-Tier Graphics",
                description:
                  "Stunning 3D creatives that attract 47% more user attention than static ads.",
                color: "primary",
              },
              {
                icon: "Target",
                title: "Conversion Focused",
                description:
                  'We don\'t just make "pretty". We design every frame to highlight gameplay and drive action — installs.',
                color: "secondary",
              },
              {
                icon: "Gamepad2",
                title: "Turnkey for Any Genre",
                description:
                  "From hyper-casual to complex RPGs. We dive deep into your game mechanics and find the most compelling visual language.",
                color: "accent",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-${feature.color}/20 to-${feature.color}/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}
                />
                <div className="relative">
                  <div
                    className={`inline-flex p-4 bg-${feature.color}/10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={feature.icon as any}
                      size={28}
                      className={`text-${feature.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-20 py-12 px-8 md:px-16 bg-gradient-to-br from-accent/10 via-secondary/5 to-primary/10 rounded-2xl border border-accent/20 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex p-4 bg-accent/10 rounded-lg mb-6">
                <Icon name="DollarSign" size={32} className="text-accent" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 glow-magenta bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                We Work With Any Budget
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We know that awesome creatives are needed by both indie studios
                and large companies. That's why we offer flexible cooperation
                formats: from a single viral video to a full package of
                creatives for a month. We'll focus on the most effective task
                for you.
              </p>
            </div>
          </section>

          <section className="text-center py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 glow-magenta bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Ready to create something amazing?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us and let's discuss your project
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleEmailClick}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] flex items-center gap-3"
              >
                <Icon name="Mail" size={20} />
                Send Request
              </button>
              <a
                href="https://t.me/TG_addG"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Icon name="Send" size={20} />
                Telegram
              </a>
            </div>
          </section>
        </main>

        <footer className="container mx-auto px-6 py-12 mt-20 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/files/942a20c3-aa82-4fd6-ab72-0d07f7644ce0.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-sm text-muted-foreground">
                © 2024 Tenderex. All rights reserved.
              </span>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon name="Instagram" size={22} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon name="Linkedin" size={22} />
              </a>
              <a
                href="https://www.youtube.com/@Tender_EX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon name="Youtube" size={22} />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {showEmailPopup && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg shadow-2xl border border-primary/30 max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Mail" size={24} className="text-background" />
              <h4 className="text-lg font-bold text-background">Наша почта</h4>
            </div>
            <p className="text-background/90 font-semibold text-lg">
              adtenderex@gmail.com
            </p>
            <button
              onClick={() => setShowEmailPopup(false)}
              className="mt-4 text-background/80 hover:text-background text-sm underline"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
