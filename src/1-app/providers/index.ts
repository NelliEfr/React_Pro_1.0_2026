import { compose } from '6-shared/lib/compose';
import { withTheme } from './MUI';

export const withProviders = compose(withTheme);
