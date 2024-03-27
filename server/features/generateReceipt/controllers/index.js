const { generateToken } = require('../.././../utils/Token');
const { calculateDateDifference } = require('../.././../utils/caculateDiff');


const generateReceipt = (receiptData) => {
  // Generate receipt logic

  const receipt = {
    id: generateToken(),
    date: new Date().toISOString(),
    paymentId: receiptData.paymentId,
    carName: receiptData.carName,
    carPrice: receiptData.carPrice,
    userName: receiptData.userName,
    userEmail: receiptData.userEmail,
    startDate: receiptData.startDate,
    endDate: receiptData.endDate,
    timePeriod: `${calculateDateDifference(receiptData.startDate, receiptData.endDate)} days`,
    provincialTax: `$${getprovincialTax(receiptData.totalAmount)}`,
    federalTax: `$${getfederalTax(receiptData.totalAmount)}`,
    totalAmount: `$${getGrandTotalAmount(receiptData.totalAmount)}`,
  };


    return receipt;
};



const getprovincialTax = (totalAmount) => {
  // Get provincial tax logic
  return totalAmount * 0.08;
}

const getfederalTax = (totalAmount) => {
  // Get federal tax logic
  return totalAmount * 0.05;
}

const getGrandTotalAmount = (totalAmount) => {
  // Get total amount logic
  return totalAmount + getprovincialTax(totalAmount) + getfederalTax(totalAmount);
}

module.exports = {
  generateReceipt,
};