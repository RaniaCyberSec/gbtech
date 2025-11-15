import { Code, Network, ShoppingCart, Shield, Server } from 'lucide-react';

export default function Formations() {
  const formations = [
    {
      icon: <Network size={32} />,
      title: 'TP Technicien réseaux IP',
      rncp: 'RNCP-35295',
      description: 'Expert polyvalent qui assure la maintenance, le conseil et l\'assistance technique des infrastructures informatiques et des systèmes de téléphonie.',
      points: [
        'Maintenance réseaux IP',
        'Téléphonie d\'entreprise',
        'Support optimal'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Code size={32} />,
      title: 'TP Développement Web et web mobile',
      rncp: 'RNCP-37674',
      description: 'Spécialiste des langages informatiques qui conçoit, développe et optimise des applications et logiciels pour répondre aux besoins des utilisateurs.',
      points: [
        'Conception, développement, tests',
        'Environnements de programmation',
        'Transformation numérique'
      ],
      color: 'from-blue-500 to-slate-600'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'TP Conseiller de vente',
      rncp: 'RNCP-37098',
      description: 'Professionnel de la vente qui accueille les clients, identifie leurs besoins et leur propose des produits adaptés tout en leur fournissant des conseils personnalisés.',
      points: [
        'Accueil et identification besoins',
        'Conseils personnalisés',
        'Expérience d\'achat optimale'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Shield size={32} />,
      title: 'TP Bachelor en cybersécurité',
      rncp: 'RNCP-37275',
      description: 'Programme de haut niveau qui forme des experts capables de protéger les systèmes d\'information contre les cyber-menaces.',
      points: [
        'Sécurité des réseaux',
        'Cryptographie & conformité',
        'Gestion des incidents'
      ],
      color: 'from-blue-500 to-slate-600'
    },
    {
      icon: <Server size={32} />,
      title: 'TP Technicien Supérieur Systèmes et Réseaux',
      rncp: 'RNCP-37682',
      description: 'Technicien hautement qualifié capable de gérer l\'ensemble de l\'infrastructure informatique d\'une entreprise et d\'assurer un support technique performant.',
      points: [
        'Administration réseaux & systèmes',
        'Sécurité informatique',
        'Support technique performant'
      ],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="formations" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nos formations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des cursus spécialisés dans plusieurs domaines porteurs
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
            >
              <div className="md:flex">
                <div className={`md:w-1/3 bg-gradient-to-br ${formation.color} p-8 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="inline-block p-6 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                      {formation.icon}
                    </div>
                    <div className="text-sm font-semibold bg-white/20 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
                      {formation.rncp}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    {formation.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {formation.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {formation.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-cyan-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold">
                    Télécharger le synopsis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
