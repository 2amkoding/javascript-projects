const { whoWon } = require('../RPS.js');

describe("whoWon", function() {

    test("returns 'TIE!' if player1 === player2", () => {
        let result = whoWon('rock','rock');
        expect(result).toBe('TIE!');
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

     test("returns 'invalid' if p1 or p2 !== rock || paper || scissor", () => {
        let output = whoWon('paper', 'rocket');
        expect(output).toBe("invalid")
     })
});