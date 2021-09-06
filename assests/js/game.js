var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  //repeat and execute as long as the enemy-robot is alive
  while(enemyHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      //if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          //subract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney" , playerMoney);
          break;
        }
      }
      
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      //leave while() loop since enemy is dead
      break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
      
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          //leave while() look if player is dead
          break;
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
      }
    };

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

  // fight each enemy-robot by loopiong over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alove, keep fighting
    if (playerHealth > 0) {
      //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to the Robot Gladiators! Round ' + (i + 1));

      // pick enw enemy ot fight based on the index of the enemynames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume he value of the enemyName parameter
      fight(pickedEnemyName);

      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length -1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before teh next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isn't alive, break out of the loop and let the endGame function run
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  // after the loopo ends, player is either out of heath of enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// function for the player to purchase perks in exchange for lowering their score
var shop = function() {
  // ask the player what they'd like to do
  var shopOptionsPrompt = window.prompt("Would you like to refill your health, upgrade your attack, or leave the store? Please enter REFILL, UPGRADE or Leave");

// use switch case to carry out action
switch (shopOptionsPrompt) {
  case 'REFILL': case 'refill': case 'Refill':
    if (playerMoney >= 7) {
      window.alert("Refilling the player's health by $20 for $7");

      //increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
      break;

    case 'UPGRADE': case 'upgrade': case 'Upgrade':
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by $6 for $7");

      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
      break;
    
    case 'LEAVE': case 'leave': case 'Leave':
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};




// start the game when the page loads
startGame();
