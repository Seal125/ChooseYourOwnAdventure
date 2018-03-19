// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "start.gif",
    levels: {

        start: {
            message: "You've just finished work, and you are walking home, umbrella in hand. You suddenly pass by a meowing box and stop to peer inside. It's a stray kitten! What do you do?",
            choices: [
                {
                    text: "Adopt them!",
                    nextLevel: "uhoh",
                },

                {
                    text: "Leave them be",
                    nextLevel: "guiltTrip",
                },
            ]
        },

        home: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Whew, it went away! After that whole situation, your new kitten looks hungry. You rummage through your fridge, before deciding to feed it...",
            choices: [
                {
                    text: "Milk~!",
                    nextLevel: "tired",
                },
                
                {
                    text: "Juice~!",
                    nextLevel: "sick",
                },
            ]
        },
        
        uhoh: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You let them wander around your home for a bit. Suddenly, a big black stray cat has shown up on your lawn, and he looks mean! Your new kitten looks scared...",
            choices: [
                {
                    text: "Shoo it away!",
                    nextLevel: "home",
                },
                
                {
                    text: "Let your kitten sort it out",
                    nextLevel: "bad",
                },
            ]
        },

        guiltTrip: {
            background_image: "",
            music: "",
            message: "You start walking away, feeling your heart tighten painfully as you hear the poor kitten meow behind you...",
            choices: [
                {
                    text: "You'd better try again!",
                    nextLevel: "start",
                },
            ]
        },
        
        bad: {
            background_image: "",
            music: "",
            message: "The poor kitten got beaten up by the big stray! You really shouldn't leave everything to your kitten like that...",
            choices: [
                {
                    text: "You'd better try again!",
                    nextLevel: "start",
                },
            ]
        },
        
        sick: {
            background_image: "",
            music: "",
            message: "Why would you feed a kitten juice? Learn your stuff next time!",
            choices: [
                {
                    text: "You'd better try again!",
                    nextLevel: "start",
                },
            ]
        },
        
        tired: {
            background_image: "",
            music: "",
            message: "Your kitty is now full and sleepy! It watches you as you open the door to your bedroom, before meowing at you. Sounds like it wants to sleep with you!",
            choices: [
                {
                    text: "Of course they can sleep with you!",
                    nextLevel: "sleep",
                },
                
                {
                    text: "Kittens don't belong on a bed - leave it in the living room",
                    nextLevel: "lonely",
                },
            ]
        },
        
        sleep: {
            background_image: "",
            music: "",
            message: "Your new kitten loves you! You're the perfect companion for the little kitty~",
            choices: [
                {
                    text: "Restart!",
                    nextLevel: "start",
                },
            ]
        },
        
        lonely: {
            background_image: "",
            music: "",
            message: "Your new kitten feels lonely! Maybe you should give your kitty more attention...",
            choices: [
                {
                    text: "Try again!",
                    nextLevel: "start",
                },
            ]
        }
    }
};
