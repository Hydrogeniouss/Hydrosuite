/** @param {NS} ns **/
export async function main(ns) {
	const doc = document; 
	const hook0 = doc.getElementById('overview-extra-hook-0');
	const hook1 = doc.getElementById('overview-extra-hook-1');
	while (true) {
		var player = ns.getPlayer()



		switch (player.bitNodeN) {
			case 1:
				var cbn = "Source-Genesis"
				break
			case 2:
				var cbn = "rise of the Underworld"
				break
			case 3:
				var cbn = "Corpratocracy"
				break
			case 4:
				var cbn = "The Singularity"
				break
			case 5:
				var cbn = "Artificial Intelligence"
				break
			case 6:
				var cbn = "Bladeburners"
				break
			case 7:
				var cdn = "Bladeburner 2079"
				break
			case 8:
				var cdn = "Ghost of Wall street"
				break
			case 9:
				var cdn = "Hacktocracy"
				break
			case 10:
				var cdn = "Digital Carbon"
				break
			case 11:
				var cdn = "The big Crash"
				break
			case 12:
				var cdn = "The Recursion"
				break
			case 13:
				var cdn = "They're Lunatics!"
				break
		}

		try {
			const headers = []
			const values = [];
			// Add Karma
			headers.push("Karma");
			values.push(ns.heart.break());
			// Add Current BN plus name
			headers.push("BN " + player.bitNodeN);
			values.push(cbn);
			// TODO: Add more neat stuff

			// Now drop it into the placeholder elements
			hook0.innerText = headers.join(" \n");
			hook1.innerText = values.join("\n");
		} catch (err) { // This might come in handy later
			ns.print("ERROR: Update Skipped: " + String(err));
		}
		await ns.sleep(1000);
	}
}