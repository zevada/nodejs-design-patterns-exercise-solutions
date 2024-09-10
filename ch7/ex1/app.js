import { createConsoleLogger } from "./ColorConsole.js";

let greenConsoleLogger = createConsoleLogger('green');
greenConsoleLogger.log('Green logger!');

let redConsoleLogger = createConsoleLogger('red');
redConsoleLogger.log('Red logger!');

