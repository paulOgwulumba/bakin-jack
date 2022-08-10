import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();
const isAlice = await ask.ask(
  `Do you want to create a new game?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';
console.log(`Starting Black Jack as ${who}`);

const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

let blackJackGame = {
  dealer: {
    cards: "",
    score: 0,
  },
  player: {
    cards: "",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "K", "Q", "J", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    K: 10,
    J: 10,
    Q: 10,
    A: 11,
  },
};

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const before = await getBalance();
console.log(`Your balance is ${before}`);

function trimText (text) {
  let trimmedText = '';

  const textArray = text.split('');

  textArray.forEach((val) => {
    if (blackJackGame.cards.indexOf(val) > -1) {
      trimmedText += val;
    }
  });

  return trimmedText;
}

function pickRandomCard() {
  const randomCard = blackJackGame.cards[Math.floor(Math.random() * blackJackGame.cards.length)];
  const cardValue = blackJackGame.cardsMap[randomCard];
  
  if (isAlice) {
    blackJackGame.dealer.cards += randomCard;
    blackJackGame.dealer.score += cardValue;
  }
  else {
    blackJackGame.player.cards += randomCard;
    blackJackGame.player.score += cardValue;
  }

  console.log("You picked the card", randomCard, "and the total value of cards in your posession is", isAlice? blackJackGame.dealer.score : blackJackGame.player.score);
}

/**
 * Creating the shared interact interfaces
 */

const interact = { ...stdlib.hasRandom };

interact.dealCards = async () => {
  if (isAlice) {
    pickRandomCard();
    pickRandomCard();

    while(blackJackGame.dealer.score < 17) {
      console.log("Picking an extra card because current total score is less than 17.");
      pickRandomCard();
    }

    return [blackJackGame.dealer.score, blackJackGame.dealer.cards.substring(1)];
  }
  else {
    pickRandomCard();
    pickRandomCard();

    let shouldPickMore = true;

    while(shouldPickMore) {
      shouldPickMore = await ask.ask(
        `Would you like to draw an extra card? Type 'y' to draw an extra card and 'n' to submit current hand.`,
        ask.yesno
      );

      if (shouldPickMore) pickRandomCard();
    }

    return [blackJackGame.player.score, blackJackGame.player.cards];
  }
};

interact.seeOutcome = (value) => {
  if (parseInt(value) === 0) {
    console.log(isAlice? 'You win!!!' : 'Oops! You lost.');
  }
  else if (parseInt(value) === 1) {
    console.log('It was a draw');
  }
  else {
    console.log(!isAlice? 'You win!!!' : 'Oops! You lost.');
  }
}

interact.viewOpponentCards = (cards) => {
  const trimmedText = trimText(cards);
  console.log('Your opponent has the following cards: ', trimmedText.split(''))
}

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );

  /**
   * Creating Alice's interact interface
   */
  interact.wager = amt;

  interact.revealCards = () => {
    return blackJackGame.dealer.cards;
  }
} else {
  /**
   * Creating Bob's interact interface
   */
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);
const after = await getBalance();
console.log(`Your balance is now ${after}`);
ask.done();