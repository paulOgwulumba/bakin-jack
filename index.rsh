'reach 0.1';

const [isOutcome, A_WINS, DRAW, B_WINS, CONTINUE] = makeEnum(4);

const winner = (bobTotal, aliceTotal) => {
  if(bobTotal > 21 || (aliceTotal < 22 && aliceTotal > bobTotal)){
    return A_WINS;
  } else {
    if(bobTotal < 22 && (bobTotal > aliceTotal || aliceTotal > 21)){
      return B_WINS;
    } 
    else return DRAW;
  }
}

const Player = {
  ...hasRandom,
  dealCards: Fun([], Tuple(UInt, Bytes(8))),   
  seeOutcome: Fun([UInt], Null),
  viewOpponentCards: Fun([Bytes(8)], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    revealCards: Fun([], Bytes(8))
  });

  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  Alice.only(() => {
    const wager = declassify(interact.wager);
  });

  Alice.publish(wager).pay(wager);

  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });

  Bob.pay(wager);

  commit();

  Alice.only(() => {
    const [_aliceCardsTotal, _aliceCardsVisible] = interact.dealCards();
    const aliceCardsVisible = declassify(_aliceCardsVisible);
    const [_aliceCommit, _aliceSalt] = makeCommitment(interact, _aliceCardsTotal);
  });

  Alice.publish(aliceCardsVisible);

  commit();

  Bob.interact.viewOpponentCards(aliceCardsVisible);

  Bob.only(() => {
    const [bobCardsTotal, bobCardsVisible] = declassify(interact.dealCards());
  });

  Bob.publish(bobCardsTotal, bobCardsVisible);

  commit();

  Alice.only(() => {
    const aliceCardsTotal = declassify(_aliceCardsTotal);
    interact.viewOpponentCards(bobCardsVisible);
    const aliceFinalCards = declassify(interact.revealCards())
  })

  Alice.publish(aliceCardsTotal, aliceFinalCards);

  Bob.interact.viewOpponentCards(aliceFinalCards);

  const outcome = winner(bobCardsTotal, aliceCardsTotal);

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  })

  if (outcome == A_WINS) {
    transfer(2 * wager).to(Alice)
  }
  else if (outcome == B_WINS) {
    transfer((3 * wager) / 2).to(Bob)
    transfer((wager) / 2).to(Alice);
  }
  else {
    transfer(wager).to(Bob);
    transfer(wager).to(Alice)
  }

  transfer(balance()).to(Alice);

  commit();

  exit();
});
