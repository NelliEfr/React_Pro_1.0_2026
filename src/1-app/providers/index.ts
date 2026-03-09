import { compose } from '6-shared/lib/compose';
import { withTheme } from './MUI';
import { withToastify } from './Toastyfy';

export const withProviders = compose(withTheme, withToastify);
