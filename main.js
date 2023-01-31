//THIS SCRIPT REQUIRES SF4, if you don't know what that is keep playing
/** @param {NS} ns */
export async function main(ns) {
	//TODO: Stanek, Grafting, Batching, corp, hacknet, servers
	//DONE: Crime, BB, Sleeves, upgrading, gang, factions & augs, actually making the script work, Stocks,
	ns.disableLog("ALL")
	ns.clearLog()
	const b = ns.bladeburner
	const g = ns.gang
	const s = ns.singularity
	const l = ns.sleeve
	const t = ns.stock
	const sf = s.getOwnedSourceFiles()
	var os = []
	for (let i = 0; i < sf.length; i++) {

		os.push(sf[i].n)
	}
	while (true) {
		await ns.sleep(0)
		let player = ns.getPlayer()
		// everything requiring singularity
		//crime
		if (!ns.isRunning("crime.js") && !g.inGang() && ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - ns.getScriptRam("crime.js") > 0) {
			ns.run("crime.js")
			ns.print("started crime")
		}
		// end crime
		//upgrading
		if (s.getUpgradeHomeRamCost() < player.money) {
			s.upgradeHomeRam()
		}
		if (player.money > 2e5 && !ns.hasTorRouter()) {
			s.purchaseTor()
		}
		//end upgrading
		//installing
		if (s.getOwnedAugmentations(true).length - s.getOwnedAugmentations().length >= 10) {
			s.installAugmentations("start.js")
		}
		//end installing
		//start basic faction
		if (!ns.isRunning("factions.js") && ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - ns.getScriptRam("factions.js") > 0) {
			ns.run("factions.js")
			ns.print("Started factions")
		}
		//end basic faction
		//start misc
		if (s.getOwnedAugmentations().includes("The Blade's Simulacrum") && player.factions.includes("Sector-12")) {
			s.workForFaction("Sector-12", "security", false)
		}
		//end misc
		//end singularity

		if (os.includes(7)) {
			//start bb
			if (player.skills.strength > 100 && !b.inBladeburner()) {
				b.joinBladeburnerDivision()
			}
			if (b.inBladeburner()) {
				if (b.getRank() > 25 && !player.factions.includes("Bladeburner")) {
					b.joinBladeburnerFaction()
				}
			}
			if (g.inGang() && b.inBladeburner() && !ns.isRunning("bb.js") && ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - ns.getScriptRam("bb.js") - ns.getScriptRam("bbskills.js") > 0) {
				ns.run("bb.js")
				ns.print("Started BladeBurner")
			}
		}
		// end bb
		if (os.includes(2)) {
			//start gang
			if (!g.inGang() && ns.heart.break() < -5.4e4 && player.factions.includes("Slum Snakes")) {
				g.createGang("Slum Snakes")
			}
			if (g.inGang() && !ns.isRunning("gang.js") && ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - ns.getScriptRam("gang.js") > 0) {
				ns.run("gang.js")
				ns.print("Started Gang")
			}
			// end gang
		}


		if (os.includes(10)) {
			//sleeves
			if (l.getTask(1) != null) {
				var task = l.getTask(1).type
			} else {
				var task = "0"
			}
			if (l.getSleeve(0).shock > 90 && task !== "Recovery") {
				ns.run("sleeves.js", 1, "Recovery")
			} else if (l.getSleeve(1).shock < 90 && ns.heart.break() > -5.4e4 && task !== "CRIME" && ns.formulas.work.crimeSuccessChance(l.getSleeve(1), "Homicide") < 0.5) {
				ns.run("sleeves.js", 1, "Mug")
			} else if (l.getSleeve(1).shock < 90 && ns.heart.break() > -5.4e4 && task !== "CRIME" && ns.formulas.work.crimeSuccessChance(l.getSleeve(1), "Homicide") > 0.5) {
				ns.run("sleeves.js", 1, "Homicide")
			} else if (l.getSleeve(1).shock < 90 && ns.heart.break() < -5.4e4 && task !== "INFILTRATE") {
				ns.run("sleeves.js", 1, "BB")
			}
			//end sleeves
			//start stocks
			if (!t.hasWSEAccount()) {
				t.purchaseWseAccount()
			}
			if (!t.hasTIXAPIAccess()) {
				t.purchaseTixApi()
			}
			if (t.hasTIXAPIAccess()) {
				if (!t.has4SData()) {
					t.purchase4SMarketData()
				}
				if (!t.has4SDataTIXAPI()) {
					t.purchase4SMarketDataTixApi()
				}
			}
			if (ns.isRunning("stocks.js") && t.has4SDataTIXAPI() && t.has4SData() && t.hasTIXAPIAccess() && t.hasWSEAccount() && ns.getServerMaxRam("home") - ns.getServerUsedRam("home") - ns.getScriptRam("stocks.js") > 0) {
				ns.run("stocks.js")
			}
			//end stocks
		}

	}
}
//THIS SCRIPT REQUIRES SF4, if you don't know what that is keep playing
// Depends on sleeves.js, bb.js, bbskills.js, gang.js, stocks.js, factions.js, wd.js, s.js