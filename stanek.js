/** @param {NS} ns */
export async function main(ns) {
    const width = ns.stanek.giftWidth()
    const height = ns.stanek.giftHeight()
    let fragments = ns.stanek.activeFragments()
    while (true) {
        for (let i = 0; fragments.length > i; i++) {
            let fragments = ns.stanek.activeFragments()
            let fragment = fragments[i]
            let x = fragment.x
            let y = fragment.y
            await ns.stanek.chargeFragment(x, y)
            await ns.sleep(20)
        }
    }
}