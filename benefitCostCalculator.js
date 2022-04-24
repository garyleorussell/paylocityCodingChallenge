var BenefitCostCalculator = 
{
  AddBenefitCost: function(nameElement, costInputId)
  {
    console.log(this);
    // get the employee firstname
    var firstName = $(nameElement).val();    
    
    // this is a given standard cost
    var benefitCost = 1000;
    // there is a 10 % discount
    var discount = $('#applyDiscount').prop('checked') ? (1000 * 0.1) : 0;
    
    // if the employee's first name starts with an A apply discount
    if (firstName.substring(0, 1).toLowerCase() === 'a')
      benefitCost = 1000 - discount;
      
    // add cost to text field  
    $(costInputId).val(benefitCost);

    this.CalculateBenefitCost();
  },

  CalculateBenefitCost: function()
  {
    var numberOfPaychecksPerYear = parseInt($('#numOfPeriods').val());
    var payPerCheck = parseFloat($('#payPerCheck').val());
    
    var summedCost = 0;
    $('.cost').each(function()
    {
      summedCost += parseInt($(this).val());
    });
    console.log(summedCost);
    var payCheckDeduction = 0;
    if (summedCost > 0 && numberOfPaychecksPerYear > 0)
      payCheckDeduction = (summedCost / numberOfPaychecksPerYear);

    $('.annualCost').val(summedCost);
    $('.paycheckDeduction').val(payCheckDeduction.toFixed(2));
    var payAfterDeduction = (payPerCheck > 0) ? (payPerCheck - payCheckDeduction).toFixed(2) : 0
    $('.payAfterDeduction').val(payAfterDeduction);
  }
};