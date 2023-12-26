// async function waitOneSecond() {
//     await new Promise(resolve=> setTimeout(resolve, 1000));
//     return "Done waiting"
// }

// async function run() {
//     console.log("Начинаем ждать...");
//     let result = await waitOneSecond();
//     console.log(result);
// }

// run();

// async function maybeThrowError() {
//     if (Math.random() < 0.5) {
//         throw new Error("OOOps!"); //создание исключений
//     }
//     return "All Good!"
// }

// async function run() {
//     try {
//         let result = await maybeThrowError();
//         console.log(result);
//     } catch (error) {
//         console.error(error)
//     }
// }

// let n = [1, 2, 3, 40, 5];

// async function sum(numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     console.log(total)
//     return total;
// }

// run();
// sum(n);