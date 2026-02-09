export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for simplicity in this MVP
  date: string;
  author: string;
  readTime: string;
  category: string;
  image?: string;
  imagePrompt?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "pourquoi-5g-free-ne-marche-pas",
    title: "Problème 5G Free Mobile : 3 Solutions Pour L'Activer (Enfin !)",
    excerpt: "Votre smartphone est 5G mais vous restez bloqué en 4G chez Free ? Découvrez les 3 raisons cachées et comment forcer l'activation immédiate du réseau.",
    date: "2026-02-07",
    author: "L'Équipe FreeMobileAndroid",
    readTime: "5 min",
    category: "Dépannage",
    image: "/blog_5g_issue_tech_3d_1770458294594.png",
    content: `
      <p>C'est la frustration ultime : vous payez votre forfait 19,99€, vous avez un smartphone dernier cri, et pourtant... le logo "5G" refuse obstinément d'apparaître. Vous restez bloqué en 4G/4G+.</p>
      <p>Pas de panique. Dans 90% des cas, ce n'est pas une panne réseau, mais un simple réglage oublié. Voici les 3 solutions pour débloquer la situation en moins de 5 minutes.</p>

      <h2>1. L'Erreur Bête : L'option "Service 5G" est désactivée</h2>
      <p>Contrairement aux autres opérateurs, Free Mobile n'active pas la 5G par défaut sur les anciens forfaits ou certaines nouvelles souscriptions. C'est un interrupteur manuel souvent ignoré.</p>
      <p><strong>La solution immédiate :</strong></p>
      <ul>
        <li>Rendez-vous sur votre <a href="https://mobile.free.fr/account/" target="_blank" class="text-red-600 font-bold hover:underline">Espace Abonné Mobile</a>.</li>
        <li>Allez dans la rubrique <strong>"Mes Options"</strong>.</li>
        <li>Cherchez la ligne <strong>"Service 5G"</strong> et cochez la case. C'est gratuit.</li>
        <li><strong>Important :</strong> Redémarrez votre téléphone pour que le réseau prenne en compte le changement.</li>
      </ul>

      <h2>2. Le Piège du Smartphone "Partiellement" Compatible</h2>
      <p>Vous avez acheté un Xiaomi, Redmi ou OnePlus sur un site import ou le marché gris ? Attention. La 5G Free repose massivement sur la <strong>bande 700 MHz (n28)</strong> pour sa couverture.</p>
      <p>Beaucoup de modèles "Version Globale" ou "Chinoise" ne captent pas cette fréquence spécifique. Résultat : vous captez la 5G uniquement au pied des antennes 3.5 GHz (rares en campagne), et rien ailleurs.</p>
      <p><strong>Le test rapide :</strong> Vérifiez la fiche technique de votre mobile sur un site comme Kimovil. Il doit supporter les bandes :</p>
      <ul>
        <li><strong>n28</strong> (700 MHz) -> Indispensable pour la couverture.</li>
        <li><strong>n78</strong> (3500 MHz) -> Indispensable pour le débit ultra-rapide.</li>
      </ul>

      <h2>3. Le Réglage Android/iOS qui Bloque Tout</h2>
      <p>Par défaut, certains modes "Économie d'énergie" désactivent la 5G pour préserver la batterie. Ou alors, votre téléphone est resté configuré sur l'ancien réseau.</p>
      <p><strong>Forcez la 5G manuellement :</strong></p>
      <ul>
        <li><strong>Sur Samsung / Android :</strong> Paramètres > Connexions > Réseaux mobiles > Mode réseau > Sélectionnez <strong>"5G/4G/3G/2G (Connexion auto)"</strong>.</li>
        <li><strong>Sur iPhone :</strong> Réglages > Données cellulaires > Options > Voix et données > Cochez <strong>"5G Auto"</strong> ou "5G activée".</li>
      </ul>

      <h3>Foire Aux Questions (FAQ)</h3>
      <p><strong>Q : Je suis en zone 5G sur la carte, mais je n'ai rien. Pourquoi ?</strong><br>
      R : La carte de couverture est théorique. Si vous êtes en intérieur, la 5G 3.5 GHz pénètre mal les murs. Seule la 700 MHz passe bien, vérifiez point n°2.</p>
      
      <p><strong>Q : Faut-il changer de carte SIM pour la 5G Free ?</strong><br>
      R : Non, toutes les cartes SIM Free Mobile (même anciennes) sont compatibles 5G sans changement.</p>

      <p>Besoin de revoir vos réglages APN pour être sûr ? Consultez notre guide pour <a href="/configurer-apn" class="text-red-600 font-bold hover:underline">configurer un APN Free Mobile</a> ou trouvez votre modèle spécifique dans <a href="/marques" class="text-red-600 font-bold hover:underline">la liste des marques</a>.</p>
    `,
  },
  {
    slug: "difference-apn-free-et-mmsfree",
    title: "APN 'free' vs 'mmsfree' : Lequel Choisir ? (Et Pourquoi Vous Avez Tort)",
    excerpt: "Internet ou MMS ? Un seul APN ou les deux ? Ne faites plus l'erreur classique qui bloque vos photos et vos données chez Free Mobile.",
    date: "2026-02-05",
    author: "L'Équipe FreeMobileAndroid",
    readTime: "4 min",
    category: "Configuration",
    image: "/blog_apn_comparison_tech_3d.png",
    content: `
      <p>C'est la question qui revient le plus souvent sur les forums : <em>"Pourquoi il y a deux APN ? J'ai mis 'free' et ça marche, à quoi sert l'autre ?"</em>.</p>
      <p>Attention. Ce n'est pas parce que "ça marche" pour Instagram que vous recevez vos MMS. Free Mobile utilise une architecture spécifique héritée de son lancement. Voici la vérité technique pour ne plus jamais avoir de soucis.</p>

      <h2>1. La Règle d'Or : Il vous faut (souvent) les deux</h2>
      <p>Contrairement à Orange ou SFR qui regroupent tout sous un seul point d'accès, Free sépare historiquement les flux :</p>
      <ul>
        <li><strong>APN "free" :</strong> C'est le tuyau pour la <strong>DATA</strong> (Web, YouTube, WhatsApp, Netflix...). Si vous le supprimez, vous n'avez plus d'Internet.</li>
        <li><strong>APN "mmsfree" :</strong> C'est le tuyau exclusif pour les <strong>MMS</strong> (Photos/Vidéos par SMS). Il ne donne PAS accès à Internet.</li>
      </ul>
      <p><strong>L'erreur classique :</strong> Configurer uniquement l'APN "free". Tout semble fonctionner... jusqu'au jour où on vous envoie une photo par message, et le téléchargement échoue indéfiniment.</p>

      <h2>2. "Mais sur mon iPhone, je n'ai rien fait !"</h2>
      <p>C'est normal. Les smartphones modernes (iPhone, Samsung récents, Pixel) ont les réglages "en dur" dans le système. Quand vous insérez la SIM, ils appliquent une configuration invisible qui gère les deux flux, parfois sous un seul profil affiché.</p>
      <p><strong>Le problème survient quand :</strong></p>
      <ul>
        <li>Vous avez un smartphone Android un peu ancien ou d'une marque exotique (Doogee, Blackview...).</li>
        <li>Vous faites une mise à jour manuelle et vous supprimez un profil "en trop".</li>
        <li>Vous êtes à l'étranger et l'itinérance interfère.</li>
      </ul>

      <h2>3. La Configuration Parfaite (À copier-coller)</h2>
      <p>Si vous devez tout rentrer à la main, ne cherchez pas midi à quatorze heures. Voici les seules valeurs qui comptent :</p>

      <h3>Profil Internet</h3>
      <ul>
        <li><strong>Nom :</strong> Free</li>
        <li><strong>APN :</strong> free</li>
        <li><strong>MCC :</strong> 208</li>
        <li><strong>MNC :</strong> 15</li>
        <li><strong>Type d'APN :</strong> default,supl,hipri</li>
      </ul>

      <h3>Profil MMS</h3>
      <ul>
        <li><strong>Nom :</strong> Free MMS</li>
        <li><strong>APN :</strong> mmsfree</li>
        <li><strong>MMSC :</strong> http://mms.free.fr</li>
        <li><strong>MCC :</strong> 208</li>
        <li><strong>MNC :</strong> 15</li>
        <li><strong>Type d'APN :</strong> mms</li>
      </ul>

      <h3>Foire Aux Questions (FAQ)</h3>
      <p><strong>Q : Je ne peux pas enregistrer le deuxième APN, il disparaît !</strong><br>
      R : C'est souvent un bug d'affichage Android. Vérifiez bien que le MCC (208) et MNC (15) sont corrects. S'ils sont faux, Android cache l'APN car il pense qu'il ne correspond pas à la carte SIM.</p>

      <p><strong>Q : Faut-il activer l'itinérance des données ?</strong><br>
      R : En France : NON (inutile). À l'étranger (Zone Europe/Monde) : OUI, sinon pas d'internet.</p>

      <p>Votre mobile ne capte toujours pas ? Vérifiez si votre modèle est bien compatible avec les <a href="/marques" class="text-red-600 font-bold hover:underline">fréquences Free Mobile</a> ou suivez notre guide complet de <a href="/configurer-apn" class="text-red-600 font-bold hover:underline">configuration APN par marque</a>.</p>
    `,
  },
  {
    slug: "apn-free-mobile-configuration-officielle",
    title: "APN Free Mobile : La Config Ultime Qui Marche à 100% (2026)",
    excerpt: "Plus d'internet ou de MMS ? Ne galérez plus. Voici LE réglage APN officiel Free Mobile à copier-coller pour réparer votre connexion en 30 secondes chrono.",
    date: "2026-02-09",
    author: "L'Équipe FreeMobileAndroid",
    readTime: "3 min",
    category: "Configuration",
    image: "/blog_apn_config_2026_tech_3d.png",
    imagePrompt: "Tech 3D, Isometric, Glassmorphism, Free Mobile colors (Red/White), clean background, smartphone with settings icon and signal bars, high quality, 8k",
    content: `
      <h2>Votre internet Free Mobile rame ou ne marche pas ?</h2>
      <p>Vous avez une barre de réseau mais <strong>aucune connexion internet</strong> ? Vos MMS tournent dans le vide sans jamais partir ? C'est le symptôme classique d'une mauvaise configuration <strong>APN (Access Point Name)</strong>.</p>
      <p>Pas de panique. Que vous ayez un Android (Xiaomi, Samsung, Pixel) ou un iPhone, voici la configuration universelle qui répare 100% des problèmes réseau chez Free.</p>

      <h2>La Solution Immédiate : Copiez-collez ceci</h2>
      <p>N'écoutez pas les forums datés de 2015. Aujourd'hui, un seul réglage compte vraiment. Allez dans <strong>Paramètres > Réseaux mobiles > Noms des points d'accès (APN)</strong> et créez un nouveau profil avec ces valeurs exactes :</p>

      <h3>Pour Internet ET MMS (Android)</h3>
      <ul>
        <li><strong>Nom :</strong> Free</li>
        <li><strong>APN :</strong> free</li>
        <li><strong>MMSC :</strong> http://mms.free.fr</li>
        <li><strong>MCC :</strong> 208</li>
        <li><strong>MNC :</strong> 15</li>
        <li><strong>Type d'APN :</strong> default,mms,supl,hipri,dun</li>
        <li><strong>Protocole APN :</strong> IPv4/IPv6</li>
        <li><strong>Réseau :</strong> Non spécifié (ou tout cocher si possible)</li>
      </ul>
      <p><strong>Important :</strong> Une fois saisi, appuyez sur les 3 petits points (menu) et cliquez sur <strong>Enregistrer</strong>. Sélectionnez ensuite ce nouveau profil.</p>

      <h2>Pourquoi ça ne marchait pas avant ?</h2>
      <p>Souvent, les téléphones importés ou les mises à jour logicielles écrasent les réglages de l'opérateur. Parfois, l'APN est réglé sur "orange" (héritage de l'itinérance) ou il manque le champ "mms".</p>
      <p>Avec la configuration ci-dessus, vous forcez votre téléphone à utiliser les passerelles directes de <strong>Free Mobile</strong> pour la 4G et la <strong>5G</strong>, sans passer par des bridages inutiles.</p>

      <h3>Sur iPhone, c'est automatique (normalement)</h3>
      <p>Si vous avez un iPhone, Apple gère cela tout seul. Mais si ça ne marche pas :</p>
      <ul>
        <li>Allez dans <strong>Réglages > Général > Transférer ou réinitialiser l'iPhone > Réinitialiser > Réinitialiser les réglages réseau</strong>.</li>
        <li>Attention, cela efface aussi vos mots de passe Wi-Fi enregistrés, mais c'est radical pour retrouver la 4G.</li>
      </ul>

      <h2>Foire Aux Questions (FAQ)</h2>
      <p><strong>Q : Je ne capte toujours pas la 5G malgré cette config.</strong><br>
      R : Vérifiez que l'option "Service 5G" est bien activée dans votre Espace Abonné. C'est la cause n°1 des problèmes. Consultez notre guide pour <a href="/pourquoi-5g-free-ne-marche-pas" class="text-red-600 font-bold hover:underline">activer la 5G Free</a>.</p>

      <p><strong>Q : J'ai deux lignes "Free" et "Free MMS", je garde les deux ?</strong><br>
      R : Oui ! Sur certains modèles anciens, il faut séparer Internet (APN "free") et MMS (APN "mmsfree"). Mais la config unique ci-dessus marche pour 99% des smartphones récents.</p>

      <p>Besoin d'aide pour votre modèle spécifique ? Regardez nos tutos pour <a href="/marques" class="text-red-600 font-bold hover:underline">Xiaomi, Samsung et autres marques</a>.</p>
    `,
  }
];
