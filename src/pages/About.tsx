import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1419] via-[#1a1f2e] to-[#0F1419] text-foreground overflow-hidden">
      <div className="grid-pattern fixed inset-0 opacity-20" />

      <div className="relative z-10">
        <header className="container mx-auto px-6 py-8">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-6 animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/9193e91d-2324-4ed7-b25c-b0fab5d887e7/files/27bd226f-7995-4cf2-979c-79be390d3254.jpg"
                alt="TenderEx Logo"
                className="w-16 h-16 object-contain animate-float"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold glow-cyan bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Tenderex
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1">
                  3D-креативы для мобильных игр
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Главная
              </Link>
              <Link to="/about" className="text-primary font-semibold">
                О нас
              </Link>
              <a
                href="mailto:adtenderex@gmail.com"
                className="group relative px-6 py-3 overflow-hidden bg-primary/10 border border-primary/30 rounded-lg hover:border-primary transition-all duration-300 inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2 text-primary font-semibold">
                  <Icon name="Mail" size={18} />
                  Связаться
                </span>
              </a>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <section className="mb-16 text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 glow-purple bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Мы — фанаты 3D-графики
              <br />и мобильного гейминга
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Наша миссия — помогать играм находить своих игроков с помощью силы
              визуала
            </p>
          </section>

          <div className="space-y-12 mb-16">
            <section className="relative group p-10 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-300 animate-fade-in">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg">
                    <Icon name="Target" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">
                    Наша философия
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы верим, что рекламный креатив — это не расходы, а
                  инвестиция. Инвестиция в рост и узнаваемость вашего продукта.
                  Поэтому в основе каждого нашего проекта лежит глубокий анализ
                  и фокус на бизнес-задаче клиента.
                </p>
              </div>
            </section>

            <section className="relative group p-10 bg-card/50 backdrop-blur-sm border border-secondary/10 rounded-2xl hover:border-secondary/30 transition-all duration-300 animate-fade-in">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-4 bg-secondary/10 rounded-lg">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary">
                    Наш бэкграунд
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Мы не теоретики. Основатели студии — бывшие 3D-креаторы,
                  которые своими руками создали сотни рекламных роликов для
                  мобильных игр. Мы прошли весь путь от идеи до запуска кампании
                  и знаем изнутри, какой креатив сработает в шумной ленте
                  соцсетей, а какой — нет. Мы чувствуем тренды, потому что сами
                  были их частью.
                </p>
              </div>
            </section>

            <section className="relative group p-10 bg-card/50 backdrop-blur-sm border border-accent/10 rounded-2xl hover:border-accent/30 transition-all duration-300 animate-fade-in">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex p-4 bg-accent/10 rounded-lg">
                    <Icon name="Cpu" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent">
                    Наш технологический стэк
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Мы используем мощь современного пайплайна, чтобы работать
                  быстро и без потерь в качестве:
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Blender",
                    "Maya",
                    "Cinema 4D",
                    "After Effects",
                    "Unreal Engine 5",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Используем Unreal Engine 5 для молниеносного прототипирования
                  и рендера сложнейших сцен.
                </p>
              </div>
            </section>
          </div>

          <section className="mb-16">
            <h3 className="text-4xl font-bold mb-8 text-center glow-cyan bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Почему выбирают нас
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "Users",
                  title: "Создано креаторами для креаторов",
                  description:
                    "Мы говорим с вами на одном языке и понимаем боль геймдев-маркетинга.",
                },
                {
                  icon: "Gamepad2",
                  title: "Экспертиза в гейминге",
                  description:
                    "Мы сами играем и понимаем, что цепляет игроков в разных жанрах.",
                },
                {
                  icon: "Zap",
                  title: "Технологический подход",
                  description:
                    "Используем современный стэк программ, чтобы давать лучший результат быстрее.",
                },
                {
                  icon: "Eye",
                  title: "Прозрачность",
                  description: "Вы всегда в курсе этапов работы.",
                },
                {
                  icon: "TrendingUp",
                  title: "Нацеленность на результат",
                  description: "Наш успех — это ваш рост LTV и снижение CPI.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 inline-flex p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 glow-magenta bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Готовы начать работу?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами, и мы обсудим ваш проект
            </p>
            <a
              href="mailto:adtenderex@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.6)]"
            >
              <Icon name="Send" size={20} />
              Написать нам
            </a>
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
              {["Instagram", "Linkedin", "Youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon name={social as any} size={22} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
