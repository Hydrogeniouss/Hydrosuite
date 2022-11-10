/** @param {NS} ns */
export async function main(ns) {
	const gbcost = ns.getPurchasedServerCost(2) / 2
	var player = ns.getPlayer()
	var pmoney = player.money
	var i = 2
	while (i < pmoney / gbcost) {
		var i = i * 2
		await ns.sleep(20)
		ns.print(i)
	}

	if (i > ns.getPurchasedServerMaxRam()) {
		var i = ns.getPurchasedServerMaxRam()
	}
	await ns.sleep(20)
	if (i > pmoney / gbcost) {
		var ram = i / 2
		ns.print(ram)
		if (ns.getPurchasedServers.length < 25) {
			ns.purchaseServer("server", ram)
			ns.toast("Purchased server with " + ram + " GB of Ram")
		}
	}
}