/**
 * Custom die-cut scrapbook SVG illustrations & stickers
 * Matches the playful collage charm of the reference video,
 * tailored to a warm, heartfelt apology theme.
 */

const SVG_ASSETS = {
  ribbonLeft: `
    <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0 C30 40, 18 80, 32 135" stroke="#d88a99" stroke-width="4" stroke-linecap="round"/>
      <path d="M72 0 C65 36, 78 72, 66 115" stroke="#c8526c" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Bow -->
      <path d="M32 32 C12 20, 8 44, 30 38 Z" fill="#f2b8c4" stroke="#b84b64" stroke-width="2"/>
      <path d="M34 32 C54 20, 58 44, 36 38 Z" fill="#f2b8c4" stroke="#b84b64" stroke-width="2"/>
      <circle cx="33" cy="35" r="5" fill="#b84b64"/>
      <!-- Hanging star & heart -->
      <path d="M66 112 L70 121 L80 122 L72 128 L74 138 L66 133 L58 138 L60 128 L52 122 L62 121 Z" fill="#f5cbd3" stroke="#b84b64" stroke-width="2"/>
      <path d="M32 132 C26 125, 16 130, 21 139 L32 148 L43 139 C48 130, 38 125, 32 132 Z" fill="#d97288" stroke="#fff" stroke-width="2"/>
    </svg>
  `,

  ribbonRight: `
    <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M88 0 C82 38, 95 78, 82 130" stroke="#c8526c" stroke-width="4" stroke-linecap="round"/>
      <path d="M44 0 C50 32, 38 66, 48 102" stroke="#d88a99" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Bow -->
      <path d="M84 36 C64 24, 60 48, 82 42 Z" fill="#f5cbd3" stroke="#b84b64" stroke-width="2"/>
      <path d="M86 36 C106 24, 110 48, 88 42 Z" fill="#f5cbd3" stroke="#b84b64" stroke-width="2"/>
      <circle cx="85" cy="39" r="5" fill="#b84b64"/>
      <!-- Sparkles -->
      <path d="M48 98 L52 108 L62 112 L52 116 L48 126 L44 116 L34 112 L44 108 Z" fill="#fff3d6" stroke="#d9a05b" stroke-width="2"/>
      <path d="M82 126 C76 119, 66 124, 71 133 L82 142 L93 133 C98 124, 88 119, 82 126 Z" fill="#b84b64" stroke="#fff" stroke-width="2"/>
    </svg>
  `,

  coverKitty: `
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Soft backdrop -->
      <circle cx="110" cy="105" r="78" fill="#ffe9ee"/>
      <!-- Ears -->
      <path d="M62 78 L54 34 L94 56 Z" fill="#f7c89c" stroke="#5a382c" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M158 78 L166 34 L126 56 Z" fill="#f7c89c" stroke="#5a382c" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M66 70 L61 45 L84 58 Z" fill="#f49fb0"/>
      <path d="M154 70 L159 45 L136 58 Z" fill="#f49fb0"/>
      <!-- Head -->
      <ellipse cx="110" cy="100" rx="56" ry="46" fill="#fbe0c4" stroke="#5a382c" stroke-width="3.5"/>
      <!-- Pleading Big Puppy Eyes -->
      <circle cx="88" cy="96" r="10.5" fill="#3a2328"/>
      <circle cx="84.5" cy="92.5" r="4" fill="#fff"/>
      <circle cx="91.5" cy="100" r="2" fill="#fff"/>
      <circle cx="132" cy="96" r="10.5" fill="#3a2328"/>
      <circle cx="128.5" cy="92.5" r="4" fill="#fff"/>
      <circle cx="135.5" cy="100" r="2" fill="#fff"/>
      <!-- Blush -->
      <ellipse cx="72" cy="109" rx="9" ry="5" fill="#f49fb0" opacity="0.7"/>
      <ellipse cx="148" cy="109" rx="9" ry="5" fill="#f49fb0" opacity="0.7"/>
      <!-- Nose & tiny mouth -->
      <polygon points="106,105 114,105 110,110" fill="#e06f85"/>
      <path d="M103 114 Q110 119 117 114" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Envelope held in paws -->
      <rect x="74" y="130" width="72" height="46" rx="6" fill="#fff" stroke="#b84b64" stroke-width="3"/>
      <path d="M74 134 L110 158 L146 134" stroke="#b84b64" stroke-width="2.5" fill="none"/>
      <path d="M110 144 C106 139, 98 142, 102 149 L110 156 L118 149 C122 142, 114 139, 110 144 Z" fill="#d94e6c"/>
      <!-- Paws -->
      <ellipse cx="76" cy="150" rx="11" ry="8" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <ellipse cx="144" cy="150" rx="11" ry="8" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
    </svg>
  `,

  doodleHearts: `
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 28 C28 16, 10 22, 17 38 L36 56 L55 38 C62 22, 44 16, 36 28 Z" fill="#d97288" stroke="#fff" stroke-width="4"/>
      <path d="M72 42 C67 34, 55 38, 59 48 L72 60 L85 48 C89 38, 77 34, 72 42 Z" fill="#f2b8c4" stroke="#fff" stroke-width="3.5"/>
    </svg>
  `,

  apologyKitty: `
    <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Die-cut sticker white outline halo -->
      <circle cx="95" cy="98" r="78" fill="#fff" stroke="#f5cbd3" stroke-width="3"/>
      <!-- Ears -->
      <path d="M56 76 L50 38 L86 58 Z" fill="#f5d5b8" stroke="#5a382c" stroke-width="3" stroke-linejoin="round"/>
      <path d="M134 76 L140 38 L104 58 Z" fill="#f5d5b8" stroke="#5a382c" stroke-width="3" stroke-linejoin="round"/>
      <!-- Head -->
      <ellipse cx="95" cy="92" rx="48" ry="40" fill="#faebd7" stroke="#5a382c" stroke-width="3"/>
      <!-- Sad apologetic eyebrows & teary eyes -->
      <path d="M68 77 Q77 73 84 79" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M122 77 Q113 73 106 79" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="77" cy="90" r="8.5" fill="#3a2328"/>
      <circle cx="74" cy="87" r="3" fill="#fff"/>
      <circle cx="113" cy="90" r="8.5" fill="#3a2328"/>
      <circle cx="110" cy="87" r="3" fill="#fff"/>
      <ellipse cx="77" cy="100" rx="3" ry="4.5" fill="#89c4e1"/>
      <ellipse cx="113" cy="100" rx="3" ry="4.5" fill="#89c4e1"/>
      <!-- Tiny wavy mouth -->
      <path d="M88 106 Q95 102 102 106" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Little "SORRY" sign -->
      <rect x="47" y="122" width="96" height="36" rx="8" fill="#fff0f3" stroke="#b84b64" stroke-width="2.5"/>
      <text x="95" y="146" text-anchor="middle" fill="#b84b64" font-family="Fredoka, sans-serif" font-weight="700" font-size="16">I'M SORRY</text>
    </svg>
  `,

  bandaidHeart: `
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M80 34 C66 14, 34 22, 44 50 L80 86 L116 50 C126 22, 94 14, 80 34 Z" fill="#e26e86" stroke="#b84b64" stroke-width="3"/>
      <!-- Cute band-aid across heart -->
      <g transform="rotate(-18 80 54)">
        <rect x="52" y="43" width="56" height="20" rx="9" fill="#ffe6cc" stroke="#d4a373" stroke-width="2"/>
        <rect x="70" y="45" width="20" height="16" rx="2" fill="#fff4e6"/>
        <circle cx="62" cy="50" r="1.5" fill="#c99362"/>
        <circle cx="62" cy="56" r="1.5" fill="#c99362"/>
        <circle cx="98" cy="50" r="1.5" fill="#c99362"/>
        <circle cx="98" cy="56" r="1.5" fill="#c99362"/>
      </g>
    </svg>
  `,

  film1: `
    <svg viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="90" fill="#fdebed"/>
      <circle cx="48" cy="48" r="16" fill="#ffd8c2" stroke="#5a382c" stroke-width="2.5"/>
      <circle cx="102" cy="48" r="16" fill="#f7c8a8" stroke="#5a382c" stroke-width="2.5"/>
      <path d="M75 30 C70 23, 60 27, 64 35 L75 45 L86 35 C90 27, 80 23, 75 30 Z" fill="#d94e6c"/>
      <text x="75" y="79" text-anchor="middle" fill="#63434e" font-family="Caveat, cursive" font-size="15" font-weight="700">random texts</text>
    </svg>
  `,

  film2: `
    <svg viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="90" fill="#fff3e8"/>
      <circle cx="75" cy="38" r="22" fill="#ffe0b5" stroke="#c8526c" stroke-width="2.5"/>
      <path d="M64 35 Q67 31 70 35" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M80 35 Q83 31 86 35" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M66 44 Q75 53 84 44" stroke="#b84b64" stroke-width="2.5" stroke-linecap="round"/>
      <text x="75" y="79" text-anchor="middle" fill="#63434e" font-family="Caveat, cursive" font-size="15" font-weight="700">your smile :)</text>
    </svg>
  `,

  film3: `
    <svg viewBox="0 0 150 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="90" fill="#f3eef8"/>
      <path d="M35 55 Q75 20 115 55" stroke="#b84b64" stroke-width="3" stroke-dasharray="4 4"/>
      <circle cx="48" cy="48" r="10" fill="#f5cbd3"/>
      <circle cx="102" cy="48" r="10" fill="#f5cbd3"/>
      <text x="75" y="79" text-anchor="middle" fill="#63434e" font-family="Caveat, cursive" font-size="15" font-weight="700">always us</text>
    </svg>
  `,

  blushKitty: `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="64" r="46" fill="#fff" stroke="#f5cbd3" stroke-width="3"/>
      <path d="M36 48 L32 22 L56 36 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="2.5"/>
      <path d="M84 48 L88 22 L64 36 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="2.5"/>
      <ellipse cx="60" cy="64" rx="32" ry="26" fill="#fbe0c4" stroke="#5a382c" stroke-width="2.5"/>
      <circle cx="48" cy="61" r="4" fill="#3a2328"/>
      <circle cx="72" cy="61" r="4" fill="#3a2328"/>
      <ellipse cx="41" cy="69" rx="6" ry="3.5" fill="#f28da2"/>
      <ellipse cx="79" cy="69" rx="6" ry="3.5" fill="#f28da2"/>
      <path d="M55 70 Q60 74 65 70" stroke="#5a382c" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M88 28 C84 22, 76 26, 79 33 L88 41 L97 33 C100 26, 92 22, 88 28 Z" fill="#d94e6c"/>
    </svg>
  `,

  littleFlower: `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="24" r="11" fill="#f5cbd3" stroke="#fff" stroke-width="2"/>
      <circle cx="55" cy="36" r="11" fill="#f5cbd3" stroke="#fff" stroke-width="2"/>
      <circle cx="49" cy="54" r="11" fill="#f5cbd3" stroke="#fff" stroke-width="2"/>
      <circle cx="31" cy="54" r="11" fill="#f5cbd3" stroke="#fff" stroke-width="2"/>
      <circle cx="25" cy="36" r="11" fill="#f5cbd3" stroke="#fff" stroke-width="2"/>
      <circle cx="40" cy="40" r="10" fill="#f6c873"/>
    </svg>
  `,

  tearyBunny: `
    <svg viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="42" cy="28" rx="9" ry="22" transform="rotate(-10 42 28)" fill="#fff" stroke="#63434e" stroke-width="2.5"/>
      <ellipse cx="68" cy="28" rx="9" ry="22" transform="rotate(10 68 28)" fill="#fff" stroke="#63434e" stroke-width="2.5"/>
      <ellipse cx="55" cy="62" rx="30" ry="25" fill="#fff" stroke="#63434e" stroke-width="2.5"/>
      <circle cx="44" cy="58" r="4.5" fill="#3a2328"/>
      <circle cx="66" cy="58" r="4.5" fill="#3a2328"/>
      <circle cx="43" cy="56.5" r="1.5" fill="#fff"/>
      <circle cx="65" cy="56.5" r="1.5" fill="#fff"/>
      <ellipse cx="37" cy="65" rx="5" ry="3" fill="#f5b3c0"/>
      <ellipse cx="73" cy="65" rx="5" ry="3" fill="#f5b3c0"/>
      <path d="M51 67 Q55 64 59 67" stroke="#63434e" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  redoHurt: `
    <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="220" height="180" fill="#f7eef2"/>
      <!-- Clock rewind ring -->
      <circle cx="110" cy="90" r="56" stroke="#d88a99" stroke-width="3" stroke-dasharray="7 6"/>
      <path d="M110 58 C95 36, 62 46, 72 74 L106 108 L104 82 L114 70 Z" fill="#d97288"/>
      <path d="M116 58 C131 36, 160 46, 150 74 L118 108 L114 82 L122 70 Z" fill="#b84b64"/>
      <text x="110" y="144" text-anchor="middle" fill="#63434e" font-family="Caveat, cursive" font-size="18" font-weight="700">tap to rewind...</text>
    </svg>
  `,

  redoHug: `
    <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="220" height="180" fill="#fff0f3"/>
      <circle cx="110" cy="86" r="58" fill="#ffe0e7"/>
      <!-- Two cuddling characters -->
      <circle cx="92" cy="84" r="24" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <circle cx="128" cy="86" r="24" fill="#fff" stroke="#5a382c" stroke-width="3"/>
      <path d="M84 82 Q88 78 92 82" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M126 84 Q130 80 134 84" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Warm heart above -->
      <path d="M110 38 C103 28, 88 33, 94 45 L110 59 L126 45 C132 33, 117 28, 110 38 Z" fill="#d94e6c"/>
      <text x="110" y="152" text-anchor="middle" fill="#b84b64" font-family="Caveat, cursive" font-size="19" font-weight="700">big warm hug instead 🫂</text>
    </svg>
  `,

  binderClip: `
    <svg viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 26 C22 8, 48 8, 48 26" stroke="#a69095" stroke-width="4" fill="none"/>
      <rect x="12" y="24" width="46" height="28" rx="5" fill="#5e434d" stroke="#fff" stroke-width="2"/>
      <rect x="17" y="29" width="36" height="6" rx="2" fill="#8f6c78"/>
    </svg>
  `,

  journalCouple: `
    <svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="180" height="130" fill="#f9eff4"/>
      <path d="M16 104 Q90 80 164 104 L164 130 L16 130 Z" fill="#f2d5dc"/>
      <!-- Moon & stars -->
      <circle cx="144" cy="28" r="14" fill="#ffe8b8"/>
      <circle cx="149" cy="24" r="12" fill="#f9eff4"/>
      <!-- Two figures sitting together -->
      <circle cx="72" cy="70" r="14" fill="#fbe0c4" stroke="#5a382c" stroke-width="2.5"/>
      <circle cx="106" cy="72" r="14" fill="#f5c6a5" stroke="#5a382c" stroke-width="2.5"/>
      <path d="M56 105 C58 84, 86 84, 88 105" fill="#d88a99"/>
      <path d="M90 105 C92 86, 120 86, 122 105" fill="#8ca894"/>
      <path d="M90 42 C86 36, 77 39, 80 46 L90 55 L100 46 C103 39, 94 36, 90 42 Z" fill="#d94e6c"/>
    </svg>
  `,

  starSticker: `
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 8 L36 22 L51 24 L40 34 L43 49 L30 42 L17 49 L20 34 L9 24 L24 22 Z" fill="#f7d07a" stroke="#fff" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>
  `,

  moonSticker: `
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 12 C23 12, 13 24, 15 38 C17 48, 28 53, 40 48 C29 47, 24 38, 25 28 C26 19, 32 14, 38 12 Z" fill="#f5cbd3" stroke="#b84b64" stroke-width="2.5"/>
    </svg>
  `,

  story1: `
    <svg viewBox="0 0 160 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="105" fill="#3a2936"/>
      <circle cx="32" cy="24" r="2" fill="#ffe8b8"/>
      <circle cx="128" cy="20" r="2.5" fill="#ffe8b8"/>
      <circle cx="108" cy="34" r="1.5" fill="#ffe8b8"/>
      <rect x="44" y="34" width="72" height="44" rx="12" fill="#fff0f3"/>
      <circle cx="64" cy="56" r="4" fill="#d97288"/>
      <circle cx="80" cy="56" r="4" fill="#d97288"/>
      <circle cx="96" cy="56" r="4" fill="#d97288"/>
    </svg>
  `,

  story2: `
    <svg viewBox="0 0 160 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="105" fill="#fff4ea"/>
      <!-- Cupcake / treat -->
      <path d="M58 58 L102 58 L95 86 L65 86 Z" fill="#d9a05b"/>
      <path d="M54 58 C54 40, 106 40, 106 58 Z" fill="#f5b3c0"/>
      <circle cx="80" cy="36" r="7" fill="#c8526c"/>
    </svg>
  `,

  story3: `
    <svg viewBox="0 0 160 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="105" fill="#fdeff2"/>
      <path d="M56 54 C46 38, 22 44, 28 64 L56 90 L84 64 C90 44, 66 38, 56 54 Z" fill="#d88a99"/>
      <path d="M104 54 C94 38, 70 44, 76 64 L104 90 L132 64 C138 44, 114 38, 104 54 Z" fill="#b84b64" opacity="0.88"/>
    </svg>
  `,

  pinkyPromise: `
    <svg viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 58 C34 52, 48 42, 62 46 C69 48, 70 58, 60 62" stroke="#5a382c" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M126 58 C106 52, 92 42, 78 46 C71 48, 70 58, 80 62" stroke="#b84b64" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M70 22 C65 14, 54 18, 58 27 L70 38 L82 27 C86 18, 75 14, 70 22 Z" fill="#d94e6c"/>
    </svg>
  `,

  bouquetKitty: `
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="110" cy="112" r="92" fill="#fff" stroke="#f5cbd3" stroke-width="4"/>
      <!-- Kitty head -->
      <path d="M68 74 L60 34 L94 56 Z" fill="#f7c89c" stroke="#5a382c" stroke-width="3"/>
      <path d="M152 74 L160 34 L126 56 Z" fill="#f7c89c" stroke="#5a382c" stroke-width="3"/>
      <ellipse cx="110" cy="92" rx="48" ry="38" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <circle cx="92" cy="90" r="8" fill="#3a2328"/>
      <circle cx="89" cy="87" r="2.8" fill="#fff"/>
      <circle cx="128" cy="90" r="8" fill="#3a2328"/>
      <circle cx="125" cy="87" r="2.8" fill="#fff"/>
      <ellipse cx="78" cy="100" rx="7" ry="4" fill="#f49fb0"/>
      <ellipse cx="142" cy="100" rx="7" ry="4" fill="#f49fb0"/>
      <path d="M104 103 Q110 108 116 103" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Bouquet of Roses -->
      <ellipse cx="75" cy="128" rx="12" ry="7" transform="rotate(-30 75 128)" fill="#8ca894"/>
      <ellipse cx="145" cy="128" rx="12" ry="7" transform="rotate(30 145 128)" fill="#8ca894"/>
      <path d="M78 134 L110 192 L142 134 Z" fill="#f5cbd3" stroke="#b84b64" stroke-width="2.5"/>
      <circle cx="90" cy="130" r="14" fill="#e26e86"/>
      <circle cx="110" cy="122" r="16" fill="#c8526c"/>
      <circle cx="130" cy="130" r="14" fill="#f28da2"/>
      <circle cx="100" cy="138" r="12" fill="#f7a8b8"/>
      <circle cx="120" cy="138" r="12" fill="#d94e6c"/>
    </svg>
  `,

  gateKittyAsk: `
    <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52 62 L46 24 L80 46 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <path d="M128 62 L134 24 L100 46 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <ellipse cx="90" cy="80" rx="46" ry="38" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <circle cx="72" cy="78" r="8.5" fill="#3a2328"/>
      <circle cx="69" cy="75" r="3" fill="#fff"/>
      <circle cx="108" cy="78" r="8.5" fill="#3a2328"/>
      <circle cx="105" cy="75" r="3" fill="#fff"/>
      <ellipse cx="58" cy="88" rx="7" ry="4" fill="#f49fb0"/>
      <ellipse cx="122" cy="88" rx="7" ry="4" fill="#f49fb0"/>
      <path d="M84 91 Q90 96 96 91" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Holding heart -->
      <path d="M90 112 C82 100, 64 106, 70 121 L90 140 L110 121 C116 106, 98 100, 90 112 Z" fill="#d94e6c" stroke="#fff" stroke-width="2.5"/>
    </svg>
  `,

  gateKittySad: `
    <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 66 L40 30 L78 48 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <path d="M130 66 L140 30 L102 48 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <ellipse cx="90" cy="84" rx="46" ry="38" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <path d="M62 67 Q71 63 79 69" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M118 67 Q109 63 101 69" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="72" cy="82" r="9" fill="#3a2328"/>
      <circle cx="69" cy="79" r="3.5" fill="#fff"/>
      <circle cx="108" cy="82" r="9" fill="#3a2328"/>
      <circle cx="105" cy="79" r="3.5" fill="#fff"/>
      <ellipse cx="72" cy="94" rx="3.5" ry="5" fill="#89c4e1"/>
      <ellipse cx="108" cy="94" rx="3.5" ry="5" fill="#89c4e1"/>
      <path d="M84 100 Q90 94 96 100" stroke="#5a382c" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  gateKittyHappy: `
    <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52 62 L46 24 L80 46 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <path d="M128 62 L134 24 L100 46 Z" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <ellipse cx="90" cy="80" rx="46" ry="38" fill="#fbe0c4" stroke="#5a382c" stroke-width="3"/>
      <!-- Happy curved eyes -->
      <path d="M64 78 Q72 70 80 78" stroke="#3a2328" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M100 78 Q108 70 116 78" stroke="#3a2328" stroke-width="3.2" stroke-linecap="round"/>
      <ellipse cx="58" cy="88" rx="8" ry="4.5" fill="#f28da2"/>
      <ellipse cx="122" cy="88" rx="8" ry="4.5" fill="#f28da2"/>
      <path d="M82 91 Q90 100 98 91" stroke="#b84b64" stroke-width="2.8" stroke-linecap="round"/>
      <!-- Sparkle hearts -->
      <path d="M32 42 C28 36, 20 39, 23 46 L32 54 L41 46 C44 39, 36 36, 32 42 Z" fill="#d94e6c"/>
      <path d="M148 42 C144 36, 136 39, 139 46 L148 54 L157 46 C160 39, 152 36, 148 42 Z" fill="#d94e6c"/>
    </svg>
  `,
};

