import { compose } from '6-shared/lib/compose';
import { withTheme } from './MUI';
import { withReactDayPicker } from './ReactDayPicker';
import { withToastify } from './Toastify';

export const withProviders = compose(withTheme, withToastify, withReactDayPicker);
