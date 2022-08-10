"reach 0.1";

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (A_score, B_score) => {
  const A = A_score;
  const B = B_score;

  if ((A <= 21 && B > 21) || (A < 21 && B < 21 && A > B)) {
    return A_WINS;
  } else if ((B <= 21 && A > 21) || (B < 21 && A < 21 && B > A)) {
    return B_WINS;
  } else {
    return DRAW;
  }
};

const Player = {
  ...hasRandom,
  PlayerCard: Fun([], Object({ value: UInt })),
  seeCardValue: Fun([], UInt),
  totalCardValue: Fun([], Array(UInt, 2)),
  //we need to get the total cards of individual player
  totalCard: Fun([], Array(Bytes(1), 2)),
  seeOutcome: Fun([UInt], Null),
  extraCard: Fun([], UInt),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    wager: UInt,
    aliceScore: Fun([], UInt),
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
    bobScore: Fun([], UInt),
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

  // var [aliceRound, bobRound] = [0, 0];
  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    var AliceScore = 0;
    invariant(balance() == 2 * wager);
    while (AliceScore < 15) {
      commit();
      Alice.only(() => {
        const AliceCard = declassify(interact.PlayerCard());
        const AliceCardValues = declassify(interact.seeCardValue());
        const aliceScore = declassify(interact.aliceScore());
      });
      Alice.publish(AliceCard, aliceScore);

      AliceScore = AliceScore + aliceScore;
      continue;
    }

    var BobScore = 0;
    invariant(balance() == 2 * wager);
    while (BobScore < 15) {
      Bob.only(() => {
        const BobCard = declassify(interact.PlayerCard());
        const BobCardValues = declassify(interact.seeCardValue());
        const bobScore = declassify(interact.bobScore());
      });
      commit();
      Bob.publish(BobCard, bobScore);

      BobScore = BobScore + bobScore;
      continue;
    }
    Alice.only(() => {
      const totalCard = declassify(interact.totalCardValue());
    });
    commit();
    Alice.publish(totalCard);

    if (BobScore < 15) {
      Bob.only(() => {
        const bobNewCard = declassify(interact.extraCard());
      });
      commit();
      Bob.publish(bobNewCard);
      BobScore = BobScore + bobNewCard;
    }
    outcome = winner(AliceScore, BobScore);
    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => interact.seeOutcome(outcome));
  exit();
});