function mountIllustrations() {
  const slots = {
    "decor-ribbon-left": SVG_ASSETS.ribbonLeft,
    "decor-ribbon-right": SVG_ASSETS.ribbonRight,
    "art-cover-kitty": SVG_ASSETS.coverKitty,
    "art-doodle-hearts": SVG_ASSETS.doodleHearts,
    "art-apology-kitty": SVG_ASSETS.apologyKitty,
    "art-bandaid-heart": SVG_ASSETS.bandaidHeart,
    "art-film-1": SVG_ASSETS.film1,
    "art-film-2": SVG_ASSETS.film2,
    "art-film-3": SVG_ASSETS.film3,
    "art-blush-kitty": SVG_ASSETS.blushKitty,
    "art-little-flower": SVG_ASSETS.littleFlower,
    "art-teary-bunny": SVG_ASSETS.tearyBunny,
    "art-redo-scene": SVG_ASSETS.redoHurt,
    "art-clip-left": SVG_ASSETS.binderClip,
    "art-clip-right": SVG_ASSETS.binderClip,
    "art-journal-couple": SVG_ASSETS.journalCouple,
    "art-star-sticker": SVG_ASSETS.starSticker,
    "art-moon-sticker": SVG_ASSETS.moonSticker,
    "art-story-1": SVG_ASSETS.story1,
    "art-story-2": SVG_ASSETS.story2,
    "art-story-3": SVG_ASSETS.story3,
    "art-pinky-promise": SVG_ASSETS.pinkyPromise,
    "art-bouquet-kitty": SVG_ASSETS.bouquetKitty,
    "art-gate-kitty-ask": SVG_ASSETS.gateKittyAsk,
    "art-gate-kitty-sad": SVG_ASSETS.gateKittySad,
    "art-gate-kitty-happy": SVG_ASSETS.gateKittyHappy,
  };

  Object.entries(slots).forEach(([id, svg]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = svg;
  });
}

window.SVG_ASSETS = SVG_ASSETS;
window.mountIllustrations = mountIllustrations;
