/** @param {NS} ns */
export async function main(ns) {
	while (true) {
		await ns.sleep(1e4)
		let freeram = ns.getServerMaxRam("home")
		if ( ns.getScriptRam("start.js") < freeram){
			ns.spawn("start.js")
		}
	}
}