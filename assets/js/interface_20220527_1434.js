var minersAddr = "0xf52C3902678Aa4Af29F58A9582dAaB792cf5eA5b"
var tokenAddr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
var minersAbi = [
  {
    inputs: [
      { internalType: "address", name: "_dev1", type: "address" },
      { internalType: "address", name: "_dev2", type: "address" },
      { internalType: "address", name: "_dev3", type: "address" },
      { internalType: "address", name: "_prtnr1", type: "address" },
      { internalType: "address", name: "_prtnr2", type: "address" },
      { internalType: "address", name: "_mkt", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    name: "FeePayed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint8", name: "plan", type: "uint8" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NewDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Newbie",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RefBonus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint8", name: "plan", type: "uint8" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReinvestedDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "time", type: "uint256" },
      { internalType: "uint256", name: "percent", type: "uint256" },
      { internalType: "uint256", name: "mininvest", type: "uint256" },
      { internalType: "uint256", name: "maxinvest", type: "uint256" },
      { internalType: "bool", name: "planActivated", type: "bool" },
    ],
    name: "ADD_NEW_PLAN",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "ADD_PERCENT_STARTTIME",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "ADD_PLAN1_BONUS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "ADD_PLAN2_BONUS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "ADD_PLAN3_BONUS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "ADD_PLAN4_BONUS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_DEV1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_DEV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_DEV3",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "CHANGE_MKT_BUYBACK_FEE",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_MKT_WALLET",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_OWNERSHIP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "CHANGE_PROJECT_FEE",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_PRTNR1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "value", type: "address" }],
    name: "CHANGE_PRTNR2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "COMPOUND_COOLDOWN",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CUTOFF_STEP",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_WITHDRAW",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MKT_BUYBACK_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BONUS_PLAN_1",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BONUS_PLAN_2",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BONUS_PLAN_3",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BONUS_PLAN_4",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BONUS_STARTTIME",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROJECT_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REFERRAL_PERCENT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REINVEST_BONUS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_COMPOUND_COOLDOWN",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_CUTOFF_STEP",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_MAX_WITHDRAW",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "bool", name: "value", type: "bool" },
    ],
    name: "SET_PLAN_ACTIVE",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "SET_PLAN_MAX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "SET_PLAN_MIN",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "SET_PLAN_PERCENT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "SET_PLAN_TIME",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_REFERRAL_PERCENT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_REINVEST_BONUS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_START_TIME",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_SUSTAINABILITY_TAX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_WALLET_LIMIT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SET_WITHDRAW_COOLDOWN",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "SUSTAINABILITY_TAX",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIME_STEP",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WALLET_LIMIT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAW_COOLDOWN",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erctoken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockTimeStamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "plan", type: "uint8" }],
    name: "getPlanInfo",
    outputs: [
      { internalType: "uint256", name: "time", type: "uint256" },
      { internalType: "uint256", name: "percent", type: "uint256" },
      { internalType: "uint256", name: "minimumInvestment", type: "uint256" },
      { internalType: "uint256", name: "maximumInvestment", type: "uint256" },
      {
        internalType: "uint256",
        name: "planTotalInvestorCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "planTotalInvestments",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "planTotalReInvestorCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "planTotalReInvestments",
        type: "uint256",
      },
      { internalType: "bool", name: "planActivated", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlansLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSiteInfo",
    outputs: [
      { internalType: "uint256", name: "_totalInvested", type: "uint256" },
      { internalType: "uint256", name: "_totalBonus", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "uint8", name: "plan", type: "uint8" },
    ],
    name: "getUserActiveInvestments",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserActiveProjectInvestments",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserAmountOfDeposits",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserAvailable",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "uint8", name: "plan", type: "uint8" },
    ],
    name: "getUserCheckpoint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserCutoff",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getUserDepositInfo",
    outputs: [
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "uint256", name: "percent", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "finish", type: "uint256" },
      { internalType: "bool", name: "reinvested", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserDividends",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "int8", name: "plan", type: "int8" },
    ],
    name: "getUserDividends",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserInfo",
    outputs: [
      { internalType: "uint256", name: "totalDeposit", type: "uint256" },
      { internalType: "uint256", name: "totalWithdrawn", type: "uint256" },
      { internalType: "uint256", name: "totalReferrals", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferralBonus",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferralTotalBonus",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferralWithdrawn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferrer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserTotalDeposits",
    outputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserTotalReferrals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserTotalWithdrawn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "referrer", type: "address" },
      { internalType: "uint8", name: "plan", type: "uint8" },
      { internalType: "uint256", name: "amounterc", type: "uint256" },
    ],
    name: "invest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint8", name: "plan", type: "uint8" }],
    name: "reinvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalInvested",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalInvestorCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReInvested",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRefBonus",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

var tokenAbi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
]
var minersContract
var tokenContract

var canSell = true
var canHatch = true

function approveBUSD(trx) {
  tokenContract.methods.approve(minersAddr, trx).send({ from: currentAddr })
}
function spendLimit(callback) {
  tokenContract.methods
    .allowance(currentAddr, minersAddr)
    .call()
    .then((result) => {
      callback(web3.utils.fromWei(result))
    })
    .catch((err) => {
      console.log(err)
    })
}

