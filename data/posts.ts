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
    slug: "deux-apn-free-mmsfree-lequel-choisir",
    title: "Deux APN Free Mobile (free & mmsfree) : Lequel Choisir ?",
    excerpt: "Pourquoi votre téléphone affiche deux APN chez Free Mobile ? Découvrez le rôle exact de 'free' et 'mmsfree', et la config à appliquer selon votre smartphone.",
    date: "2026-02-11",
    author: "Wade",
    readTime: "6 min",
    category: "Configuration",
    image: "/blog_deux_apn_free_mobile.png",
    imagePrompt: "Tech 3D isometric illustration, glassmorphism style, two floating translucent smartphone settings panels side by side labeled 'free' and 'mmsfree', connected by glowing data streams, Free Mobile brand colors (vibrant red and clean white), signal bars and Wi-Fi icons floating around, clean white/light grey background, modern minimal high quality digital art, 8k",
    content: `
      <p>Vous ouvrez les réglages réseau de votre Android et vous découvrez <strong>deux lignes APN</strong> : l'une appelée <strong>"free"</strong>, l'autre <strong>"mmsfree"</strong>. Logiquement, vous vous posez la question : <em>"Lequel je garde ? Et pourquoi il y en a deux ?"</em></p>
      <p>Ce n'est ni un bug, ni un doublon. C'est une spécificité <strong>Free Mobile</strong> qui existe depuis le lancement de l'opérateur en 2012. Voici tout ce que vous devez savoir pour <strong>ne plus jamais avoir de problème de réseau ou de MMS</strong>.</p>

      <h2>Pourquoi Free Mobile utilise deux APN distincts ?</h2>
      <p>La plupart des opérateurs (Orange, SFR, Bouygues) font passer Internet et les MMS par un <strong>seul et même APN</strong>. Free a fait un choix technique différent en séparant les flux dès le départ :</p>
      <ul>
        <li><strong>APN "free"</strong> → Gère <strong>toute la DATA</strong> : navigation web, YouTube, Netflix, WhatsApp, mails, applications... C'est le tuyau principal. Sans lui, <strong>aucun accès Internet</strong>.</li>
        <li><strong>APN "mmsfree"</strong> → Gère <strong>uniquement les MMS</strong> (envoi et réception de photos/vidéos par SMS). Ce profil ne donne <strong>aucun accès à Internet</strong>.</li>
      </ul>
      <p>Cette séparation est héritée de l'infrastructure initiale de Free Mobile. Elle persiste aujourd'hui sur de nombreux smartphones Android, même si les modèles récents tendent à tout fusionner automatiquement.</p>

      <h2>L'erreur n°1 qui casse vos MMS</h2>
      <p>Voici le scénario classique que l'on voit sur tous les forums :</p>
      <ul>
        <li>Vous configurez <strong>uniquement</strong> l'APN "free".</li>
        <li>Internet fonctionne parfaitement : pages web, Instagram, mails... tout roule.</li>
        <li>Un ami vous envoie une <strong>photo par MMS</strong> → le téléchargement tourne en boucle et <strong>échoue</strong>.</li>
        <li>Vous pensez à un problème réseau. En réalité, il manque le profil "mmsfree".</li>
      </ul>
      <p><strong>Inversement</strong>, si vous sélectionnez "mmsfree" comme APN par défaut, vous recevrez vos MMS mais vous n'aurez <strong>aucun accès Internet</strong>. C'est l'autre piège.</p>

      <h2>Quel APN choisir selon votre smartphone ?</h2>
      <h3>Cas 1 : Smartphone récent (2022+)</h3>
      <p>Sur les <strong>Samsung Galaxy, Google Pixel, iPhone, Xiaomi</strong> et la plupart des modèles récents, la configuration se fait <strong>automatiquement</strong> à l'insertion de la carte SIM Free. Le téléphone crée un profil unique qui gère à la fois Internet ET les MMS.</p>
      <p><strong>Vous n'avez rien à faire.</strong> Si tout marche, ne touchez à rien.</p>

      <h3>Cas 2 : Smartphone ancien ou marque secondaire</h3>
      <p>Sur les modèles plus anciens, les smartphones importés (Doogee, Blackview, Umidigi...) ou après une <strong>réinitialisation d'usine</strong>, vous devez configurer <strong>les deux APN manuellement</strong> :</p>

      <h3>Profil 1 – Internet (obligatoire)</h3>
      <ul>
        <li><strong>Nom :</strong> Free</li>
        <li><strong>APN :</strong> free</li>
        <li><strong>MCC :</strong> 208</li>
        <li><strong>MNC :</strong> 15</li>
        <li><strong>Type d'APN :</strong> default,supl,hipri</li>
        <li><strong>Protocole APN :</strong> IPv4/IPv6</li>
      </ul>
      <p>→ <strong>Sélectionnez ce profil</strong> comme APN par défaut (le rond doit être coché).</p>

      <h3>Profil 2 – MMS (indispensable pour les photos)</h3>
      <ul>
        <li><strong>Nom :</strong> Free MMS</li>
        <li><strong>APN :</strong> mmsfree</li>
        <li><strong>MMSC :</strong> http://mms.free.fr</li>
        <li><strong>MCC :</strong> 208</li>
        <li><strong>MNC :</strong> 15</li>
        <li><strong>Type d'APN :</strong> mms</li>
        <li><strong>Protocole APN :</strong> IPv4/IPv6</li>
      </ul>
      <p>→ <strong>Ne sélectionnez PAS</strong> ce profil comme APN par défaut. Il ne sert qu'aux MMS, Android l'utilise automatiquement quand nécessaire.</p>

      <h3>Cas 3 : La configuration unifiée (la plus simple)</h3>
      <p>Si vous voulez simplifier, sachez qu'un <strong>seul APN peut tout gérer</strong> sur la majorité des téléphones modernes. C'est la méthode recommandée par notre <a href="/configurer-apn" class="text-red-600 font-bold hover:underline">guide de configuration APN Free Mobile</a> :</p>
      <ul>
        <li><strong>Nom :</strong> Free</li>
        <li><strong>APN :</strong> free</li>
        <li><strong>MMSC :</strong> http://mms.free.fr</li>
        <li><strong>MCC :</strong> 208</li>
        <li><strong>MNC :</strong> 15</li>
        <li><strong>Type d'APN :</strong> default,mms,supl,hipri,dun</li>
        <li><strong>Protocole APN :</strong> IPv4/IPv6</li>
      </ul>
      <p>Avec cette config, un seul profil gère <strong>Internet + MMS + 5G</strong>. Plus besoin de deux lignes. Si ça ne marche pas sur votre modèle, revenez aux deux profils séparés ci-dessus.</p>

      <h2>Problèmes fréquents et solutions rapides</h2>
      <h3>Le deuxième APN disparaît après l'enregistrement</h3>
      <p>C'est le bug le plus courant. Vérifiez que le <strong>MCC (208)</strong> et le <strong>MNC (15)</strong> sont bien renseignés. Si ces valeurs sont incorrectes ou absentes, Android considère que l'APN ne correspond pas à votre carte SIM Free et le <strong>masque automatiquement</strong>.</p>

      <h3>Les MMS ne partent toujours pas</h3>
      <ul>
        <li>Vérifiez que le champ <strong>MMSC</strong> contient bien <code>http://mms.free.fr</code> (et pas https).</li>
        <li>Assurez-vous que les <strong>données mobiles sont activées</strong>. Les MMS nécessitent une connexion data, même courte.</li>
        <li>Redémarrez votre téléphone après avoir enregistré les APN.</li>
      </ul>

      <h3>Ça marchait avant, plus maintenant</h3>
      <p>Après une <strong>mise à jour système</strong> (Android 14, 15...) ou un <strong>changement de carte SIM</strong>, les APN peuvent être réinitialisés ou écrasés. Il suffit de les reconfigurer. Rendez-vous sur notre page <a href="/marques" class="text-red-600 font-bold hover:underline">marques</a> pour trouver le tuto spécifique à votre modèle.</p>

      <h2>Et sur iPhone, c'est pareil ?</h2>
      <p>Non. Apple gère la configuration APN <strong>automatiquement via un fichier intégré</strong> (carrier bundle). Quand vous insérez votre SIM Free, l'iPhone applique les bons réglages sans que vous ayez à intervenir.</p>
      <p>Si malgré tout vos MMS ne marchent pas sur iPhone :</p>
      <ul>
        <li>Allez dans <strong>Réglages > Général > Transférer ou réinitialiser > Réinitialiser les réglages réseau</strong>.</li>
        <li>Redémarrez le téléphone.</li>
        <li>Les APN corrects seront automatiquement rétablis.</li>
      </ul>

      <h2>Foire Aux Questions (FAQ)</h2>
      <p><strong>Q : Est-ce que je peux supprimer l'APN "mmsfree" si je n'utilise jamais les MMS ?</strong><br>
      R : Oui, techniquement. Mais gardez-le : certaines notifications (banque, administrations) sont envoyées par MMS. Sans ce profil, vous ne les recevrez jamais.</p>

      <p><strong>Q : Faut-il activer l'itinérance des données en France ?</strong><br>
      R : Non. L'itinérance ne sert qu'à l'étranger. En France, laissez-la désactivée pour éviter tout problème réseau inutile.</p>

      <p><strong>Q : J'ai un forfait Free à 2€, j'ai quand même besoin des deux APN ?</strong><br>
      R : Oui. Le forfait 2€ inclut les MMS en France. Les APN sont les mêmes quel que soit votre forfait Free Mobile (2€ ou 19,99€).</p>

      <p><strong>Q : La 5G Free fonctionne avec ces APN ?</strong><br>
      R : Oui, la 5G utilise le même APN "free" que la 4G. Si la 5G ne s'active pas, consultez notre guide pour <a href="/pourquoi-5g-free-ne-marche-pas" class="text-red-600 font-bold hover:underline">résoudre les problèmes 5G Free</a>.</p>

      <p><strong>Q : Mon téléphone affiche 3 APN ou plus, c'est normal ?</strong><br>
      R : Non, c'est probablement un résidu d'anciens profils ou d'itinérance Orange. Supprimez tout sauf "free" (Internet) et "mmsfree" (MMS), puis redémarrez.</p>

      <p>Besoin d'un tuto pas-à-pas pour votre marque ? Consultez nos guides pour <a href="/marques" class="text-red-600 font-bold hover:underline">Samsung, Xiaomi, Pixel et toutes les marques</a>.</p>
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
