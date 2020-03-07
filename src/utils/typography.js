import Typography from 'typography';

const fontFamily = [
  'Inter',
  'Arial',
  'Helvetica',
  '-apple-system',
  'BlinkMacSystemFont',
  'sans-serif',
];

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.529,
  scaleRatio: 5 / 2,
  headerFontFamily: fontFamily,
  headerWeight: '900',
  bodyWeight: '500',
  bodyFontFamily: fontFamily,
  overrideThemeStyles: ({ scale }) => ({
    a: {
      color: '#E42341',
    },
    'a:hover': {
      color: 'blue',
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
  }),
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
