/** @param {NS} ns */
export async function main(ns) {
	const names = ["Maine", "Kiwi", "Pilar", "Rebecca", "Lucy", "Falco", "David", "Michiru", "Nazuna", "V", "Nero", "Dante"]
	const enemies = ["Tetrads", "The Syndicate", "The Dark Army", "Speakers for the Dead", "NiteSec", "The Black Hand"]
	while (true) {
		let memnames = ns.gang.getMemberNames() //get currently used names
		let memmount = ns.gang.getMemberNames().length // get amount of members
		let territory = ns.gang.getGangInformation().territory * 100
		let chances = 0
		let wanted = ns.gang.getGangInformation().wantedPenalty
		let respect = ns.gang.getGangInformation().respect
		await ns.sleep(2000)

		if (memmount < 12 && ns.gang.canRecruitMember()) { //recrouts if possible
			ns.gang.recruitMember(names[memmount])

		}

		if (ns.gang.getChanceToWinClash(enemies[0]) > 55) {
			chances++
		}
		if (ns.gang.getChanceToWinClash(enemies[1]) > 55) {
			chances++
		}
		if (ns.gang.getChanceToWinClash(enemies[2]) > 55) {
			chances++
		}
		if (ns.gang.getChanceToWinClash(enemies[3]) > 55) {
			chances++
		}
		if (ns.gang.getChanceToWinClash(enemies[5]) > 55) {
			chances++
		}

		if (chances = 6) {
			ns.gang.setTerritoryWarfare(true)
		} else {
			ns.gang.setTerritoryWarfare(false)
			chances = 0
		}




		for (let i = 0; memmount > i; i++) { //cycle through members
			let member = ns.gang.getMemberInformation(memnames[i])
			let res = ns.gang.getAscensionResult(memnames[i])
			await ns.sleep(20)

			if (res != undefined) {
				if (1.5 < res.str) { // ascension part
					ns.gang.ascendMember(memnames[i])

				}
			}

			if (member.str < 5000 || member.str_asc_mult < 30) {
				ns.gang.setMemberTask(memnames[i], "Train Combat")
			}

			if (member.str_asc_mult > 30 && territory != 100 && member.str > 5000) {
				ns.gang.setMemberTask(memnames[i], "Territory Warfare")
			}

			if (member.str_asc_mult > 30 && territory >= 100 && member.str > 5000 && wanted < 5 && respect < 5e8) {
				ns.gang.setMemberTask(memnames[i], "Terrorism")
			}

			if (member.str_asc_mult > 30 && territory >= 100 && member.str > 5000 && wanted > 5) {
				ns.gang.setMemberTask(memnames[i], "Vigilante Justice")
			}

			if (member.str_asc_mult > 30 && territory >= 100 && member.str > 5000 && wanted < 5 && respect > 5e8) {
				ns.gang.setMemberTask(memnames[i], "Human Trafficking")
			}
		}



	}


}