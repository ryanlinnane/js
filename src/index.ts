const { spawn: nativeSpawn } = require('child_process');

export function spawn(cmd: string, args: string[]): Promise<{ ok: boolean, result: string, code: number }> {
  return new Promise((resolve, reject) => {
    let executed = nativeSpawn(cmd, args);
    let accum = '';
    executed.stdout.on('data', (data: string) => {
      accum += data;
    });
    executed.on('close', (code: number) => {
      resolve({ ok: code == 0, result: accum.toString(), code });
    });
    executed.on('exit', (code: number) => {
      resolve({ ok: code == 0, result: accum.toString(), code });
    });
  });
}
