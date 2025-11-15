export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">GBTech School</h3>
            <p className="text-gray-400">
              Centre de formation professionnelle<br />
              Lyon – Villeurbanne
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Réclamations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Horaires</h3>
            <p className="text-gray-400">
              Lundi – Vendredi : 8h30 – 18h30<br />
              Fermé Samedi, Dimanche et jours fériés
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-gray-400">
              06 99 52 44 18<br />
              contact@gbtech.fr
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GBTech School – Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
