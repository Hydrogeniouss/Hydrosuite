/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[1] // use second arg for target
	var threads = ns.args[0] // use first arg for threads
	var ports = ns.getServerNumPortsRequired(target)

	if (ports >= 1) {

		if (ns.fileExists("brutessh.exe")) {

			ns.brutessh(target)

		} else {

			ns.tprint("you're missing BruteSSH.exe")
			ns.kill()

		}
	}

	if (ports >= 2) {

		if (ns.fileExists("ftpcrack.exe")) {

			ns.ftpcrack(target)

		} else {

			ns.tprint("you're missing FTPCrack.exe")
			ns.kill()

		}

	}
	if (ports >= 3) {

		if (ns.fileExists("relaysmtp.exe")) {

			ns.relaysmtp(target)

		} else {

			ns.tprint("you're missing RelaySMTP.exe")
			ns.kill()

		}

	}
	if (ports >= 4) {

		if (ns.fileExists("httpworm.exe")) {

			ns.httpworm(target)

		} else {

			ns.tprint("you're missing HTTPWorm.exe")
			ns.kill()

		}

	}
	if (ports >= 5) {

		if (ns.fileExists("sqlinject.exe")) {

			ns.sqlinject(target)

		} else {

			ns.tprint("you're missing SQLInject.exe")
			ns.kill()

		}

	}
	ns.nuke(target)
	ns.run("remote.js", 1, target)
	ns.run("hack.js", threads, target)
}
// Depends on hack.js
// Depends on remote.js