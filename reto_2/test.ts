import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/colors.ts";

export class BattleHorde {
    nZombies: string
    nHumans: string
    failed = colors.bold.red
    ok = colors.bold.green
    expected = colors.bold.blue
    actual = colors.bold.yellow

    constructor(zombies: string, humans: string) {
        this.nZombies = zombies
        this.nHumans = humans
    }

    __logMsg(outputCallback = "", outputResults = "") {
        const status = outputCallback === outputResults ? "✅" : "❌";
        return {
            "ok": `${this.ok("[Test pass]")}${status}\n`,
            "Failed": `${status} ${this.failed("[Test Failed]")} => Expected: ${this.expected(outputResults)} -- Actual: ${this.actual(outputCallback)}`,
        }
    }

    check(callback: any, results: any) {
        const opcallbk = callback(this.nZombies, this.nHumans)
        if (opcallbk !== results) {
            return this.__logMsg(opcallbk, results)["Failed"]
        } else {
            return this.__logMsg()["ok"]
        }


    }
}




