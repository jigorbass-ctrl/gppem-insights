import PageLayout from "@/components/layout/PageLayout";
import EventCard from "@/components/ui/EventCard";
import eventSeminar from "@/assets/event-seminar.jpg";

const events = [
  {
    title: "Seminário de Práticas Pedagógicas 2024",
    date: "24/10/2024",
    time: "14:00 - 18:00",
    location: "Auditório Central - UERN",
    description:
      "Encontro anual para discussão de metodologias inovadoras no ensino de música. Palestrantes convidados de diversas instituições do Nordeste.",
    imageUrl: eventSeminar,
    featured: true,
  },
  {
    title: "Workshop de Tecnologias Musicais",
    date: "15/Nov",
    time: "09:00 - 12:00",
    location: "Laboratório de Música - DART",
  },
  {
    title: "Roda de Conversa: Educação Musical na Primeira Infância",
    date: "22/Nov",
    time: "14:00 - 16:00",
    location: "Sala de Seminários - DART",
  },
  {
    title: "Apresentação de Pesquisas em Andamento",
    date: "05/Dez",
    time: "10:00 - 12:00",
    location: "Auditório do DART",
  },
  {
    title: "Encerramento das Atividades 2024",
    date: "12/Dez",
    time: "19:00",
    location: "Teatro Municipal",
  },
];

const Eventos = () => {
  return (
    <PageLayout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-8 pb-6 px-4 lg:pt-12 lg:pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Eventos</h1>
          <p className="text-primary-foreground/80 text-sm">
            Confira nossa agenda de eventos e atividades
          </p>
        </div>
      </div>

      <main className="px-4 pt-6 pb-8 space-y-6 max-w-3xl mx-auto">
        {/* Featured Event */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">star</span>
            <h2 className="text-lg font-bold text-foreground">Destaque</h2>
          </div>
          <EventCard {...events[0]} />
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              <h2 className="text-lg font-bold text-foreground">Próximos Eventos</h2>
            </div>
          </div>
          <div className="space-y-3">
            {events.slice(1).map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </section>

        {/* Calendar CTA */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl">notifications</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-card-foreground text-sm mb-1">
                Fique por dentro
              </h3>
              <p className="text-xs text-muted-foreground">
                Receba notificações sobre novos eventos e atividades do GPPEM.
              </p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:bg-primary/90 transition-colors">
              Inscrever
            </button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Eventos;
