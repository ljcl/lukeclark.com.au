// flow-typed signature: 6f11963893afbf95ff70e2fd07a04938
// flow-typed version: <<STUB>>/typography-theme-us-web-design-standards_v0.16.18/flow_v0.92.1

declare module 'typography-theme-us-web-design-standards' {
  declare type BaseLine = {
    fontSize: string,
    lineHeight: string
  };

  declare type VerticalRhythm = {
    rhythm: (value: number) => string,
    scale: (value: number) => BaseLine,
    adjustFontSizeTo: (value?: number | string) => Object,
    linesForFontSize: (fontSize: number) => number,
    establishBaseline: () => BaseLine
  };
  declare type GoogleFont = {
    name: string,
    styles: Array<string>
  };
  declare type TypographyOptions = {
    baseFontSize?: string,
    baseLineHeight?: number,
    scaleRatio?: number,
    googleFonts?: Array<GoogleFont>,
    headerFontFamily?: Array<string>,
    bodyFontFamily?: Array<string>,
    headerColor?: string,
    bodyColor?: string,
    headerWeight?: number | string,
    bodyWeight?: number | string,
    boldWeight?: number | string,
    blockMarginBottom?: number,
    includeNormalize?: boolean,
    overrideStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: any
    ) => Object,
    overrideThemeStyles?: (
      VerticalRhythm: VerticalRhythm,
      options: TypographyOptions,
      styles: any
    ) => Object,
    plugins?: Array<any>
  };
  declare export default TypographyOptions;
}
