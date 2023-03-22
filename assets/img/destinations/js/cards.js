let features = document.forms.additional__features
let autoSum = features.querySelectorAll('input[type="checkbox"]:not([value]), input[type="checkbox"][value=""]');

for (let i = 0; i < autoSum.length; i++) 
  autoSum[i].disabled = true;
  features.onchange = function() { 

  var autoSum2 = features.querySelectorAll('[type="checkbox"]')
  var sum = 0;

  for(let x = 0; x < autoSum2.length; x++)
  autoSum2[x].checked ? sum += parseFloat(autoSum2[x].value) : sum;
  document.getElementById('price__result').innerHTML = "" + sum;
}