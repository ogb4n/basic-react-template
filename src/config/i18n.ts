import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to React with i18n!",
      nav: {
        home: "Home",
        about: "About",
      },
      home: {
        countIs: "count is",
        editHMR: "Edit <1>src/pages/Home.tsx</1> and save to test HMR",
        clickLogos: "Click on the Vite and React logos to learn more",
      },
      about: {
        title: "About",
        description: "This is a modern React template built with:",
        stack: {
          react: "React 19 with TypeScript",
          vite: "Vite for fast development",
          tailwind: "Tailwind CSS for styling",
          i18n: "i18next for internationalization",
          router: "React Router for navigation",
        },
      },
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur React avec i18n !",
      nav: {
        home: "Accueil",
        about: "À propos",
      },
      home: {
        countIs: "compteur à",
        editHMR:
          "Éditez <1>src/pages/Home.tsx</1> et sauvegardez pour tester HMR",
        clickLogos: "Cliquez sur les logos Vite et React pour en savoir plus",
      },
      about: {
        title: "À propos",
        description: "Ceci est un template React moderne construit avec :",
        stack: {
          react: "React 19 avec TypeScript",
          vite: "Vite pour un développement rapide",
          tailwind: "Tailwind CSS pour le style",
          i18n: "i18next pour l'internationalisation",
          router: "React Router pour la navigation",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
