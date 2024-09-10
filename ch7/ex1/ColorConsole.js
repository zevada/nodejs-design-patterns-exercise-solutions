export function createConsoleLogger(type) {
    switch (type) {
        case 'red':
            return new RedConsole();
        case 'blue':
            return new BlueConsole();
        case 'green':
            return new GreenConsole();
        default:
            return new ColorConsole();
    }
}

class ColorConsole {
    constructor() {
        this.colorCode = '\x1b[0m';
        this.resetCode = '\x1b[0m';
    }

    log(msg) {
        console.log(`${this.colorCode}${msg}${this.resetCode}`);
    }
};

class RedConsole extends ColorConsole {
    constructor() {
        super();
        this.colorCode = '\x1b[31m';
    }
}

class BlueConsole extends ColorConsole {
    constructor() {
        super();
        this.colorCode = '\x1b[34m';
    }
}

class GreenConsole extends ColorConsole {
    constructor() {
        super();
        this.colorCode = '\x1b[32m';
    }
}