function userBalance(callback) {
  tokenContract.methods
    .balanceOf(currentAddr)
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result)
      // console.log("balance " + amt)
      callback(amt)
      usrBal = amt
    })
    .catch((err) => {
      console.log(err)
    })
}

// Modified
function contractBalance(callback) {
  tokenContract.methods
    .balanceOf("0xf52C3902678Aa4Af29F58A9582dAaB792cf5eA5b")
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result)
      //console.log("balance" + amt)
      callback(amt)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Done
function userTotalDeposits(callback) {
  minersContract.methods
    .getUserTotalDeposits(currentAddr)
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result)
      // console.log("balance" + amt)
      callback(amt)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Done
function totalInvested(callback) {
  minersContract.methods
    .totalInvested()
    .call()
    .then((result) => {
      //var amt = result
      var amt = web3.utils.fromWei(result)
      // console.log("balance" + amt)
      callback(amt)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Done
function userAvailable(callback) {
  minersContract.methods
    .getUserAvailable(currentAddr)
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result)
      callback(amt)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Done, not working
function userAmountOfDeposits(callback) {
  minersContract.methods
    .getUserAmountOfDeposits(currentAddr)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Done, needs inputs
function planInfo(callback) {
  minersContract.methods
    .getPlanInfo(_plan)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

// Done, think working
function userTotalWithdrawn(callback) {
  minersContract.methods
    .getUserTotalWithdrawn(currentAddr)
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result)
      callback(amt)
    })
    .catch((err) => {
      console.log(err)
    })
}

function userReferralTotalBonus(callback) {
  minersContract.methods
    .getUserReferralTotalBonus(currentAddr)
    .call()
    .then((result) => {
      var amt = web3.utils.fromWei(result)
      callback(amt)
    })
    .catch((err) => {
      console.log(err)
    })
}

function userTotalReferrals(callback) {
  minersContract.methods
    .getUserTotalReferrals(currentAddr)
    .call()
    .then((result) => {
      //var amt = web3.utils.fromWei(result)
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function compoundCooldown(callback) {
  minersContract.methods
    .COMPOUND_COOLDOWN()
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function withdrawCooldown(callback) {
  minersContract.methods
    .WITHDRAW_COOLDOWN()
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function getUserDeposits(callback) {
  userAmountOfDeposits((result) => {
    if (result && result > 0) {
      const promises = []
      for (let i = 0; i < result; i++) {
        // console.log(`Query deposit ${i}`)
        promises.push(
          minersContract.methods.getUserDepositInfo(currentAddr, i).call()
        )
      }
      Promise.all(promises).then((deposits) => {
        // console.log(`Found all results`, deposits)
        callback(deposits)
      })
    } else {
      callback([])
    }
  })
}

function withdraw(callback) {
  if (canSell) {
    canSell = false
    console.log("Selling")
    minersContract.methods
      .withdraw()
      .send({ from: currentAddr })
      .then((result) => {
        callback()
      })
      .catch((err) => {
        console.log(err)
      })
    setTimeout(function () {
      canSell = true
    }, 10000)
  } else {
    console.log("Cannot sell yet...")
  }
}

function invest(ref, plan, trx, callback) {
  minersContract.methods
    .invest(ref, plan, web3.utils.toWei(trx))
    .send({ from: currentAddr })
    .then((result) => {
      callback()
    })
    .catch((err) => {
      console.log(err)
    })
}

function reinvest(plan) {
  minersContract.methods
    .reinvest(plan)
    .send({ from: currentAddr })
    .then((result) => {
      callback()
    })
    .catch((err) => {
      console.log(err)
    })
}

function UserCutoff(callback) {
  minersContract.methods
    .getUserCutoff(currentAddr)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function UserCheckpointPlan1(callback) {
  minersContract.methods
    .getUserCheckpoint(currentAddr, 0)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function UserCheckpointPlan2(callback) {
  minersContract.methods
    .getUserCheckpoint(currentAddr, 1)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function UserCheckpointPlan3(callback) {
  minersContract.methods
    .getUserCheckpoint(currentAddr, 2)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function UserCheckpointPlan4(callback) {
  minersContract.methods
    .getUserCheckpoint(currentAddr, 3)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function Plan1Info(callback) {
  minersContract.methods
    .getPlanInfo(0)
    .call()
    .then((result) => {
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

function StartTime(callback) {
  minersContract.methods
    .startTime()
    .call()
    .then((result) => {
      console.log(result)
      callback(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

// startTime

// function getUserDeposits(callback){
// 	userAmountOfDeposits((result) => {
// 		if (result && result > 0) {
// 			const promises = []
// 			for (let i=0; i<result; i++) {
// 				// console.log(`Query deposit ${i}`)
// 				promises.push(minersContract.methods.getUserDepositInfo(currentAddr, i).call())
// 			}
// 			Promise.all(promises).then(deposits => {
// 				// console.log(`Found all results`, deposits)
// 				callback(deposits)
// 			})
// 		} else {
// 			callback([])
// 		}
// 	})
// }
