/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]
	var max = ns.getServerMaxMoney(target)


	while (true) {
		var cur = ns.getServerMoneyAvailable(target)


		if (cur >= max * 0.9) { //only hacks when current is above 90% of max
			await ns.hack(target)
		} else {
			await ns.grow(target)
		}

		await ns.weaken(target)

	}

}
// Is a Dependency of Remote.js
// Is a Dependency of open.js