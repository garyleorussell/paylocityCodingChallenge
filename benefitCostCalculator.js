var BenefitCostCalculator = 
{
  AddBenefitCost: function(nameElement, costInputId)
  {
    console.log(this);
    // get the firstname
    var firstName = $(nameElement).val();    
    
    // this is a given standard cost for employees
    var benefitCost = 1000;

    // dependents cost 500
    if (nameElement.indexOf("dependent") >= 0)
      benefitCost = 500;

    // there is a 10 % discount
    var discount = $('#applyDiscount').prop('checked') ? (1000 * 0.1) : 0;
    
    // if the employee's or dependent's first name starts with an A apply discount
    if (firstName.substring(0, 1).toLowerCase() === 'a')
      benefitCost = 1000 - discount;
      
    // add cost to text field  
    $(costInputId).val(benefitCost);

    // use function to calculate rest of analysis
    this.CalculateBenefitCost();
  },

  CalculateBenefitCost: function()
  {
    // get the set number of paychecks in a year
    var numberOfPaychecksPerYear = parseInt($('#numOfPeriods').val());

    // get how much employee is paid per check
    var payPerCheck = parseFloat($('#payPerCheck').val());
    
    var summedCost = 0;

    // get each cost that was added to the for amd sum them
    $('.cost').each(function()
    {
      summedCost += parseInt($(this).val());
    });
    
    var payCheckDeduction = 0;

    // avoid dividing by zero
    if (numberOfPaychecksPerYear > 0)
      payCheckDeduction = (summedCost / numberOfPaychecksPerYear);

    // diaplay data to user
    $('.annualCost').val(summedCost);
    $('.paycheckDeduction').val(payCheckDeduction.toFixed(2));

    // terrnary to see if payPerCheck is zero this avoids a negative number
    var payAfterDeduction = (payPerCheck > 0) ? (payPerCheck - payCheckDeduction).toFixed(2) : 0
    $('.payAfterDeduction').val(payAfterDeduction);
  }
};