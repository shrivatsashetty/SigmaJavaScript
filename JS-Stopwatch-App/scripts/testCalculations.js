let timeMiliSeconds = 900;

console.log(`elapsed: ${timeMiliSeconds} ms`);
console.log(`Miliseconds Label: ${(timeMiliSeconds  % 1000).toString().padStart(3, "0")}`);

console.log(`Seconds: ${Math.floor(timeMiliSeconds/1000)} s`);
console.log(`Seconds Label: ${(Math.floor(timeMiliSeconds/1000) % 60).toString().padStart(2, "0")}`);

console.log(`Minutes: ${ Math.floor( timeMiliSeconds / (1000 * 60) ) } min`);
console.log(`Minutes Label: ${(Math.floor( timeMiliSeconds / (1000 * 60) ) % 60).toString().padStart(2, "0") }`);

console.log(`Hours: ${ Math.floor( timeMiliSeconds / (1000 * 60 * 60) ) } hrs`);
console.log(`Hours Label: ${(Math.floor( timeMiliSeconds / (1000 * 60 * 60) ) % 60).toString().padStart(2, "0") }`);