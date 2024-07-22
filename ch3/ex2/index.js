import { EventEmitter } from 'events'

function ticker(num, cb) {
    var emitter = new EventEmitter()
    var startTime = Date.now()
    var tickEvents = 0

    function tickEmitter() {
        var currTime = Date.now()
        var elapsed = currTime - startTime
        if (elapsed <= num) {
            emitter.emit('tick', elapsed)
            tickEvents += 1
            setTimeout(tickEmitter, 50)
        } else {
            cb(tickEvents)
        }
    }

    setTimeout(tickEmitter, 50)

    return emitter;
}

ticker(1000, numTicks => {
    console.log(`Number of ticks: ${numTicks}`)
}).on('tick', (elapsed) => console.log(`tick ${elapsed}`))