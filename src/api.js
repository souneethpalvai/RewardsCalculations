export async function getTransactionsData() {
  try {
    const apiRes = require("./transactions.json");
    return apiRes;
  } catch (e) {
    throw e;
  }
}
