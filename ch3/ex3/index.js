import { EventEmitter } from 'events'

function ticker(num, cb) {
    var emitter = new EventEmitter()
    var startTime = Date.now()
    var tickEvents = 0

    function tick(elapsed) {
        emitter.emit('tick', elapsed)
        tickEvents += 1
    }

    function tickEmitter() {
        var currTime = Date.now()
        var elapsed = currTime - startTime
        if (elapsed <= num) {
            tick(elapsed)
            setTimeout(tickEmitter, 50)
        } else {
            cb(tickEvents)
        }
    }

    process.nextTick(() => tick(0))
    setTimeout(tickEmitter, 50)

    return emitter;
}

ticker(1000, numTicks => { console.log(`Number of ticks: ${numTicks}`) })
    .on('tick', (elapsed) => console.log(`tick ${elapsed}`))
    .on('started', () => console.log("Started"))