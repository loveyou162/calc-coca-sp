const kgCoca = prompt("Nhập khối lượng coca:");
const kgSpite = prompt("Nhập khối lượng spite:");
console.log(`số kg coca: ${kgCoca}kg, số kg spite: ${kgSpite}kg`);
document.getElementById(
  "out-kg-coca"
).innerHTML = `số kg coca: ${kgCoca}kg, số kg spite: ${kgSpite}kg`;
//chuyển đổi Kg => L
const volumeCoca = function () {
  return ((kgCoca - 1) * 20) / 25;
};
const volumeSpite = function () {
  return ((kgSpite - 0.9) * 20) / 25;
};

document.getElementById(
  "out-lit-csp"
).innerHTML = `số lít Coca: ${volumeCoca()}L, số lít Spite: ${volumeSpite()}L`;
console.log(`số lít Coca: ${volumeCoca()}L, số lít Spite: ${volumeSpite()}L`);

//tính thực xuất coca
const surviveHeadCoca = prompt("Nhập tồn đầu coca:");
const surviveFooterCoca = volumeCoca();
const hieuCc = surviveHeadCoca - surviveFooterCoca;

console.log(
  `tồn đầu coke: ${surviveHeadCoca}L, tồn cuối coke: ${surviveFooterCoca}L`
);
const lineCoca = function () {
  return `${hieuCc.toFixed(2)}`;
};
console.log(lineCoca());
document.getElementById(
  "really-output-coca"
).innerHTML = `Thực xuất coca ${lineCoca()}L`;
//tính thực xuất Sp
const surviveHeadSp = prompt("Nhập tồn đầu spite:");
const surviveFooterSp = volumeSpite();
const hieuSp = surviveHeadSp - surviveFooterSp;
console.log(`tồn đầu sp: ${surviveHeadSp}, tồn cuối sp: ${surviveFooterSp}`);
const lineSp = function () {
  return `${hieuSp.toFixed(2)}`;
};
console.log(lineSp());
document.getElementById(
  "really-output-sp"
).innerHTML = `Thực xuất sp ${lineSp()}L`;

//tính số cốc
const cupCC = prompt("Nhập số cốc Coca:");
function numCupCoca() {
  return `Nhập vào line coca: ${(hieuCc - cupCC * 0.1).toFixed(1)}`;
}
console.log(numCupCoca());
document.getElementById("input-line-coca").innerHTML = `${numCupCoca()}L`;
const cupSp = prompt("Nhập số cốc spite:");
function numCupSp() {
  return `Nhập vào line spite: ${(hieuSp - cupSp * 0.1).toFixed(1)}`;
}
console.log(numCupSp());
document.getElementById("input-line-sp").innerHTML = `${numCupSp()}L`;
