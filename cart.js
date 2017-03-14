function checkoutCart(){
	var prices = Array.prototype.slice.call(arguments);
	var self = this;
	prices.forEach(function(price){
		self.total = self.total + price;
	})
	return ((self.total/100) * this.tax) + this.total;
}

var saro = { tax: 7.5, total: 0};
var SarojiniCart = checkoutCart.bind(saro);
console.log(SarojiniCart(10,20,30,40,50));


function checkoutCart(){
	var prices = Array.prototype.slice.call(arguments);
	var self = this;
	prices.forEach(function(price){
		self.total = self.total + price;
	})
	return ((self.total/100) * this.tax) + this.total;
}

undefined
var saro = {tax: 7.5 , total : 10};
undefined
var SarojiniCart = checkoutCart.bind(saro);
undefined
SarojiniCart(10,20,30,40,50);
172