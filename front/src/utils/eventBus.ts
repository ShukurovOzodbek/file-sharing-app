class EventBus {
    events: any = [];
    
    constructor() {
    }
    
    on(event: string, func: (data: any) => void) {
        this.events.push({event, func});
    }
    
    emit(event: string, data: any) {
        this.events.forEach((listener: any) => {
            if (listener.event === event) {
                listener.func(data);
            }
        })
    }
}

export default new EventBus();