import { useTranslation } from 'react-i18next'

function About() {
    const { t } = useTranslation()

    return (
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl mb-8">{t('about.title')}</h1>
            <p className="text-lg text-[#888] mb-4">
                {t('about.description')}
            </p>
            <ul className="text-left space-y-2 mb-8">
                <li className="text-lg">⚛️ {t('about.stack.react')}</li>
                <li className="text-lg">⚡ {t('about.stack.vite')}</li>
                <li className="text-lg">🎨 {t('about.stack.tailwind')}</li>
                <li className="text-lg">🌐 {t('about.stack.i18n')}</li>
                <li className="text-lg">🔀 {t('about.stack.router')}</li>
            </ul>
            <p className="text-[#888]">
                {t('welcome')}
            </p>
        </div>
    )
}

export default About
