import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

function Home() {
    const [count, setCount] = useState(0)
    const { t } = useTranslation()

    return (
        <div className="text-center">
            <div className="flex justify-center gap-8 mb-8">
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="h-24 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all animate-[spin_20s_linear_infinite]" alt="React logo" />
                </a>
            </div>

            <h1 className="text-5xl mb-8">{t('welcome')}</h1>

            <div className="p-8">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-[#1a1a1a] hover:border-[#646cff] transition-colors"
                >
                    {t('home.countIs')} {count}
                </button>
                <p className="mt-4">
                    {t('home.editHMR', {
                        returnObjects: false,
                        defaultValue: 'Edit src/pages/Home.tsx and save to test HMR'
                    }).split('<1>').map((part, i) => {
                        if (i === 0) return part;
                        const [code, rest] = part.split('</1>');
                        return <span key={i}><code>{code}</code>{rest}</span>;
                    })}
                </p>
            </div>

            <p className="mt-8 text-[#888]">
                {t('home.clickLogos')}
            </p>
        </div>
    )
}

export default Home
