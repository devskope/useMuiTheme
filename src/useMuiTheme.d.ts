import { ThemeOptions } from '@material-ui/core';
import { ResponsiveFontSizesOptions } from '@material-ui/core/styles/responsiveFontSizes';

interface ThemeOpts extends ThemeOptions {
  name?: string;
}

export default useMuiTheme;
/**
 * useMuiTheme configuration
 */
export type UseMuiThemeConfig = {
  /**
   * Theme options object.
   */
  themeOptions?: ThemeOpts;
  /**
   * Deep merge the arguments with the about to be returned theme.
   */
  themeArgs?: Array<Object>;
  /**
   * Generate responsive typography settings based on the options received. - false
   */
  responsiveFonts?: boolean;
  /**
   * (Object [optional])
   */
  fontOptions?: ResponsiveFontSizesOptions;
};

/**
 * returns a custom material-ui theme and a callback to set the theme value.
 */
declare function useMuiTheme(
  initialConfig?: UseMuiThemeConfig
): [import('@material-ui/core').Theme, Function];
