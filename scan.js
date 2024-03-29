/** @param {NS} ns */
export async function main(ns) {
	let seen = ["home"]
	let adj = ns.scan(seen[0])
	seen.push(...adj)
	while (adj.length > 0) {
		let scanned = ns.scan(adj.shift())
		scanned = scanned.filter(function (item) {
			return !seen.includes(item);
		});
		seen.push(...scanned)
		adj.push(...scanned)
	}
	ns.tprintf("-----------------------------------------------------------------------------------")
	for (let i = 1; i < seen.length; i++) {
		let server = ns.getServer(seen[i])
		let hackreq = ns.getServerRequiredHackingLevel(seen[i])
		var access = "-"
		if (server.hasAdminRights) {
			access = "[]"
		}
		let path = [seen[i]]
		let target = seen[i]
		while (path[0] !== "home") {
			await ns.sleep(0)
			let parent = ns.scan(target)[0]
			path.unshift(parent)
			target = parent
		}
		let cct = ns.ls(seen[i], ".cct")
		ns.tprintf("%s | Hacking required: %d | %s | Layer: %d | Contracts: %d", seen[i], hackreq, access, path.length, cct.length)
	}
	ns.tprintf("-----------------------------------------------------------------------------------")
}