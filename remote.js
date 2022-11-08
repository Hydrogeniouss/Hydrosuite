/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0] // gets target server
	var tram = ns.getServerMaxRam(target) // gets target ram
	if (tram != 0) {

		var thread = tram / 2.2 // calculates the max amount of threads that can be run
		var threads = Math.floor(thread) // rounds the number down in case of a decimal
		ns.scp("hack.js", target) // copies script
		ns.exec("hack.js", target, threads, target) //runs script last target is for args

	} else {
		ns.tprint("target has no ram")
		ns.kill
	}
}
//Depends on hack.js
// is a dependency of open.js