# Basic React Template

Un template React moderne avec TypeScript, Vite, Tailwind CSS et i18next.

## 🚀 Stack Technique

- **React 19** avec TypeScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **i18next** - Internationalisation
- **React Router** - Navigation multi-pages
- **ESLint** - Linting

## 📁 Structure du Projet

```
src/
├── assets/          # Images, SVG, fichiers statiques
├── components/      # Composants React réutilisables
├── config/          # Configurations (i18n, etc.)
├── layouts/         # Layouts partagés (MainLayout, etc.)
├── pages/           # Pages de l'application (Home, About, etc.)
├── App.tsx          # Configuration du routing
├── main.tsx         # Point d'entrée
└── index.css        # Styles globaux
```

## 🛠️ Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter le code
npm run lint
```

## 🌐 Internationalisation

Les traductions sont configurées dans `src/config/i18n.ts`.

Pour ajouter une nouvelle langue, modifiez le fichier de configuration.

## 📝 Bonnes Pratiques

- Placez les **pages** dans `/pages` (Home.tsx, About.tsx, etc.)
- Placez les **composants réutilisables** dans `/components` (Navigation, Button, etc.)
- Placez les **layouts** dans `/layouts` (MainLayout, AuthLayout, etc.)
- Utilisez **Tailwind CSS** pour le styling
- Configurez les **services externes** dans `/config`
- Gardez les **assets** dans `/assets`

## 🔀 Routing

Le routing est géré par React Router dans `src/App.tsx`.

Pour ajouter une nouvelle page:

1. Créez un composant dans `/pages` (ex: `Contact.tsx`)
2. Ajoutez la route dans `App.tsx`
3. Ajoutez le lien dans `Navigation.tsx`

Exemple:

```tsx
// Dans App.tsx
<Route path="contact" element={<Contact />} />
```

## 🎨 Styling

Ce projet utilise Tailwind CSS. Les classes utility sont disponibles directement dans vos composants.

Configuration : `tailwind.config.js`
