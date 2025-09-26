let param1 = "hola";
let param2 = 2;
let param3 = 5;

function agruparPares(...params) {
    let nums = [];
    for (const p of params) {
        if (typeof p === "number") {
            nums.push(p);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            console.log(nums[i]);
        }
    }
}

agruparPares(param1, param2, param3);