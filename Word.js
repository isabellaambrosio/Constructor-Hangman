var Letter = require("./Letter.js");
var Game = require("./run.js");
var inquirer = require('inquirer');


function Word(value) {
    this.lettersArr = [];

    //looping through each letter of value (wordChoice) and pushing each index to lettersArr and assigning "value" as the "character" of "Letter"
    for (var l = 0; l < value.length; l++) {
        this.lettersArr.push(new Letter(value[l]));
    }


    this.exposeLetter = function(letter) {
        var tempWord = "";
        for (var x = 0; x < this.lettersArr.length; x++) {
            tempWord += this.lettersArr[x].exposeIfMatches(letter) + "";
        }
        console.log("");
        console.log(tempWord);

        // loop through characters pushed to lettersArr
        //expose individual letters if character and letter match
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].exposeIfMatches(letter);
        }
    };

    //deciding if user won by looping through lettersArr and checking if all letters are exposed. if all are exposed, will return true, if not, it will keep looping
    this.isExposed = function() {
        for (var a = 0; a < this.lettersArr.length; a++) {
            if (!this.lettersArr[a].exposed) {
                return false;
            }
        }
        return true;

    };

}

module.exports = Word;
