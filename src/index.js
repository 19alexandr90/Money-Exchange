// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
	if (currency <= 0) return {}; // If the argument passed in is 0 or less, then the method should return an empty object
	if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	
	let H = Math.floor(currency / 50); // найти максимальное количество монет 50$ (floor чтобы не превысить саму сумму (чтобы 80/50 не округлилось до 2-х))
	let Q = Math.floor((currency - H * 50) / 25); // вычитаем уже выданные 50-ки и находим аналогично количество 25-к
	let D = Math.floor((currency - Q * 25 - H * 50) / 10);
	let N = Math.floor((currency - D * 10 - Q * 25 - H * 50) / 5);
	let P = Math.floor(currency % 5); 
	
	if (H)  result.H = H; // записываем в соответствующие поля объекта количество монет
	if (Q)  result.Q = Q;
	if (D)  result.D = D;
	if (N)  result.N = N;
	if (P)  result.P = P;
	
	return result;
}