const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let resto, datePrint, cashier;
let dataItems = [];
let priceItems = [];

function items() {
  rl.question("Masukan Item : ", function (item) {
    rl.question("Masukan Harga : ", function (price) {
      dataItems = [...dataItems, item];
      priceItems = [...priceItems, price];
      rl.question(
        "Apakan ingin menambah item lagi ?(yes/no)",
        function (addItem) {
          if (addItem == "yes") {
            items();
          } else {
            rl.close();
          }
        }
      );
    });
  });
}

rl.question("Resto name ? ", function (resto) {
  rl.question("Date ? ", function (date) {
    rl.question("Cashier name ? ", function (cashier) {
      items();
      resto = resto;
      datePrint = date;
      cashier = cashier;
    });
  });
});

rl.on("close", function () {
  console.log(`
    \t ${resto}
    Tanggal: ${datePrint}
    Nama kasir: ${cashier}
    ==============================
  `);
  for (let index = 0; index < dataItems.length; index++) {
    console.log(
      `\t ${dataItems[index]}...................Rp${priceItems[index]}`
    );
  }
  process.exit(0);
});
