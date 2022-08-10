// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc1],
      3: [ctc0, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v149 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v149],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v149, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v153], secs: v155, time: v154, didSend: v29, from: v152 } = txn1;
      
      sim_r.txns.push({
        amt: v153,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v153], secs: v155, time: v154, didSend: v29, from: v152 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v162, time: v161, didSend: v38, from: v160 } = txn2;
  const v164 = stdlib.add(v153, v153);
  ;
  const v167 = stdlib.protect(ctc2, await interact.dealCards(), {
    at: './index.rsh:54:70:application',
    fs: ['at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:17:function exp)'],
    msg: 'dealCards',
    who: 'Alice'
    });
  const v168 = v167[stdlib.checkedBigNumberify('./index.rsh:54:70:application', stdlib.UInt_max, '0')];
  const v169 = v167[stdlib.checkedBigNumberify('./index.rsh:54:70:application', stdlib.UInt_max, '1')];
  stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:56:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:53:13:application call to [unknown function] (defined at: ./index.rsh:53:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v152, v153, v160, v164, v169],
    evt_cnt: 1,
    funcNum: 2,
    lct: v161,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v176], secs: v178, time: v177, didSend: v56, from: v175 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v56, from: v175 } = txn3;
  ;
  const v179 = stdlib.addressEq(v152, v175);
  stdlib.assert(v179, {
    at: './index.rsh:59:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v189, v190], secs: v192, time: v191, didSend: v75, from: v188 } = txn4;
  ;
  const v193 = stdlib.addressEq(v160, v188);
  stdlib.assert(v193, {
    at: './index.rsh:69:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc3, await interact.viewOpponentCards(v190), {
    at: './index.rsh:75:31:application',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:17:function exp)'],
    msg: 'viewOpponentCards',
    who: 'Alice'
    });
  const v196 = stdlib.protect(ctc1, await interact.revealCards(), {
    at: './index.rsh:76:60:application',
    fs: ['at ./index.rsh:73:13:application call to [unknown function] (defined at: ./index.rsh:73:17:function exp)'],
    msg: 'revealCards',
    who: 'Alice'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v152, v153, v160, v164, v189, v168, v196],
    evt_cnt: 2,
    funcNum: 4,
    lct: v191,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v198, v199], secs: v201, time: v200, didSend: v86, from: v197 } = txn5;
      
      ;
      let v204;
      const v205 = stdlib.gt(v189, stdlib.checkedBigNumberify('./index.rsh:6:17:decimal', stdlib.UInt_max, '21'));
      const v206 = stdlib.lt(v198, stdlib.checkedBigNumberify('./index.rsh:6:37:decimal', stdlib.UInt_max, '22'));
      const v207 = stdlib.gt(v198, v189);
      const v208 = v206 ? v207 : false;
      const v209 = v205 ? true : v208;
      if (v209) {
        v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        const v210 = stdlib.lt(v189, stdlib.checkedBigNumberify('./index.rsh:9:19:decimal', stdlib.UInt_max, '22'));
        const v211 = stdlib.gt(v189, v198);
        const v212 = stdlib.gt(v198, stdlib.checkedBigNumberify('./index.rsh:9:64:decimal', stdlib.UInt_max, '21'));
        const v213 = v211 ? true : v212;
        const v214 = v210 ? v213 : false;
        if (v214) {
          v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          }
        }
      
      const v219 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v219) {
        const v220 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, '2'), v153);
        const v224 = stdlib.sub(v164, v220);
        sim_r.txns.push({
          kind: 'from',
          to: v152,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v152,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v232 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        if (v232) {
          const v233 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:93:15:decimal', stdlib.UInt_max, '3'), v153);
          const v234 = stdlib.div(v233, stdlib.checkedBigNumberify('./index.rsh:93:28:decimal', stdlib.UInt_max, '2'));
          const v238 = stdlib.sub(v164, v234);
          sim_r.txns.push({
            kind: 'from',
            to: v160,
            tok: undefined /* Nothing */
            });
          const v239 = stdlib.div(v153, stdlib.checkedBigNumberify('./index.rsh:94:24:decimal', stdlib.UInt_max, '2'));
          const v243 = stdlib.sub(v238, v239);
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v254 = stdlib.sub(v164, v153);
          sim_r.txns.push({
            kind: 'from',
            to: v160,
            tok: undefined /* Nothing */
            });
          const v258 = stdlib.sub(v254, v153);
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v198, v199], secs: v201, time: v200, didSend: v86, from: v197 } = txn5;
  ;
  const v202 = stdlib.addressEq(v152, v197);
  stdlib.assert(v202, {
    at: './index.rsh:79:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v204;
  const v205 = stdlib.gt(v189, stdlib.checkedBigNumberify('./index.rsh:6:17:decimal', stdlib.UInt_max, '21'));
  const v206 = stdlib.lt(v198, stdlib.checkedBigNumberify('./index.rsh:6:37:decimal', stdlib.UInt_max, '22'));
  const v207 = stdlib.gt(v198, v189);
  const v208 = v206 ? v207 : false;
  const v209 = v205 ? true : v208;
  if (v209) {
    v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    }
  else {
    const v210 = stdlib.lt(v189, stdlib.checkedBigNumberify('./index.rsh:9:19:decimal', stdlib.UInt_max, '22'));
    const v211 = stdlib.gt(v189, v198);
    const v212 = stdlib.gt(v198, stdlib.checkedBigNumberify('./index.rsh:9:64:decimal', stdlib.UInt_max, '21'));
    const v213 = v211 ? true : v212;
    const v214 = v210 ? v213 : false;
    if (v214) {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      }
    }
  stdlib.protect(ctc3, await interact.seeOutcome(v204), {
    at: './index.rsh:86:24:application',
    fs: ['at ./index.rsh:85:7:application call to [unknown function] (defined at: ./index.rsh:85:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  const v219 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  if (v219) {
    const v220 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, '2'), v153);
    const v224 = stdlib.sub(v164, v220);
    ;
    ;
    return;
    }
  else {
    const v232 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    if (v232) {
      const v233 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:93:15:decimal', stdlib.UInt_max, '3'), v153);
      const v234 = stdlib.div(v233, stdlib.checkedBigNumberify('./index.rsh:93:28:decimal', stdlib.UInt_max, '2'));
      const v238 = stdlib.sub(v164, v234);
      ;
      const v239 = stdlib.div(v153, stdlib.checkedBigNumberify('./index.rsh:94:24:decimal', stdlib.UInt_max, '2'));
      const v243 = stdlib.sub(v238, v239);
      ;
      ;
      return;
      }
    else {
      const v254 = stdlib.sub(v164, v153);
      ;
      const v258 = stdlib.sub(v254, v153);
      ;
      ;
      return;
      }}
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v153], secs: v155, time: v154, didSend: v29, from: v152 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v153), {
    at: './index.rsh:46:25:application',
    fs: ['at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v152, v153],
    evt_cnt: 0,
    funcNum: 1,
    lct: v154,
    onlyIf: true,
    out_tys: [],
    pay: [v153, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v162, time: v161, didSend: v38, from: v160 } = txn2;
      
      const v164 = stdlib.add(v153, v153);
      sim_r.txns.push({
        amt: v153,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v162, time: v161, didSend: v38, from: v160 } = txn2;
  const v164 = stdlib.add(v153, v153);
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v56, from: v175 } = txn3;
  ;
  const v179 = stdlib.addressEq(v152, v175);
  stdlib.assert(v179, {
    at: './index.rsh:59:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.viewOpponentCards(v176), {
    at: './index.rsh:63:33:application',
    fs: ['at ./index.rsh:63:33:application call to [unknown function] (defined at: ./index.rsh:63:33:function exp)', 'at ./index.rsh:63:33:application call to "liftedInteract" (defined at: ./index.rsh:63:33:application)'],
    msg: 'viewOpponentCards',
    who: 'Bob'
    });
  
  const v183 = stdlib.protect(ctc3, await interact.dealCards(), {
    at: './index.rsh:66:75:application',
    fs: ['at ./index.rsh:65:11:application call to [unknown function] (defined at: ./index.rsh:65:15:function exp)'],
    msg: 'dealCards',
    who: 'Bob'
    });
  const v184 = v183[stdlib.checkedBigNumberify('./index.rsh:66:75:application', stdlib.UInt_max, '0')];
  const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:66:75:application', stdlib.UInt_max, '1')];
  
  const txn4 = await (ctc.sendrecv({
    args: [v152, v153, v160, v164, v184, v185],
    evt_cnt: 2,
    funcNum: 3,
    lct: v177,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189, v190], secs: v192, time: v191, didSend: v75, from: v188 } = txn4;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v189, v190], secs: v192, time: v191, didSend: v75, from: v188 } = txn4;
  ;
  const v193 = stdlib.addressEq(v160, v188);
  stdlib.assert(v193, {
    at: './index.rsh:69:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v198, v199], secs: v201, time: v200, didSend: v86, from: v197 } = txn5;
  ;
  const v202 = stdlib.addressEq(v152, v197);
  stdlib.assert(v202, {
    at: './index.rsh:79:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.viewOpponentCards(v199), {
    at: './index.rsh:81:33:application',
    fs: ['at ./index.rsh:81:33:application call to [unknown function] (defined at: ./index.rsh:81:33:function exp)', 'at ./index.rsh:81:33:application call to "liftedInteract" (defined at: ./index.rsh:81:33:application)'],
    msg: 'viewOpponentCards',
    who: 'Bob'
    });
  
  let v204;
  const v205 = stdlib.gt(v189, stdlib.checkedBigNumberify('./index.rsh:6:17:decimal', stdlib.UInt_max, '21'));
  const v206 = stdlib.lt(v198, stdlib.checkedBigNumberify('./index.rsh:6:37:decimal', stdlib.UInt_max, '22'));
  const v207 = stdlib.gt(v198, v189);
  const v208 = v206 ? v207 : false;
  const v209 = v205 ? true : v208;
  if (v209) {
    v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    }
  else {
    const v210 = stdlib.lt(v189, stdlib.checkedBigNumberify('./index.rsh:9:19:decimal', stdlib.UInt_max, '22'));
    const v211 = stdlib.gt(v189, v198);
    const v212 = stdlib.gt(v198, stdlib.checkedBigNumberify('./index.rsh:9:64:decimal', stdlib.UInt_max, '21'));
    const v213 = v211 ? true : v212;
    const v214 = v210 ? v213 : false;
    if (v214) {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      v204 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v204), {
    at: './index.rsh:86:24:application',
    fs: ['at ./index.rsh:85:7:application call to [unknown function] (defined at: ./index.rsh:85:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  const v219 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  if (v219) {
    const v220 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:14:decimal', stdlib.UInt_max, '2'), v153);
    const v224 = stdlib.sub(v164, v220);
    ;
    ;
    return;
    }
  else {
    const v232 = stdlib.eq(v204, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    if (v232) {
      const v233 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:93:15:decimal', stdlib.UInt_max, '3'), v153);
      const v234 = stdlib.div(v233, stdlib.checkedBigNumberify('./index.rsh:93:28:decimal', stdlib.UInt_max, '2'));
      const v238 = stdlib.sub(v164, v234);
      ;
      const v239 = stdlib.div(v153, stdlib.checkedBigNumberify('./index.rsh:94:24:decimal', stdlib.UInt_max, '2'));
      const v243 = stdlib.sub(v238, v239);
      ;
      ;
      return;
      }
    else {
      const v254 = stdlib.sub(v164, v153);
      ;
      const v258 = stdlib.sub(v254, v153);
      ;
      ;
      return;
      }}
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAECAwQgSBUWJgIBAAAiNQAxGEEDQilkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJAxAAiZJJQxAAcBJIQQMQAFIIQQSRCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+VyggNf0hBls1/IFQWzX7STUFSSJbNfpXCAg1+YAEE5PU7jT6FlA0+VCwNP8xABJENPshBw00+iEIDDT6NPsNEBFBAAYiNfhCAB00+yEIDDT7NPoNNPohBw0REEEABiQ1+EIAAyM1+DT4IhJBACwkNP4LNfexIrIBNPeyCCOyEDT/sgezsSKyATT8NPcJsggjshA0/7IHs0IB9jT4JBJBAEclNP4LJAo197EisgE097III7IQNP2yB7M0/iQKNfaxIrIBNPayCCOyEDT/sgezsSKyATT8NPcJNPYJsggjshA0/7IHs0IBqLEisgE0/rIII7IQNP2yB7OxIrIBNP6yCCOyEDT/sgezsSKyATT8NP4JNP4JsggjshA0/7IHs0IBb0glNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQVbNf5XKCA1/SEGWzX8STUFSSJbNftXCAg1+oAEv7uOnDT7FlA0+lCwNP0xABJENP80/hZQNP1QNPwWUDT7FlAoSwFXAFhnSCEENQEyBjUCQgEaSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/lcoIDX9IQZbNfxJNQU1+4AEUrHrSTT7ULA0/zEAEkQ0/zT+FlA0/VA0/BZQKEsBVwBQZ0glNQEyBjUCQgC6SSMMQABSSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEFWzX+gASai5F0sDT+SQg1/TT+iADSNP80/hZQMQBQNP0WUChLAVcAUGdIJDUBMgY1AkIAYkiBoI0GiACrIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAIUxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v176",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v190",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v199",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v176",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v190",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v198",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T6",
                "name": "v199",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001359380380620013598339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b6110ab80620002ae6000396000f3fe60806040526004361061006e5760003560e01c8063647588f51161004b578063647588f5146100c157806383230757146100d4578063ab53f2c6146100e9578063bd80fa041461010c57005b80631e93b0f1146100775780632c10a1591461009b578063516e5287146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610c84565b61011f565b6100756100bc366004610cb9565b6102d1565b6100756100cf366004610c84565b6104eb565b3480156100e057600080fd5b50600154610088565b3480156100f557600080fd5b506100fe610666565b604051610092929190610cd5565b61007561011a366004610cb9565b610703565b61012f6001600054146009610b33565b6101498135158061014257506001548235145b600a610b33565b60008080556002805461015b90610d32565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610d32565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610d83565b90506102046040518060200160405280600081525090565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610235929190610de8565b60405180910390a1602082015161024c9080610e3b565b815260208201516102609034146008610b33565b610268610b5c565b82516001600160a01b03168152602080840151818301523360408084019190915283516060840152600260005543600155516102a691839101610e53565b604051602081830303815290604052600290805190602001906102ca929190610b96565b5050505050565b6102e16003600054146011610b33565b6102fb813515806102f457506001548235145b6012610b33565b60008080556002805461030d90610d32565b80601f016020809104026020016040519081016040528092919081815260200182805461033990610d32565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b505050505080602001905181019061039e9190610e8c565b90507fb32cb7fa472fffee3e3f69df6311064c85b6cd5e5561c686810cf4b1088c186433836040516103d1929190610f4a565b60405180910390a16103e53415600f610b33565b6040810151610400906001600160a01b031633146010610b33565b6104446040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081528a8601356080808b01918252600460005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c0015b604051602081830303815290604052600290805190602001906104e5929190610b96565b50505050565b6104fb600260005414600d610b33565b6105158135158061050e57506001548235145b600e610b33565b60008080556002805461052790610d32565b80601f016020809104026020016040519081016040528092919081815260200182805461055390610d32565b80156105a05780601f10610575576101008083540402835291602001916105a0565b820191906000526020600020905b81548152906001019060200180831161058357829003601f168201915b50505050508060200190518101906105b89190610e8c565b90507f0aded3c8a1f29a825c0088ca59cd01c1bf138c54e6b08e464cecb9d702bb54db33836040516105eb929190610f67565b60405180910390a16105ff3415600b610b33565b8051610617906001600160a01b03163314600c610b33565b61061f610b5c565b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501519084015260036000554360015590516104c191839101610e53565b60006060600054600280805461067b90610d32565b80601f01602080910402602001604051908101604052809291908181526020018280546106a790610d32565b80156106f45780601f106106c9576101008083540402835291602001916106f4565b820191906000526020600020905b8154815290600101906020018083116106d757829003601f168201915b50505050509050915091509091565b6107136004600054146015610b33565b61072d8135158061072657506001548235145b6016610b33565b60008080556002805461073f90610d32565b80601f016020809104026020016040519081016040528092919081815260200182805461076b90610d32565b80156107b85780601f1061078d576101008083540402835291602001916107b8565b820191906000526020600020905b81548152906001019060200180831161079b57829003601f168201915b50505050508060200190518101906107d09190610f93565b90506107fd6040518060800160405280600081526020016000815260200160008152602001600081525090565b7f1680f1f49bab5bce70fda067a0e2ef3df5bfbefb13a6c3c5c3026cc5f0ddc7b1338460405161082e929190610f4a565b60405180910390a161084234156013610b33565b815161085a906001600160a01b031633146014610b33565b601582608001511161088957601660208401351061087957600061088c565b608082015160208401351161088c565b60015b1561089a57600081526108df565b60168260800151106108ad5760006108cc565b60808201516020840135106108c95760156020840135116108cc565b60015b156108da57600281526108df565b600181525b805161099d5760208201516108f590600261101d565b6020820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610933573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc82602001518460600151610959919061103c565b6040518115909202916000818181858888f19350505050158015610981573d6000803e3d6000fd5b506000808055600181905561099890600290610c1a565b505050565b805160021415610a89576002826020015160036109ba919061101d565b6109c49190611053565b60408083018290528381015190516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a04573d6000803e3d6000fd5b5060028260200151610a169190611053565b6060820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a54573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc826060015183604001518560600151610a7f919061103c565b610959919061103c565b81604001516001600160a01b03166108fc83602001519081150290604051600060405180830381858888f19350505050158015610aca573d6000803e3d6000fd5b50815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b08573d6000803e3d6000fd5b5081600001516001600160a01b03166108fc836020015184602001518560600151610a7f919061103c565b81610b585760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b828054610ba290610d32565b90600052602060002090601f016020900481019282610bc45760008555610c0a565b82601f10610bdd57805160ff1916838001178555610c0a565b82800160010185558215610c0a579182015b82811115610c0a578251825591602001919060010190610bef565b50610c16929150610c57565b5090565b508054610c2690610d32565b6000825580601f10610c36575050565b601f016020900490600052602060002090810190610c549190610c57565b50565b5b80821115610c165760008155600101610c58565b600060408284031215610c7e57600080fd5b50919050565b600060408284031215610c9657600080fd5b610ca08383610c6c565b9392505050565b600060608284031215610c7e57600080fd5b600060608284031215610ccb57600080fd5b610ca08383610ca7565b82815260006020604081840152835180604085015260005b81811015610d0957858101830151858201606001528201610ced565b81811115610d1b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610d4657607f821691505b60208210811415610c7e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d7e57600080fd5b919050565b600060408284031215610d9557600080fd5b6040516040810181811067ffffffffffffffff82111715610dc657634e487b7160e01b600052604160045260246000fd5b604052610dd283610d67565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610e1657600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e4e57610e4e610e25565b500190565b81516001600160a01b03908116825260208084015190830152604080840151909116908201526060918201519181019190915260800190565b600060808284031215610e9e57600080fd5b6040516080810181811067ffffffffffffffff82111715610ecf57634e487b7160e01b600052604160045260246000fd5b604052610edb83610d67565b815260208301516020820152610ef360408401610d67565b6040820152606083015160608201528091505092915050565b80356001600160c01b03198116808214610f2557600080fd5b9092525050565b8035825260208101356020830152610b586040830160408301610f0c565b6001600160a01b038316815260808101610ca06020830184610f2c565b6001600160a01b038316815281356020808301919091526060820190610ca09060408401908501610f0c565b600060a08284031215610fa557600080fd5b60405160a0810181811067ffffffffffffffff82111715610fd657634e487b7160e01b600052604160045260246000fd5b604052610fe283610d67565b815260208301516020820152610ffa60408401610d67565b604082015260608301516060820152608083015160808201528091505092915050565b600081600019048311821515161561103757611037610e25565b500290565b60008282101561104e5761104e610e25565b500390565b60008261107057634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220d2a33d021fc1e0e41e71d5698675f151564a31033b7da66038a02812483425d164736f6c634300080c0033`,
  BytecodeLen: 4953,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:71:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
