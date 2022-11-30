/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog("sleep")


	while (true) {


		var curnodes = ns.hacknet.numNodes()

		await ns.sleep(10)
		if (curnodes > 0) {
			for (var i = 0; i < curnodes; i++) {

				if (ns.hacknet.numHashes() > ns.hacknet.hashCapacity() / 10) {
					ns.hacknet.spendHashes("Sell for Money")
				}

				await ns.sleep(10)
				ns.hacknet.upgradeLevel(i)
				ns.hacknet.upgradeRam(i)
				ns.hacknet.upgradeCore(i)
				ns.hacknet.upgradeCache(i)
				ns.hacknet.purchaseNode()
			}
		} else {
			ns.hacknet.purchaseNode()
		}
	}
}