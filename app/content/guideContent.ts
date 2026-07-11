// Bilingual (FR/EN) content for the in-app Guide page.
// Kept out of the i18n key files on purpose: this is long-form prose, easier to
// maintain and extend here than as hundreds of translation keys. Languages other
// than French fall back to English (see GuidePage).
//
// Sources (verified 2026-07-11): ACE-Step 1.5 official Musician's Guide (in-repo
// docs/en/ace_step_musicians_guide.md) + github.com/ace-step/ACE-Step-1.5 +
// the in-app parameter hints. Aligned to the ACE-Step 1.5 XL model + this UI.

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'code'; text: string }
  | { type: 'tip'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface GuideSection {
  id: string;
  title: string;
  blocks: GuideBlock[];
}

const fr: GuideSection[] = [
  {
    id: 'getting-started',
    title: '1. Prise en main',
    blocks: [
      { type: 'p', text: "ACE-Step génère de la musique complète — instrumentale ou chantée — à partir de ce que tu écris. Tout tourne en local sur ta machine : c'est gratuit, illimité et privé." },
      { type: 'subheading', text: 'Deux modes de travail' },
      { type: 'ul', items: [
        "**Simple** — pour aller vite : tu décris ta chanson en une phrase, l'IA remplit le reste, tu génères.",
        "**Personnalisé (Custom)** — pour tout contrôler : tu écris la description, les paroles, le tempo, la tonalité et les réglages avancés.",
      ]},
      { type: 'p', text: "Commence en mode Simple pour sentir comment l'IA réagit, puis passe en Personnalisé quand tu veux affiner." },
      { type: 'subheading', text: 'Le bon réflexe : générer par lots' },
      { type: 'p', text: "La génération comporte une part de hasard. Ne génère presque jamais une seule version : lance un **lot de 2 à 4**, écoute, garde la meilleure." },
      { type: 'ul', items: [
        "**Décris → génère (par lot) → écoute → affine.** On y arrive rarement du premier coup.",
        "**Corrige, ne refais pas tout.** Si 90 % du morceau est bon, régénère seulement la partie ratée (Repeindre) au lieu de tout jeter.",
        "**AutoGen** : prépare le lot suivant pendant que tu écoutes le lot en cours, pour ne pas casser ton élan.",
      ]},
      { type: 'tip', text: "Vois l'IA comme un collaborateur créatif, pas comme un distributeur. Les meilleurs résultats viennent avec la pratique." },
    ],
  },
  {
    id: 'modes',
    title: '2. Les 6 modes de création',
    blocks: [
      { type: 'p', text: "ACE-Step propose six modes, comme six outils de studio. Choisis-les selon ce que tu as en entrée (rien, un texte, un audio) et ce que tu veux obtenir." },
      { type: 'table', headers: ['Mode', 'Ce qu\'il fait', 'Entrée'], rows: [
        ['🎵 Texte → Musique', 'Décris → obtiens une chanson complète', 'Texte'],
        ['🎨 Reprise (Remix)', 'Change le style, garde la structure (mélodie, rythme, forme)', 'Un audio source'],
        ['🖌️ Repeindre (Repaint)', 'Régénère une seule portion, garde le reste intact', 'Un audio source'],
        ['🧱 Lego *', 'Empile les couches (ajoute basse sur une batterie, cordes sur une guitare…)', 'Un audio de base'],
        ['🔬 Extraire *', "Isole un élément d'un mix (voix seule, batterie seule…)", 'Un mix complet'],
        ['🎹 Compléter *', 'Ajoute l\'accompagnement à une voix seule', 'Une voix'],
      ]},
      { type: 'tip', text: "* Lego, Extraire et Compléter ne sont disponibles **qu'avec un modèle base/SFT**, pas avec le turbo (le modèle par défaut). Change de modèle dans le panneau de gauche pour y accéder." },
    ],
  },
  {
    id: 'style',
    title: '3. Écrire le style (la description)',
    blocks: [
      { type: 'p', text: "La description (caption) est un court paragraphe qui donne l'ambiance générale. Pose-toi la question : « si j'entrais en studio avec des musiciens, comment je décrirais ce que je veux ? »" },
      { type: 'subheading', text: 'Du vague au précis' },
      { type: 'p', text: "Vague — l'IA devine beaucoup :" },
      { type: 'code', text: "une chanson triste" },
      { type: 'p', text: "Précis — l'IA a une vraie direction :" },
      { type: 'code', text: "ballade au piano mélancolique, voix féminine douce, cordes légères, tempo lent, atmosphère intime et déchirante" },
      { type: 'subheading', text: 'Nomme les 4 leviers' },
      { type: 'ul', items: [
        "**Genre** : pop, rock, jazz, électro, folk, hip-hop, lo-fi, synthwave…",
        "**Instruments** : guitare acoustique, piano, nappes de synthé, boîte à rythmes 808, cordes…",
        "**Ambiance** : mélancolique, entraînant, énergique, rêveur, agressif, intime…",
        "**Style de production** : lo-fi, léché, prise live, bedroom pop, orchestral…",
      ]},
      { type: 'tip', text: "Sois précis sur les instruments. « chanson rock » laisse trop de liberté ; « rock avec guitare rythmique saturée, caisse claire percutante et voix masculine éraillée » dit exactement ce que tu entends dans ta tête." },
    ],
  },
  {
    id: 'lyrics',
    title: '4. Écrire les paroles',
    blocks: [
      { type: 'p', text: "Les paroles font un double travail : ce sont les mots chantés, mais surtout elles disent à l'IA comment le morceau est **structuré** dans le temps. Tu marques les sections avec des balises entre crochets." },
      { type: 'code', text: "[Intro]\n\n[Verse]\nMarchant dans les rues vides\nEn pensant à ta douceur\n\n[Chorus]\nOn s'élève ensemble\nVers la lumière\nC'est notre instant ce soir\n\n[Bridge]\nSi demain ne vient jamais\nAu moins on aura eu ça\n\n[Outro]" },
      { type: 'subheading', text: 'Ce que font les balises' },
      { type: 'table', headers: ['Balise', 'Rôle'], rows: [
        ['[Intro]', "Pose l'atmosphère, souvent instrumentale"],
        ['[Verse]', 'Le récit principal, énergie modérée'],
        ['[Pre-Chorus]', 'Monte la tension avant le refrain'],
        ['[Chorus]', 'Le sommet émotionnel, énergie maximale'],
        ['[Bridge]', 'Une rupture : autre mélodie, autre couleur'],
        ['[Instrumental]', 'Pas de voix, juste les instruments'],
        ['[Outro]', 'Redescend, souvent en fondu'],
      ]},
      { type: 'subheading', text: 'Astuces paroles' },
      { type: 'ul', items: [
        "Garde des vers de **6 à 10 syllabes** pour que l'IA les place naturellement.",
        "**MAJUSCULES** pour un mot appuyé ou crié.",
        "**(Parenthèses)** pour les chœurs ou les échos en fond.",
        "Ajoute un descripteur à la balise pour plus de contrôle : `[Chorus - hymne]` ou `[Verse - murmuré]`.",
        "Même sans paroles définitives, écrire la suite des balises `[Intro] [Verse] [Chorus] [Verse] [Chorus] [Bridge] [Chorus] [Outro]` donne déjà une feuille de route d'énergie à l'IA.",
      ]},
      { type: 'subheading', text: 'Langue du chant' },
      { type: 'p', text: "ACE-Step chante dans plus de 50 langues, dont le **français**. Choisis la langue du chant, écris tes paroles dans cette langue, et l'IA adapte la prononciation. Tu peux même mélanger deux langues dans un morceau." },
      { type: 'tip', text: "Pour un instrumental : laisse les paroles vides (ou active le bouton Instrumental)." },
    ],
  },
  {
    id: 'audio',
    title: '5. Travailler à partir d\'un audio',
    blocks: [
      { type: 'p', text: "Tu peux guider la génération avec un audio existant. Il y a trois façons de le faire, selon ton intention." },
      { type: 'table', headers: ['Façon', 'Intention'], rows: [
        ['Référence (guide de style)', "« Fais quelque chose qui SONNE comme ça » — même chaleur, même texture, même vibe"],
        ['Source + Reprise', "« Garde la STRUCTURE de ce morceau, change complètement le style »"],
        ['Source + Repeindre', '« Garde tout le morceau SAUF les secondes 10-20, régénère-les »'],
      ]},
      { type: 'subheading', text: 'La force de reprise (Audio Cover Strength)' },
      { type: 'p', text: "En mode Reprise, ce curseur (de 0.0 à 1.0) règle à quel point l'IA suit l'audio d'origine." },
      { type: 'table', headers: ['Valeur', 'Effet', 'Pour…'], rows: [
        ['0.3 - 0.5', 'Gros changements, structure reconnaissable mais transformée', 'Changement radical (country → métal)'],
        ['0.5 - 0.7', 'Mélange équilibré', 'Changement modéré (pop → jazz)'],
        ['0.7 - 0.9', 'Suit de près, retouches subtiles', 'Changement léger (rock → indie rock)'],
      ]},
      { type: 'tip', text: "Recette Reprise : charge ton audio source → tâche Reprise → règle la force → décris le NOUVEAU style → génère un lot de 2-4 → choisis." },
    ],
  },
  {
    id: 'settings',
    title: '6. Régler pour la qualité',
    blocks: [
      { type: 'subheading', text: 'Modèle & vitesse' },
      { type: 'ul', items: [
        "**Turbo** (par défaut) : 8 étapes, très rapide, bonne qualité. Idéal pour explorer au quotidien.",
        "**SFT / Base** : 32 à 50 étapes, plus lent, plus de détail et de nuance. Pour la version finale (et les modes Lego/Extraire/Compléter).",
      ]},
      { type: 'p', text: "La plupart des gens travaillent en Turbo, puis basculent en SFT/Base pour la version définitive." },
      { type: 'subheading', text: 'Les paramètres qui comptent' },
      { type: 'table', headers: ['Réglage', 'Ce qu\'il fait', 'Conseil'], rows: [
        ['Étapes (Steps)', 'Plus = meilleure qualité, plus lent', '8 en Turbo suffit'],
        ['Guidage (Guidance)', "À quel point suivre le prompt", 'Haut = strict, bas = plus libre'],
        ['Graine (Seed)', 'Le hasard de la génération', 'Aléatoire pour varier, fixe pour reproduire un résultat aimé'],
        ['Variations (Batch)', 'Nombre de versions par génération', '2 à 4 recommandé'],
        ['Réflexion (Thinking)', "Le « cerveau parolier » qui planifie structure et métadonnées", 'Coupe-le si tu sais déjà exactement ce que tu veux (plus rapide)'],
        ['Amélioration IA (Enhance)', 'Enrichit tes balises en description détaillée + BPM/tonalité', 'Meilleure précision de genre, +10-20 s'],
      ]},
      { type: 'subheading', text: 'Préréglages de guidage (CFG)' },
      { type: 'ul', items: [
        "**Défaut** : équilibré, base sûre.",
        "**Voix nettes** : voix plus propres, meilleur respect des balises, moins d'artefacts.",
        "**Créatif** : plus de variété, exploration libre au début.",
        "**Reprise** : optimisé pour les reprises/remix, finition naturelle.",
        "**Strict** : fort respect du prompt avec voix nettes.",
      ]},
      { type: 'subheading', text: 'Métadonnées (facultatif)' },
      { type: 'table', headers: ['Réglage', 'Valeurs typiques'], rows: [
        ['Tempo (BPM)', '60-80 lent · 90-120 moyen · 130-180 rapide'],
        ['Tonalité (Key)', 'Do majeur (lumineux) · La mineur (mélancolique)…'],
        ['Durée', '60 s (1 min) · 180 s (3 min) · 300 s (5 min)'],
        ['Format', 'MP3 (plus léger) · FLAC (sans perte)'],
      ]},
      { type: 'p', text: "Si tu ne règles rien, l'IA choisit des valeurs cohérentes d'après ta description et tes paroles." },
    ],
  },
  {
    id: 'lora',
    title: '7. Styles & voix personnalisés (LoRA)',
    blocks: [
      { type: 'p', text: "Un **LoRA** est un petit « module de style » entraîné sur tes propres morceaux. Il rend les générations plus fidèles à ta signature sonore — un genre récurrent, ou même une voix précise." },
      { type: 'subheading', text: 'Utiliser un LoRA' },
      { type: 'ul', items: [
        "Charge ton fichier LoRA dans les contrôles LoRA du panneau Créer.",
        "Règle son influence (échelle de 0 à 100 %).",
        "Génère normalement : le style s'applique.",
      ]},
      { type: 'subheading', text: 'En entraîner un' },
      { type: 'p', text: "L'onglet **Entraînement** construit un jeu de données depuis tes audios (le bouton « Auto-Label » écrit descriptions et métadonnées tout seul), puis entraîne le LoRA. L'entraînement demande une carte graphique costaude (~16 Go de mémoire vidéo) ; la génération avec un LoRA, elle, reste légère." },
      { type: 'tip', text: "Un seul LoRA à la fois. Pour plusieurs styles, entraîne un LoRA par style et change-le selon le morceau." },
    ],
  },
  {
    id: 'good-practice',
    title: '8. Bonnes pratiques & limites',
    blocks: [
      { type: 'subheading', text: 'À retenir' },
      { type: 'ul', items: [
        "**Commence simple, puis affine** : une courte description d'abord, puis du détail là où la sortie t'a surpris.",
        "**Génère en lots** de 2-4, choisis la meilleure.",
        "**Corrige, ne refais pas** : Repeindre pour une portion faible.",
        "**Sois précis sur les instruments** ; utilise les balises de structure.",
        "**Change de graine** pour d'autres interprétations à réglages identiques.",
      ]},
      { type: 'subheading', text: "Ce qu'ACE-Step n'est pas" },
      { type: 'ul', items: [
        "**Pas un logiciel de studio (DAW)** : il produit un audio brut, à importer ensuite dans ton logiciel de montage.",
        "**Pas parfait à tous les coups** : génère plusieurs versions, choisis. C'est un collaborateur, pas un juke-box.",
        "**Pas un service cloud** : tout tourne sur ta machine ; une petite carte graphique limite les résultats.",
        "**Pas de la magie en un clic** : les meilleurs résultats viennent de la façon de décrire — ça se travaille.",
      ]},
    ],
  },
];

const en: GuideSection[] = [
  {
    id: 'getting-started',
    title: '1. Getting Started',
    blocks: [
      { type: 'p', text: "ACE-Step generates complete music — instrumental or sung — from what you write. Everything runs locally on your machine: free, unlimited and private." },
      { type: 'subheading', text: 'Two working modes' },
      { type: 'ul', items: [
        "**Simple** — for speed: describe your song in one sentence, the AI fills the rest, you generate.",
        "**Custom** — for full control: you write the description, the lyrics, the tempo, key and advanced settings.",
      ]},
      { type: 'p', text: "Start in Simple mode to feel how the AI responds, then move to Custom to refine." },
      { type: 'subheading', text: 'The key habit: generate in batches' },
      { type: 'p', text: "Generation involves randomness. Almost never generate a single version: run a **batch of 2-4**, listen, keep the best." },
      { type: 'ul', items: [
        "**Describe → generate (a batch) → listen → refine.** You rarely nail it on the first try.",
        "**Fix, don't redo.** If 90% of a track is great, regenerate only the weak part (Repaint) instead of throwing it all away.",
        "**AutoGen**: prepares the next batch while you listen to the current one, so your flow isn't interrupted.",
      ]},
      { type: 'tip', text: "Think of the AI as a creative collaborator, not a jukebox. The best results come with practice." },
    ],
  },
  {
    id: 'modes',
    title: '2. The 6 Creative Modes',
    blocks: [
      { type: 'p', text: "ACE-Step offers six modes, like six studio tools. Pick them based on what you have as input (nothing, text, audio) and what you want out." },
      { type: 'table', headers: ['Mode', 'What it does', 'Input'], rows: [
        ['🎵 Text to Music', 'Describe → get a complete song', 'Text'],
        ['🎨 Remix', 'Changes the style, keeps the structure (melody, rhythm, form)', 'A source audio'],
        ['🖌️ Repaint', 'Regenerates just one section, keeps the rest intact', 'A source audio'],
        ['🧱 Lego *', 'Stack layers (add bass over drums, strings over guitar…)', 'A backing audio'],
        ['🔬 Extract *', 'Isolate one element from a mix (vocals only, drums only…)', 'A full mix'],
        ['🎹 Complete *', 'Add accompaniment to a lone vocal', 'A vocal'],
      ]},
      { type: 'tip', text: "* Lego, Extract and Complete are only available with a **base/SFT model**, not turbo (the default). Switch model in the left panel to use them." },
    ],
  },
  {
    id: 'style',
    title: '3. Writing the Style (Caption)',
    blocks: [
      { type: 'p', text: "The caption is a short paragraph giving the overall vibe. Ask yourself: \"If I walked into a studio with session musicians, how would I describe what I want?\"" },
      { type: 'subheading', text: 'From vague to specific' },
      { type: 'p', text: "Vague — the AI guesses a lot:" },
      { type: 'code', text: "a sad song" },
      { type: 'p', text: "Specific — the AI has real direction:" },
      { type: 'code', text: "melancholic piano ballad, soft female vocals, gentle strings, slow tempo, intimate and heartbreaking atmosphere" },
      { type: 'subheading', text: 'Name the 4 levers' },
      { type: 'ul', items: [
        "**Genre**: pop, rock, jazz, electronic, folk, hip-hop, lo-fi, synthwave…",
        "**Instruments**: acoustic guitar, piano, synth pads, 808 drums, strings…",
        "**Mood**: melancholic, uplifting, energetic, dreamy, aggressive, intimate…",
        "**Production style**: lo-fi, polished, live recording, bedroom pop, orchestral…",
      ]},
      { type: 'tip', text: "Be specific about instruments. \"rock song\" gives too much freedom; \"rock with crunchy rhythm guitar, punchy snare and gravelly male vocals\" says exactly what you hear in your head." },
    ],
  },
  {
    id: 'lyrics',
    title: '4. Writing the Lyrics',
    blocks: [
      { type: 'p', text: "Lyrics do double duty: they're the sung words, but above all they tell the AI how the song is **structured** over time. You mark sections with tags in square brackets." },
      { type: 'code', text: "[Intro]\n\n[Verse]\nWalking through the empty streets\nThinking of your gentle touch\n\n[Chorus]\nWe rise together\nInto the light\nThis is our moment tonight\n\n[Bridge]\nIf tomorrow never comes\nAt least we had this\n\n[Outro]" },
      { type: 'subheading', text: 'What the tags do' },
      { type: 'table', headers: ['Tag', 'Role'], rows: [
        ['[Intro]', 'Sets the atmosphere, often instrumental'],
        ['[Verse]', 'Main storytelling, moderate energy'],
        ['[Pre-Chorus]', 'Builds tension before the chorus'],
        ['[Chorus]', 'Emotional peak, highest energy'],
        ['[Bridge]', 'A shift: different melody, different feel'],
        ['[Instrumental]', 'No vocals, just instruments'],
        ['[Outro]', 'Winds down, often fades'],
      ]},
      { type: 'subheading', text: 'Lyric tips' },
      { type: 'ul', items: [
        "Keep lines around **6-10 syllables** so the AI fits them naturally.",
        "**UPPERCASE** for an emphasized or shouted word.",
        "**(Parentheses)** for background vocals or echoes.",
        "Add a descriptor to a tag for more control: `[Chorus - anthemic]` or `[Verse - whispered]`.",
        "Even without final words, writing the tag sequence `[Intro] [Verse] [Chorus] [Verse] [Chorus] [Bridge] [Chorus] [Outro]` already gives the AI an energy roadmap.",
      ]},
      { type: 'subheading', text: 'Vocal language' },
      { type: 'p', text: "ACE-Step sings in 50+ languages, including **French**. Pick the vocal language, write your lyrics in it, and the AI adapts pronunciation. You can even mix two languages in one song." },
      { type: 'tip', text: "For an instrumental: leave the lyrics empty (or toggle Instrumental)." },
    ],
  },
  {
    id: 'audio',
    title: '5. Working From Audio',
    blocks: [
      { type: 'p', text: "You can guide generation with an existing audio. There are three ways, depending on your intent." },
      { type: 'table', headers: ['Way', 'Intent'], rows: [
        ['Reference (style guide)', '"Make something that SOUNDS like this" — same warmth, texture, vibe'],
        ['Source + Remix', '"Keep the STRUCTURE of this song, change the style completely"'],
        ['Source + Repaint', '"Keep the whole song EXCEPT seconds 10-20, regenerate those"'],
      ]},
      { type: 'subheading', text: 'Audio Cover Strength' },
      { type: 'p', text: "In Remix mode, this slider (0.0 to 1.0) sets how closely the AI follows the original audio." },
      { type: 'table', headers: ['Value', 'Effect', 'For…'], rows: [
        ['0.3 - 0.5', 'Big changes, structure recognizable but transformed', 'Dramatic change (country → metal)'],
        ['0.5 - 0.7', 'Balanced blend', 'Moderate change (pop → jazz)'],
        ['0.7 - 0.9', 'Follows closely, subtle tweaks', 'Light change (rock → indie rock)'],
      ]},
      { type: 'tip', text: "Remix recipe: upload your source audio → Remix task → set the strength → describe the NEW style → generate a batch of 2-4 → pick." },
    ],
  },
  {
    id: 'settings',
    title: '6. Tuning for Quality',
    blocks: [
      { type: 'subheading', text: 'Model & speed' },
      { type: 'ul', items: [
        "**Turbo** (default): 8 steps, very fast, good quality. Ideal for day-to-day exploring.",
        "**SFT / Base**: 32-50 steps, slower, more detail and nuance. For the final version (and the Lego/Extract/Complete modes).",
      ]},
      { type: 'p', text: "Most people work in Turbo, then switch to SFT/Base for the definitive take." },
      { type: 'subheading', text: 'The settings that matter' },
      { type: 'table', headers: ['Setting', 'What it does', 'Advice'], rows: [
        ['Steps', 'More = better quality, slower', '8 in Turbo is enough'],
        ['Guidance', 'How closely to follow the prompt', 'High = strict, low = freer'],
        ['Seed', 'The randomness of a generation', 'Random to vary, fixed to reproduce a result you liked'],
        ['Variations (Batch)', 'Versions per generation', '2 to 4 recommended'],
        ['Thinking', 'The "songwriter brain" that plans structure and metadata', 'Turn it off if you already know exactly what you want (faster)'],
        ['AI Enhance', 'Enriches your tags into a detailed description + BPM/key', 'Better genre accuracy, +10-20s'],
      ]},
      { type: 'subheading', text: 'Guidance presets (CFG)' },
      { type: 'ul', items: [
        "**Default**: balanced, safe baseline.",
        "**Clean Vocals**: cleaner voices, better tag adherence, fewer artifacts.",
        "**Creative**: more variety, free exploration early on.",
        "**Cover**: optimized for covers/remixes, natural finish.",
        "**Strict**: strong prompt adherence with clean vocals.",
      ]},
      { type: 'subheading', text: 'Metadata (optional)' },
      { type: 'table', headers: ['Setting', 'Typical values'], rows: [
        ['Tempo (BPM)', '60-80 slow · 90-120 medium · 130-180 fast'],
        ['Key', 'C Major (bright) · A minor (melancholic)…'],
        ['Duration', '60s (1 min) · 180s (3 min) · 300s (5 min)'],
        ['Format', 'MP3 (smaller) · FLAC (lossless)'],
      ]},
      { type: 'p', text: "If you set nothing, the AI picks sensible values from your caption and lyrics." },
    ],
  },
  {
    id: 'lora',
    title: '7. Custom Styles & Voices (LoRA)',
    blocks: [
      { type: 'p', text: "A **LoRA** is a small \"style module\" trained on your own tracks. It makes generations more faithful to your sonic signature — a recurring genre, or even a specific voice." },
      { type: 'subheading', text: 'Using a LoRA' },
      { type: 'ul', items: [
        "Load your LoRA file in the LoRA controls of the Create panel.",
        "Set its influence (0 to 100% scale).",
        "Generate as usual: the style applies.",
      ]},
      { type: 'subheading', text: 'Training one' },
      { type: 'p', text: "The **Training** tab builds a dataset from your audio (the \"Auto-Label\" button writes captions and metadata for you), then trains the LoRA. Training needs a strong GPU (~16GB VRAM); generating with a LoRA stays light." },
      { type: 'tip', text: "One LoRA at a time. For several styles, train one LoRA per style and switch depending on the track." },
    ],
  },
  {
    id: 'good-practice',
    title: '8. Best Practices & Limits',
    blocks: [
      { type: 'subheading', text: 'Keep in mind' },
      { type: 'ul', items: [
        "**Start simple, then refine**: a short caption first, then detail where the output surprised you.",
        "**Generate in batches** of 2-4, pick the best.",
        "**Fix, don't redo**: Repaint a weak section.",
        "**Be specific about instruments**; use structure tags.",
        "**Try different seeds** for other takes at identical settings.",
      ]},
      { type: 'subheading', text: "What ACE-Step is not" },
      { type: 'ul', items: [
        "**Not a DAW**: it outputs raw audio to import into your editing software afterwards.",
        "**Not perfect every time**: generate several versions, pick. It's a collaborator, not a jukebox.",
        "**Not a cloud service**: it runs on your machine; a small GPU limits results.",
        "**Not one-click magic**: the best results come from how you describe — it's a skill.",
      ]},
    ],
  },
];

export const guideContent: Record<string, GuideSection[]> = { fr, en };
