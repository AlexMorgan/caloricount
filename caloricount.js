function totalCalories(breakfast,lunch,dinner,snacks) {
  var total;
  total = breakfast + lunch + dinner + snacks;
  return total;
}

function calcAvailable(consumed, goal) {
  var available;

  available = goal - consumed;
  return available;
}

function percentageConsumed(meal, total) {
  var percentage;

  percentage = (meal / total) * 100;
  percentage = Math.round(percentage);

  return percentage + '%';
}

function percentageOfGoal(meal, goal) {
  var percentage;

  percentage = (meal / goal) * 100;
  percentage = Math.round(percentage);

  return percentage + '%';
}

function registerHandlers()
{
   var breakfast, lunch, dinner, snacks, goal;

   breakfast = document.getElementById('breakfastCalories');
   lunch = document.getElementById('lunchCalories');
   dinner = document.getElementById('dinnerCalories');
   snacks = document.getElementById('snacksCalories');
   goal = document.getElementById('goal');

   breakfast.addEventListener("input", calcResults, true);
   lunch.addEventListener("input", calcResults, true);
   dinner.addEventListener("input", calcResults, true);
   snacks.addEventListener("input", calcResults, true);
   goal.addEventListener("input", calcResults, true);

}

function calcResults() {
  var breakfast, lunch, dinner, snacks, goal, totalConsumed, bfastConsumed, bfastGoal, lunchConsumed, lunchGoal, dinnerConsumed, dinnerGoal, snackConsumed, snackGoal, available;

  breakfast = document.getElementById('breakfastCalories').value;
  lunch = document.getElementById('lunchCalories').value;
  dinner = document.getElementById('dinnerCalories').value;
  snacks = document.getElementById('snacksCalories').value;
  goal = document.getElementById('goal').value;

  // Convert string input into number (type)
  breakfast = parseFloat(breakfast);
  lunch = parseFloat(lunch);
  dinner = parseFloat(dinner);
  snacks = parseFloat(snacks);
  goal = parseFloat(goal);

  // Calculate total consumed & total calories available
  totalConsumed = totalCalories(breakfast, lunch, dinner, snacks);
  available = calcAvailable(totalConsumed, goal);

  // Calculate the percentage of consumed and percentage of the daily goal
  bfastConsumed = percentageConsumed(breakfast, totalConsumed);
  bfastGoal = percentageOfGoal(breakfast, goal);
  lunchConsumed = percentageConsumed(lunch, totalConsumed);
  lunchGoal = percentageOfGoal(lunch, goal);
  dinnerConsumed = percentageConsumed(dinner, totalConsumed);
  dinnerGoal = percentageOfGoal(dinner, goal);
  snackConsumed = percentageConsumed(snacks, totalConsumed);
  snackGoal = percentageOfGoal(snacks, goal);

  // Manipulate HTML document to display the calculated values
  document.getElementById('consumed').innerHTML = totalConsumed;
  document.getElementById('available').innerHTML = available;
  document.getElementById('breakfastConsumedPercentage').innerHTML = bfastConsumed;
  document.getElementById('breakfastGoalPercentage').innerHTML = bfastGoal;
  document.getElementById('lunchConsumedPercentage').innerHTML = lunchConsumed;
  document.getElementById('lunchGoalPercentage').innerHTML = lunchGoal;
  document.getElementById('dinnerConsumedPercentage').innerHTML = dinnerConsumed;
  document.getElementById('dinnerGoalPercentage').innerHTML = dinnerGoal;
  document.getElementById('snacksConsumedPercentage').innerHTML = snackConsumed;
  document.getElementById('snacksGoalPercentage').innerHTML = snackGoal;
}


// Clear input for calorie fields
function clearInput() {
  var breakfast, lunch, dinner, snacks, consumed, outputs;
  breakfast = document.getElementById('breakfastCalories');
  breakfast.value = 0;

  lunch = document.getElementById('lunchCalories');
  lunch.value = 0;

  dinner = document.getElementById('dinnerCalories');
  dinner.value = 0;

  snacks = document.getElementById('snacksCalories');
  snacks.value = 0;

  available = document.getElementById('available');
  available.value = '';

  consumed = document.getElementById('consumed');
  consumed.value = '';

  outputs = document.getElementsByClassName("perc");
  for (i = 0; i < outputs.length; i++) {
    outputs[i].innerHTML = '';
  }
}
