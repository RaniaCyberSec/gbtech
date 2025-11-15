import { GraduationCap, Briefcase, Users, ArrowRight } from 'lucide-react';

export default function CFA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cfa" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-600 rounded-full text-sm font-semibold border border-cyan-200 mb-4">
            Centre de Formation en Apprentissage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            CFA GBTech School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un tremplin vers l'excellence professionnelle
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12 border border-cyan-100">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Chez <strong className="text-cyan-600">GBTech School</strong>, notre Centre de Formation en Apprentissage (CFA) s'engage à accompagner à la fois les apprentis et les entreprises dans le développement des compétences professionnelles et humaines nécessaires à la réussite.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-4">
            Nous proposons des formations modernes, innovantes et adaptées aux besoins réels du marché du travail, conçues pour répondre aux évolutions constantes des métiers.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Nos objectifs</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <GraduationCap size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Former des professionnels qualifiés</h4>
              <p className="text-cyan-50">Opérationnels dès leur entrée dans le monde du travail.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-slate-700 p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Briefcase size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Favoriser l'alternance</h4>
              <p className="text-blue-50">Pour une immersion concrète en entreprise.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Accompagner les entreprises</h4>
              <p className="text-cyan-50">Dans le recrutement et la montée en compétences de leurs futurs talents.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à devenir apprenti ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un entretien et recevez le synoptique de votre formation.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 font-semibold text-lg"
            >
              Contacter le CFA
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
