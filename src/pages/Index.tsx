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
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-6 animate-fade-in">
              <img
                src="https://cdn.poehali.dev/files/942a20c3-aa82-4fd6-ab72-0d07f7644ce0.png"
                alt="Tenderex Logo"
                className="w-16 h-16 object-contain animate-float"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold glow-cyan bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  TenderEx
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  3D-креативы для мобильных игр
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <Link to="/" className="text-primary font-semibold">
                Главная
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                О нас
              </Link>
              <button
                onClick={handleEmailClick}
                className="group relative px-6 py-3 overflow-hidden bg-primary/10 border border-primary/30 rounded-lg hover:border-primary transition-all duration-300 inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2 text-primary font-semibold">
                  <Icon name="Mail" size={18} />
                  Связаться
                </span>
              </button>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-16">
          <section className="mb-20 text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 glow-purple bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Мы создаём
              <br />
              невозможное
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Мощные 3D креативы для мобильных игр
            </p>
          </section>

          <section className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse" />

              <div className="relative bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
                        <Icon
                          name="Play"
                          size={36}
                          className="text-primary ml-1 group-hover:scale-125 transition-transform"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 glow-cyan text-primary">
                      Наше Портфолио
                    </h3>
                    <p className="text-muted-foreground">
                      Загрузите ваше видео, чтобы продемонстрировать проекты
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]">
                        Загрузить видео
                      </button>
                      <button className="px-6 py-3 bg-secondary/10 border border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/20 transition-all duration-300 hover:scale-105">
                        Вставить ссылку YouTube
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "Trophy",
                title: "Высшая лига графики",
                description:
                  "Крутые 3D-креативы, которые на 47% чаще привлекают внимание пользователей, чем статичная реклама.",
                color: "primary",
              },
              {
                icon: "Target",
                title: "Фокус на конверсии",
                description:
                  'Мы не просто делаем "красиво". Мы продумываем каждый кадр так, чтобы подчеркнуть геймплей и спровоцировать действие — установку.',
                color: "secondary",
              },
              {
                icon: "Gamepad2",
                title: "Под ключ для любых жанров",
                description:
                  "От гиперказуала до сложных RPG. Мы глубоко погружаемся в механику вашей игры и находим самый убедительный визуальный язык.",
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

          <section className="text-center py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 glow-magenta bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Готовы создать что-то удивительное?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Напишите нам, и мы обсудим ваш проект
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleEmailClick}
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] flex items-center gap-3"
              >
                <Icon name="Mail" size={20} />
                Отправить заявку
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
                src="https://cdn.poehali.dev/projects/9193e91d-2324-4ed7-b25c-b0fab5d887e7/files/27bd226f-7995-4cf2-979c-79be390d3254.jpg"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-sm text-muted-foreground">
                © 2024 TenderEx. Все права защищены.
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
