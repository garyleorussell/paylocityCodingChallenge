$('.lastName').on( "blur", function()
{// todo add checks if name is filled in
  console.log(this);
  // this is a given standard cost
  var benefitCost = 1000;
  // there is a 10 % discount
  var discount = (1000 * 0.1); 
  // get the employee firstname
  var firstName = $('.employeeFirstName').val();
  
  // if the employee's first name starts with an A apply discount
  if (firstName.substring(0, 1).toLowerCase() === 'a')
    benefitCost = 1000 - discount;
  
  // add cost to text field  
  $('#employeeBenefitCost').val(benefitCost);
});

$('#addDependent').on( "click", function()
{
  // since adding dependents is dynamic see how many user has inputted up to this point
  // this allows for unique id to be applied
  var numberOfDependents = $('#dependentContainer > div').length;
  
  // set unique id
  var dependentNameId = "dependent" + (numberOfDependents + 1) + "Name";
  var dependentCostId = "dependent" + (numberOfDependents + 1) + "BenefitCost";
  $('#dependentContainer').append('<div>' + 
                                  '  <label> Name      ' +
                                  '    <input id=' + dependentNameId + ' type="text"  onblur="BenefitCostCalculator.AddBenefitCost(' + dependentNameId + ', ' + dependentCostId + ')"> ' +
                                  '  </label>' +
                                  '  <label> Annual Benefit Cost' +
                                  '    <input class="cost" id=' + dependentCostId + ' type="text">' +
                                  '  </label>' +
                                  '  <button onclick="RemoveDependent(this)"><i id="removeDependent" class="fa-solid fa-minus"></i> Remove Dependent</button>' +
                                  '</div>');
});

// this function is here to remove dependent and then recalculate benefit cost
function RemoveDependent(element)
{
  $(element).parent().remove();

  BenefitCostCalculator.CalculateBenefitCost();
}