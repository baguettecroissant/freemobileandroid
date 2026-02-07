import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
  },
  async redirects() {
    return [
      // 1. Redirections Stratégiques (Marques) - Ciblées
      // On retire les règles génériques (.*)samsung(.*) qui bouclent sur /marques/samsung
      // On privilégie les redirections exactes ci-dessous ou des règles plus précises si besoin.

      // 2. Redirections URL Exactes (Legacy Semrush)
      {
        source: '/sip-free-avec-android-application-sipdroid',
        destination: '/configurer-apn',
        permanent: true,
      },
      {
        source: '/inbox-va-bientot-integrer-une-fonctionnalite-pour-annuler-lenvoi-dun-email',
        destination: '/',
        permanent: true,
      },
      {
        source: '/freebox-airmedia-avec-android',
        destination: '/configurer-apn',
        permanent: true,
      },
      {
        source: '/eteindre-le-wifi-de-sa-freebox-sur-android',
        destination: '/configurer-apn',
        permanent: true,
      },
      {
        source: '/conference-de-presse-free-mobile-rumeur-grandissante-pour-le-13-decembre',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bon-plan-le-honor-6-est-a-230-euros-ce-week-end-seulement',
        destination: '/marques/honor',
        permanent: true,
      },
      {
        source: '/activer-lauthentification-eap-sim-sur-android',
        destination: '/configurer-apn',
        permanent: true,
      },
      {
        source: '/analyser-augmenter-qualite-reseau-wifi-freebox-avec-android',
        destination: '/configurer-apn',
        permanent: true,
      },

      // 3. Règles Catch-All (Filet de sécurité)
      {
        source: '/(.*)freebox(.*)',
        destination: '/configurer-apn',
        permanent: true,
      },
      {
        source: '/(.*)wifi(.*)',
        destination: '/configurer-apn',
        permanent: true,
      },
      {
        source: '/category/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/:slug*',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
