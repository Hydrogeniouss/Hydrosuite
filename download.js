export async function main(ns) {
await ns.wget("https://github.com/Hydrogeniouss/Hydrosuite/blob/main/hack.js", 'hack.js')
await ns.wget("https://github.com/Hydrogeniouss/Hydrosuite/blob/main/hacknet.js", 'hacknet.js')
await ns.wget("https://github.com/Hydrogeniouss/Hydrosuite/blob/main/open.js", 'open.js')
await ns.wget("https://github.com/Hydrogeniouss/Hydrosuite/blob/main/remote.js", 'remote.js')
await ns.wget("https://github.com/Hydrogeniouss/Hydrosuite/blob/main/stocks.js", 'stocks.js')
await ns.wget("https://github.com/Hydrogeniouss/Hydrosuite/blob/main/ui.js", 'ui.js')
await ns.sleep(1000)
ns.toast("Downloaded all scripts")
}