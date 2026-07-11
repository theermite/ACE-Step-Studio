import React from 'react';
import { BookOpen } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { guideContent, GuideSection, GuideBlock } from '../content/guideContent';

// Minimal inline renderer for **bold** and `code` inside guide strings.
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-zinc-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-pink-600 dark:text-pink-400 text-[0.85em] font-mono">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part ? <React.Fragment key={i}>{part}</React.Fragment> : null;
  });
}

const Block: React.FC<{ block: GuideBlock }> = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{renderInline(block.text)}</p>;
    case 'subheading':
      return <h3 className="text-base font-semibold text-zinc-900 dark:text-white mt-6 mb-1">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-300">
          {block.items.map((it, i) => (
            <li key={i} className="leading-relaxed">{renderInline(it)}</li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <pre className="rounded-lg bg-zinc-100 dark:bg-suno-card border border-zinc-200 dark:border-white/5 p-4 overflow-x-auto text-sm font-mono text-zinc-700 dark:text-zinc-200 whitespace-pre-wrap">
          {block.text}
        </pre>
      );
    case 'tip':
      return (
        <div className="rounded-lg border-l-4 border-pink-500 bg-pink-500/5 p-3 text-sm text-zinc-700 dark:text-zinc-200">
          💡 {renderInline(block.text)}
        </div>
      );
    case 'table':
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-300 dark:border-zinc-700">
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left font-semibold text-zinc-900 dark:text-white py-2 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-zinc-200 dark:border-white/5">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 pr-4 text-zinc-600 dark:text-zinc-300 align-top">{renderInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
};

export const GuidePage: React.FC = () => {
  const { language, t } = useI18n();
  const sections: GuideSection[] = guideContent[language] || guideContent.en;
  const subtitle = language === 'fr'
    ? "Comment utiliser la plateforme, bien décrire ta musique et régler pour la meilleure qualité."
    : "How to use the platform, describe your music well, and tune for the best quality.";

  // Scroll to a section without touching the URL (avoids the SPA router hijacking
  // hash links and bouncing back to the home view).
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-white dark:bg-suno text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 lg:flex lg:gap-10">

        {/* Table of contents — sticky sidebar on desktop */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-8">
            <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white">
              <BookOpen size={20} className="text-pink-500" />
              <span className="font-bold">{t('guide')}</span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-left text-sm px-3 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-suno-card hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {s.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 max-w-3xl">
          {/* Mobile header + chip nav */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={24} className="text-pink-500" />
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{t('guide')}</h1>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="whitespace-nowrap text-sm px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-suno-card text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-suno-hover transition-colors"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-lg leading-relaxed">{subtitle}</p>

          <div className="space-y-12">
            {sections.map(section => (
              <section key={section.id} id={section.id} className="scroll-mt-6 space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-white/10 pb-2">
                  {section.title}
                </h2>
                {section.blocks.map((block, i) => <Block key={i} block={block} />)}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
