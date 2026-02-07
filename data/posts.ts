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
}

export const posts: BlogPost[] = [
    {
        slug: "pourquoi-5g-free-ne-marche-pas",
        title: "Pourquoi la 5G Free Mobile ne fonctionne pas sur mon téléphone ?",
        excerpt: "Vous avez un forfait 5G et un smartphone compatible, mais vous restez bloqué en 4G ? Voici les 3 raisons principales et comment les résoudre.",
        date: "2026-02-07",
        author: "Wade",
        readTime: "5 min",
        category: "Dépannage",
        content: `
      <h2>1. L'option 5G n'est pas activée dans votre Espace Abonné</h2>
      <p>C'est la cause n°1 ! Chez Free Mobile, la 5G n'est pas active par défaut, même si vous avez le forfait à 19,99€. Vous devez l'activer manuellement.</p>
      <p><strong>Solution :</strong></p>
      <ul>
        <li>Connectez-vous sur <a href="https://mobile.free.fr/account/" target="_blank" class="text-red-600 underline">mobile.free.fr/moncompte</a>.</li>
        <li>Allez dans "Mes Options".</li>
        <li>Cherchez l'option "Service 5G" et activez-la.</li>
      </ul>

      <h2>2. Votre smartphone n'est pas compatible avec les fréquences Free (700 MHz / 3.5 GHz)</h2>
      <p>Certains téléphones importés (Xiaomi ou OnePlus version chinoise) ne captent pas la bande B28 (700 MHz), qui est la principale bande 5G de Free.</p>
      <p><strong>Solution :</strong> Vérifiez la fiche technique de votre mobile. Il doit supporter les bandes <strong>n28 (700 MHz)</strong> et <strong>n78 (3.5 GHz)</strong>.</p>

      <h2>3. Le mode réseau est mal configuré</h2>
      <p>Parfois, le téléphone reste bloqué sur "4G/3G/2G" pour économiser de la batterie.</p>
      <p><strong>Solution sur Android :</strong></p>
      <ul>
        <li>Paramètres > Connexions > Réseaux mobiles > Mode réseau.</li>
        <li>Sélectionnez bien <strong>"5G/4G/3G/2G (Connexion automatique)"</strong>.</li>
      </ul>
      <p><strong>Solution sur iPhone :</strong></p>
      <ul>
        <li>Réglages > Données cellulaires > Options > Voix et données.</li>
        <li>Cochez <strong>"5G Auto"</strong> ou "5G activée".</li>
      </ul>

      <h2>Toujours rien ? Vérifiez la couverture</h2>
      <p>Si tout est OK, vous êtes peut-être simplement dans une zone blanche. Consultez la <a href="https://mobile.free.fr/couverture" target="_blank" class="text-red-600 underline">carte de couverture officielle</a>.</p>
    `,
    },
    {
        slug: "difference-apn-free-et-mmsfree",
        title: "APN 'free' vs 'mmsfree' : Lequel choisir ?",
        excerpt: "Confusion totale entre les deux APN de Free ? On vous explique pourquoi il en faut deux et comment éviter les erreurs courantes.",
        date: "2026-02-05",
        author: "Wade",
        readTime: "3 min",
        category: "Configuration",
        content: `
      <h2>Un pour Internet, un pour les MMS</h2>
      <p>Contrairement à d'autres opérateurs qui unifient tout, Free Mobile utilise historiquement deux points d'accès distincts :</p>
      <ul>
        <li><strong>Nom : Free</strong> (APN: free) -> Sert uniquement à l'accès Internet (Web, Apps, YouTube...).</li>
        <li><strong>Nom : Free MMS</strong> (APN: mmsfree) -> Sert uniquement à l'envoi et la réception de MMS.</li>
      </ul>
      
      <h2>L'erreur classique</h2>
      <p>Si vous ne configurez QUE l'APN "free", vous aurez Internet mais vous ne recevrez jamais les photos par SMS. Si vous ne mettez QUE "mmsfree", vous n'aurez pas Internet.</p>
      
      <h2>Faut-il toujours les deux ?</h2>
      <p>Sur les smartphones récents (iPhone, Samsung Galaxy S24...), la configuration est souvent automatique et unifiée. Mais si vous avez des soucis, la méthode manuelle avec les deux APN reste la plus fiable.</p>
    `
    }
];
