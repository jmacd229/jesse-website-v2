export type PaletteColor = BasicColor | `--${Color}-${Shade}`;

export type BasicColor = '--black' | '--white';
export type Color = 'primary' | 'secondary' | 'neutral';
export type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
