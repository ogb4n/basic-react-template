import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navigation() {
    const { t, i18n } = useTranslation()

    return (
        <nav className="mb-8 flex justify-between items-center">
            <div className="flex gap-4">
                <Link
                    to="/"
                    className="px-4 py-2 rounded hover:bg-[#1a1a1a] transition-colors"
                >
                    {t('nav.home')}
                </Link>
                <Link
                    to="/about"
                    className="px-4 py-2 rounded hover:bg-[#1a1a1a] transition-colors"
                >
                    {t('nav.about')}
                </Link>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => i18n.changeLanguage('en')}
                    className="px-4 py-2 bg-[#1a1a1a] rounded hover:border-[#646cff] border border-transparent transition-colors"
                >
                    EN
                </button>
                <button
                    onClick={() => i18n.changeLanguage('fr')}
                    className="px-4 py-2 bg-[#1a1a1a] rounded hover:border-[#646cff] border border-transparent transition-colors"
                >
                    FR
                </button>
            </div>
        </nav>
    )
}

export default Navigation
