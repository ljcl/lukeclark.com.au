// flow-typed signature: a9a24d5d950e529d3e61e8e5677d1d17
// flow-typed version: <<STUB>>/typography_v0.16/flow_v0.92.1

declare module 'typography' {
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
  declare class Typography {
    constructor(opts: TypographyOptions): void;
    options: TypographyOptions;
    createStyles(): string;
    toJSON(): Object;
    injectStyles(): void;
    rhythm: (value: number) => string;
    scale: (value: number) => BaseLine;
  }
  declare export default typeof Typography;
}
