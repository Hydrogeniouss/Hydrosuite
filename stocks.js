/** @param {NS} ns */
export async function main(ns) {
	const all = ns.stock.getSymbols()
	ns.disableLog("sleep")


	while (true) {
		var player = ns.getPlayer()
		var pmoney = player.money

		await ns.sleep(4000)
		for (var i = 0; all.length > i; i++) {

			var pos = ns.stock.getPosition(all[i])
			var cast = Math.round(ns.stock.getForecast(all[i]) * 100)

			await ns.sleep(20)

			if (pos[0] > 0) {

				ns.print(all[i] + cast)
				ns.print("-----")

				if (cast < 55) {
					ns.stock.sellStock(all[i], pos[0])
					ns.toast(all[i] + " was sold because it became negative")

				}
			}

			if (cast > 65) {
				var price = ns.stock.getPrice(all[i]) * 100000
				if (price < pmoney) {
					
					ns.stock.buyStock(all[i], 100000)
					ns.toast("bought 100k of " + all[i])
				}
			}




		}
	}
}