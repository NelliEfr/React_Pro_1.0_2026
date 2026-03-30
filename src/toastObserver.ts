import type { ToastModel } from './types.ts';

type Subscribers = (toast: ToastModel) => void;

class ToastObserver {
    private subscribers: Subscribers[] = [];

    public subscribe(subscriber: Subscribers) {
        this.subscribers.push(subscriber);

        return () => {
            this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
        };
    }

    public notify(toast: Omit<ToastModel, 'id'>) {
        this.subscribers.forEach((subscribers) =>
            subscribers({
                id: String(Date.now()),
                ...toast,
            }),
        );
    }
}

export const toastObserver = new ToastObserver();
