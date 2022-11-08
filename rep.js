/** @param {NS} ns */
export async function main(ns) {
    var ram = ns.getServerMaxRam("home") - ns.getServerUsedRam("home")
    const cost = 4
    var threads = Math.floor(ram/cost)
    
    ns.run("reps.js", threads)
    ns.toast("Now gaining extra rep with " + threads )
    }
    // Depends on reps.js