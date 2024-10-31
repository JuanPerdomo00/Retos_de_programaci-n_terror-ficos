class testMagicPosions {
  arrNumPosion: number[];
  golasANumPosion: number;

  constructor(posions: number[], goal: number) {
    this.arrNumPosion = posions;
    this.golasANumPosion = goal;
  }

  __msgLogs(ouputCallback, ouputResults) {
    return {
      "ok": "Test Pass",
      "fail": `Test Failed => Expected: ${ouputResults} -- Actual: ${ouputCallback}`
    };
  }

  check(callback: Function, results: number[] | undefined) {
    let return_callback = callback(this.arrNumPosion, this.golasANumPosion);

    if (JSON.stringify(return_callback) === JSON.stringify(results)) {
      console.log(this.__msgLogs(return_callback, results)["ok"]);
    } else {
      console.log(this.__msgLogs(return_callback, results)["fail"]);
    }
  }
}

function createMagicPotion(potions: number[], target: number): number[] | undefined {
  // Code here
  // const resolved = potions.sort((a, b) => a - b).map((_, i) => {
  //   if (potions[i] + potions[i + 1] === target) {
  //     return [i, i + 1]
  //   } else {
  //     return undefined
  //   }
  // })

  // return resolved.filter(arr => arr !== undefined)[0] ? resolved.length === 2 : undefined;
  const map = new Map<number, number>();

  for (let i = 0; i < potions.length; i++) {
    const neededValue = target - potions[i];

    // Comprobar si el valor necesario ya está en el mapa
    if (map.has(neededValue)) {
      return [map.get(neededValue)!, i];
    }

    // Si no se ha encontrado el valor necesario, añadir el actual al mapa
    map.set(potions[i], i);
  }

  // Retornar undefined si no hay combinación que sume el target
  return undefined;
}



function main() {
  // Test One
  (() => {
    const expected = [2, 3];
    const potions = new testMagicPosions([4, 5, 6, 2], 8);
    potions.check(createMagicPotion, expected);
  })();

  // Test Two
  (() => {
    const expected = undefined;
    const potions = new testMagicPosions([1, 2, 3, 4], 9);
    potions.check(createMagicPotion, expected);
  })();

  // Test Three
  (() => {
    const expected = [1, 2];
    const potions = new testMagicPosions([1, 2, 3, 4], 5);
    potions.check(createMagicPotion, expected);
  })();

  // Test Four
  (() => {
    const expected = [0, 2];
    const potions = new testMagicPosions([5, 1, 4, 6, 2], 9);
    potions.check(createMagicPotion, expected);
  })();

  // Test Failed
  (() => {
    const expected = undefined;
    const potions = new testMagicPosions([1, 2, 3, 4], 10);
    potions.check(createMagicPotion, expected);
  })();
}

export { main }
