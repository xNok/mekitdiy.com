// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // --- Dark Mode Neo-Brutalist Palette ---
        'nb-dark-bg': '#1A1A1A',
        'nb-dark-text': '#F0F0F0',        // Default text on nb-dark-bg
        'nb-dark-border': '#4A4A4A',

        // --- Light Mode Neo-Brutalist Palette ---
        'nb-light-bg': '#FFFFFF',
        'nb-light-text': '#0A0A0A',
        'nb-light-border': '#7D7D7D',
        'nb-light-placeholder': '#E0E0E0',

        // --- Logo Accents (for general UI highlights, secondary actions, non-card elements) ---
        'logo-accent-cyan': '#50C8FF',
        'logo-accent-teal': '#30D5C8',

        // === Pop Colors for Card Backgrounds ===
        'nb-pop-red':    '#FF3B30',
        'nb-pop-orange': '#FF9500',
        'nb-pop-yellow': '#FFCC00',
        'nb-pop-lime':   '#BFFF00',
        'nb-pop-mint':   '#00E0C7',
        'nb-pop-blue':   '#007AFF',
        'nb-pop-purple': '#BF5AF2',
        'nb-pop-pink':   '#FF2D55',

        // --- Dedicated Text Colors for Pop Card Backgrounds ---
        'text-on-pop-bright': '#FFFFFF', // For use on darker pop card backgrounds (red, blue, purple, pink)
        'text-on-pop-dark': '#0A0A0A',   // For use on lighter pop card backgrounds (orange, yellow, lime, mint)
      },
    },
  },
  plugins: [],
};
