class Timer {
    constructor () {
        this.startTime = 0;
        this.elapsedTime = 0;

    }

    update() {
        this.elapsedTime += 100;
    }

    start() {
        setInterval(() => this.update(), 100); 
    }
    
    stop() {
        clearInterval(this.timerInterval);
        this.update();
    } 
    getTime() {
        return {'elapsed': this.elapsedTime, 'start: ': this.startTime}
    }
    clear() {
        this.stop()
        this.startTime = 0;
        this.elapsedTime = 0;
    }
    isFinished() {
        return 
    }
}

export const timer = new Timer();