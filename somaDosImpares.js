let a = prompt('Digite o primeiro número: ')
let ab = prompt('Digite o segundo número: ')
let abc = 0;

if (a < ab) {
    if (a % 2 === 0) {
        a++;
    }
    while (a < ab) {
        abc = abc + a;
        a = a + 2;
    }
    alert("A soma dos números ímpares entre os algarismos informados é: " + abc);

} else {
    alert("Não foi possível realizar a operação.");
}