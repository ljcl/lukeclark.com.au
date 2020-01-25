import Typography from 'typography';
import Uswds from 'typography-theme-us-web-design-standards';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
Uswds.overrideThemeStyles = ({ scale }) => ({
  a: {
    color: '#E42341',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: scale(1.1),
  },
  'h1,h2,h3,h4,h5,h6': {
    fontStyle: 'italic',
  },
  'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
    textDecoration: 'none',
  },
});

delete Uswds.googleFonts;
Uswds.baseFontSize = '17px';
Uswds.baseLineHeight = 1.529;
Uswds.scaleRatio = 5 / 2;
Uswds.googleFonts = [{ name: 'Merriweather', styles: ['400i&display=swap'] }];
Uswds.bodyFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
];

Uswds.headerWeight = '400';

const typography = new Typography(Uswds);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
