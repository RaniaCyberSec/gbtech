import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            À propos de GBTech School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence en formation professionnelle – Un partenaire de votre réussite
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nos missions</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Chez <strong className="text-cyan-600">GBTech School</strong>, notre engagement va bien au-delà de la transmission de connaissances.
            Nous avons pour mission de former des professionnels compétents, prêts à relever les défis du monde du travail
            et à s'adapter aux évolutions constantes des métiers.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Compétences adaptées</h4>
              <p className="text-gray-700">Développer des compétences adaptées aux exigences du marché</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Accès pour tous</h4>
              <p className="text-gray-700">Faciliter l'accès à la formation (présentiel, distanciel, alternance)</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Innovation pédagogique</h4>
              <p className="text-gray-700">Favoriser l'innovation (outils numériques, méthodes interactives)</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Accompagnement entreprises</h4>
              <p className="text-gray-700">Accompagner les entreprises dans la formation de leurs talents</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Alternance privilégiée</h4>
              <p className="text-gray-700">Encourager l'alternance et l'apprentissage en situation réelle</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-cyan-600 bg-cyan-50 inline-block px-8 py-4 rounded-lg border-2 border-cyan-200">
              GBTech School, bien plus qu'un centre de formation, un partenaire de votre réussite professionnelle !
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nos valeurs</h3>
          <p className="text-center text-gray-600 mb-12 text-lg">Ce qui nous fait avancer, chaque jour.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Excellence</h4>
              <p className="text-gray-700">Des programmes en phase avec les besoins du marché pour une employabilité durable.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Proximité</h4>
              <p className="text-gray-700">Accompagnement personnalisé, suivi individualisé, écoute active.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Innovation</h4>
              <p className="text-gray-700">Outils numériques, méthodes interactives, expériences immersives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
