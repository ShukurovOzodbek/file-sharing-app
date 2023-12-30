// @ts-ignore
import eventBus from "~/utils/eventBus";

export const useToast = (id: string) => {
    return {
        open() {
            eventBus.emit('toast.open', {id});
        },
        close() {
            eventBus.emit('toast.close', {id});
        }
    }
}