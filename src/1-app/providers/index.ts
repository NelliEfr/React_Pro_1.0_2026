import { compose } from '6-shared/lib/compose';
import { withAuthProvider } from './Auth';
import { withTheme } from './MUI';
import { withMyModal } from './MyModal';
import { withMyToast } from './MyToast';
import { withReactDayPicker } from './ReactDayPicker';
import { withTanStackQuery } from './TanStackQuery';
import { withToastify } from './Toastify';

export const withProviders = compose(
    withAuthProvider,
    withTheme,
    withMyToast,
    withMyModal,
    withToastify,
    withTanStackQuery,
    withReactDayPicker,
);
