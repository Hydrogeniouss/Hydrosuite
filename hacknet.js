/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog("sleep")
	var desnodes = ns.args[0] // use arg for max amount of nodes (23 reccomended max)

	while (true) {

		var curnodes = ns.hacknet.numNodes()

		await ns.sleep(10)

		while (curnodes < desnodes) {
			await ns.sleep(10)
			ns.hacknet.purchaseNode()
		}
		if (curnodes >= desnodes) {

			while (true) {

				await ns.sleep(10)

				for (var i = 0; i < curnodes; i++) {
					ns.print(i)
					await ns.sleep(10)

					var node = ns.hacknet.getNodeStats(i)

					if (node.level != 200) {
						ns.hacknet.upgradeLevel(i)
					}

					if (node.ram != 64) {
						ns.hacknet.upgradeRam(i)
					}

					if (node.cores != 16) {
						ns.hacknet.upgradeCore(i)
					}
				}
			}
		}
	}
}