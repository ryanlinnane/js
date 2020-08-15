"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawn = void 0;
var nativeSpawn = require('child_process').spawn;
function spawn(cmd, args) {
    return new Promise(function (resolve, reject) {
        var executed = nativeSpawn(cmd, args);
        var accum = '';
        executed.stdout.on('data', function (data) {
            accum += data;
        });
        executed.on('close', function (code) {
            resolve({ ok: code == 0, result: accum.toString(), code: code });
        });
        executed.on('exit', function (code) {
            resolve({ ok: code == 0, result: accum.toString(), code: code });
        });
    });
}
exports.spawn = spawn;
