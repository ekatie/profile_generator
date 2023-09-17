const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responses = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  responses.name = name;

  rl.question("What's an activity you like doing? ", (hobby) => {
    responses.hobby = hobby;

    rl.question("What do you listen to while doing that? ", (music) => {
      responses.music = music;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        responses.meal = meal;

        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          responses.favFood = favFood;

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            responses.sport = sport;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              responses.superpower = superpower;

              console.log(`${name} loves listening to ${music} while ${hobby}, devouring ${favFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});