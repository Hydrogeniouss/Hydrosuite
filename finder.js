/** @param {NS} ns */
export async function main(ns) {
	let path = [ns.args[0]]
	let target = ns.args[0]
	while (path[0] !== "home") {
		await ns.sleep(0)
		let parent = ns.scan(target)[0]
		path.unshift(parent)
		ns.print(parent)
		target = parent
	}
	ns.tprint(path)
}