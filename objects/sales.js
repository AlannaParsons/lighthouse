/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

Instruction
Given the following data, implement a function calculateSalesTax
that calculates the total sales and total tax, grouped by company.



const results = calculateSalesTax(companySalesData, salesTaxRates);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

/**
 * calculateSalesTax(salesData, taxRates) - calculates the total sales
 * and total tax, grouped by company
 *
 * @param {array} salesData - array of objects
 * @param {object} taxRates
 * @return {object}
*/
const calculateSalesTax = function(salesData, taxRates) {
  let results = {};

  for (let chunk of salesData) {
    if (Object.prototype.hasOwnProperty.call(results, chunk.name)) {
      results[chunk.name].totalSales += calcSales(chunk.sales);
      results[chunk.name].totalTaxes += calcSales(chunk.sales) * taxRates[chunk.province];
    } else {
      results[chunk.name] = {
        totalSales: calcSales(chunk.sales),
        totalTaxes: calcSales(chunk.sales) * taxRates[chunk.province]
      };
    }
  }
  return results;
};

/**
 * calcSales(sales) - take array of sales to calculate total
 *
 * @param {array} sales - array of numbers
 * @return {number}
*/
const calcSales = function(sales) {
  let monies = 0;
  for (let sale of sales) {
    monies += sale;
  }
  return monies;
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);