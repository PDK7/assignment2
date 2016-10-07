$("#identity-theft-form").submit(function(event)
  {
    var badInputs = formContentValid();
    if (badInputs.length > 0)
    {
      printSuccessMessage();
    }
    else
    {
      displayErrors(badInputs);
    }
      
  }
);

function formContentValid()
{
  var badInputs;
  if($("input[name=name_input]").val().trim().length == 0)
  {
    badInputs.push("Your name input is not correct!");

  }
  if(!$("input[name=ssn_input]").val().trim().match(/^\d+$/) && $("input[name=ssn_input]").val().trim().length != 7)
  {
    badInputs.push("That's not a SSN! Makes sure the length is 7, it's only numbers and there are no hyphens!");  
  }
  return badInputs;
}

function printSuccessMessage()
{
}

function displayErrors(badInputs)
{
  var warningsToInsert = ""; 
  for (var i = 0; i < badInputs.length; i++)
  {
    warningsToInsert += "<p>" + badInputs[i] + "</p>";
  }

  $("#warnings").html(warningsToInsert);
  alert(warningsToInsert);
}
