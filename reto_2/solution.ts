import { BattleHorde } from "./test.ts"


function battleHorde(zombies: string, humans: string) {
    // Code here
    // let comp = nz.forEach(ez => {
    //     nh.forEach((eh) => {

    //         if ((ez + auxz) > (eh + auxh)) {
    //             auxz++
    //             dashboard["Gana Zombie"] = { "AcmmZ": auxz, "AcmmH": auxh }


    //         } else if ((eh + auxh) > (ez + auxz)) {
    //             auxh++
    //             dashboard["Humano Gana"] = { "AcmmZ": auxz, "AcmmH": auxh }

    //         } else if ((eh + auxh) === (ez + auxz)) {
    //             dashboard["Emmpate"] = {"Acmmz": auxz, "AcmmH": auxh}
    //         }
    //     })
    // });

    const nz: number[] = zombies.split("").map((nz) => Number(nz));
    const nh: number[] = humans.split("").map((nh) => Number(nh));
    let auxz: number = 0;
    let auxh: number = 0;

    for (let i = 0; i < nz.length; i++) {
        const currentZombiePower = nz[i] + auxz;
        const currentHumanPower = nh[i] + auxh;

        if (currentZombiePower > currentHumanPower) {
            auxz = currentZombiePower - currentHumanPower;
            auxh = 0;
        } else if (currentHumanPower > currentZombiePower) {
            auxh = currentHumanPower - currentZombiePower;
            auxz = 0;
        } else {
            auxz = 0;
            auxh = 0;
        }
    }

    if (auxz > 0 && auxh === 0) return `${auxz}z`;
    if (auxh > 0 && auxz === 0) return `${auxh}h`;
    return "x";
}





function main() {
    (() => {
        const result = "2h";
        const battle = new BattleHorde("242", "334");
        console.log(battle.check(battleHorde, result));
    })();

    (() => {
        const result = "x";
        const battle = new BattleHorde("444", "282");
        console.log(battle.check(battleHorde, result));
    })();

    // Otras pruebas
    (() => {
        const result = "x";
        const battle = new BattleHorde("321", "123");
        console.log(battle.check(battleHorde, result));
    })();

    (() => {
        const result = "3z";
        const battle = new BattleHorde("4598", "7682");
        console.log(battle.check(battleHorde, result));
    })();

    (() => {
        const result = "20z";
        const battle = new BattleHorde("8989898999", "7779998811");
        console.log(battle.check(battleHorde, result));
    })();

    (() => {
        const result = "10h";
        const battle = new BattleHorde("57685849323", "98765438965");
        console.log(battle.check(battleHorde, result));
    })();
}


export {
    main
}