var currentAddr = null;
var web3;
var baseNum = '';
var spend;
var usrBal;

const farmerAddress = '0xb04EF45F27E72104Faa05DB7f4ef1C709ed7715b' // mainnet contract
const tokenAddr = '0x1CE0c2827e2eF14D5C4f29a091d735A204794041' // avax

var farmerContract;
var tokenContract;

var canSell = true;
const farmerAbi = [{"inputs":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"address payable","name":"projectAddress","type":"address"},{"internalType":"address payable","name":"marketingAddress","type":"address"},{"internalType":"address payable","name":"communityAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"pot","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"round","type":"uint256"}],"name":"LotteryWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReinvestedDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"mininvest","type":"uint256"},{"internalType":"uint256","name":"maxinvest","type":"uint256"},{"internalType":"bool","name":"planActivated","type":"bool"}],"name":"ADD_NEW_PLAN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ADD_PERCENT_STARTTIME","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ADD_PLAN1_BONUS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ADD_PLAN2_BONUS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ADD_PLAN3_BONUS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ADD_PLAN4_BONUS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"CHANGE_MARKETING_FEE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"CHANGE_MARKETING_WALLET","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"CHANGE_OWNERSHIP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"CHANGE_PROJECT_FEE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"CHANGE_PROJECT_WALLET","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"COMMUNITY_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CUTOFF_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOTTERY_ENABLED","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOTTERY_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOTTERY_START_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOTTERY_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOTTERY_TICKET_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MARKETING_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_LOTTERY_PARTICIPANTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_LOTTERY_TICKET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WITHDRAW","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTAGE_BONUS_PLAN_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTAGE_BONUS_PLAN_2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTAGE_BONUS_PLAN_3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTAGE_BONUS_PLAN_4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTAGE_BONUS_STARTTIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLAN_FOR_LOTTERY","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_CUTOFF_STEP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"SET_LOTTERY_ENABLED","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_LOTTERY_PERCENT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_LOTTERY_START_TIME","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_LOTTERY_STEP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_LOTTERY_TICKET_PRICE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_MAX_LOTTERY_PARTICIPANTS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_MAX_LOTTERY_TICKET","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_MAX_WITHDRAW","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"bool","name":"value","type":"bool"}],"name":"SET_PLAN_ACTIVE","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"SET_PLAN_FOR_LOTTERY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_PLAN_MAX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_PLAN_MIN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_PLAN_PERCENT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_PLAN_TIME","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_REFERRAL_PERCENT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_WALLET_LIMIT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"SET_WITHDRAW_COOLDOWN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WALLET_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_COOLDOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chooseWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erctoken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceLessLotteryPot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getLotteryHistory","outputs":[{"internalType":"uint256","name":"round","type":"uint256"},{"internalType":"address","name":"winnerAddress","type":"address"},{"internalType":"uint256","name":"pot","type":"uint256"},{"internalType":"uint256","name":"totalLotteryParticipants","type":"uint256"},{"internalType":"uint256","name":"totalLotteryTickets","type":"uint256"},{"internalType":"uint8","name":"investedPlan","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLotteryInfo","outputs":[{"internalType":"uint256","name":"getLotteryRound","type":"uint256"},{"internalType":"uint256","name":"getLotteryStartTime","type":"uint256"},{"internalType":"uint256","name":"getLotteryStep","type":"uint256"},{"internalType":"uint256","name":"getLotteryTicketPrice","type":"uint256"},{"internalType":"uint256","name":"getLotteryCurrentPot","type":"uint256"},{"internalType":"uint256","name":"getLotteryParticipants","type":"uint256"},{"internalType":"uint256","name":"getMaxLotteryParticipants","type":"uint256"},{"internalType":"uint256","name":"getTotalLotteryTickets","type":"uint256"},{"internalType":"uint256","name":"getLotteryPercent","type":"uint256"},{"internalType":"uint256","name":"getMaxLotteryTicket","type":"uint256"},{"internalType":"uint8","name":"getPlanForLottery","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"minimumInvestment","type":"uint256"},{"internalType":"uint256","name":"maximumInvestment","type":"uint256"},{"internalType":"uint256","name":"planTotalInvestorCount","type":"uint256"},{"internalType":"uint256","name":"planTotalInvestments","type":"uint256"},{"internalType":"uint256","name":"planTotalReInvestorCount","type":"uint256"},{"internalType":"uint256","name":"planTotalReInvestments","type":"uint256"},{"internalType":"bool","name":"planActivated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlansLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSiteInfo","outputs":[{"internalType":"uint256","name":"_totalInvested","type":"uint256"},{"internalType":"uint256","name":"_totalBonus","type":"uint256"},{"internalType":"uint256","name":"_totalLotteryBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getUserActiveInvestments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserActiveLotteryTickets","outputs":[{"internalType":"uint256","name":"ticketCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserActiveProjectInvestments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCutoff","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"},{"internalType":"bool","name":"reinvested","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"int8","name":"plan","type":"int8"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalReferrals","type":"uint256"},{"internalType":"uint256","name":"totalLottery","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserLotteryBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalLotteryBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"amounterc","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lotteryRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"participantAdresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"projectWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"ticketOwners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLotteryBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTickets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const tokenAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

const pancakeSwapAbi =  [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
let pancakeSwapContract = "0x10ED43C718714eb63d5aA57B78B54704E256024E".toLowerCase();


// ------ contract calls

function invest(ref, plan, _amount) {
    let value = web3.utils.toWei(_amount.toString());
    farmerContract.methods.invest(ref, plan, value).send({ from: currentAddr }).then(result => {
        refreshData();
        var dashboard = $("#dashboard");
        $('html,body').animate({scrollTop: dashboard.offset().top},'slow');
    }).catch((err) => {
        console.log(err)
    });
}

function approve(_amount) {
    let amt = +spend + +_amount;
    let _spend = web3.utils.toWei(amt.toString())
    tokenContract.methods.approve(farmerAddress, _spend).send({ from: currentAddr }).then(result => {
        if (result) {
            for (var i = 0; i < 4; i++) {
                $(`#invest-btn${i+1}`).attr('disabled', false);
                $(`#eth-to-spend${i+1}`).attr('hidden', false);
                $(`#eth-to-spend${i+1}`).attr('value', "5");
            }
            refreshData();
        }

    }).catch((err)=> {
        console.log(err)
    });
}

// section: UI calls
function withdraw() {
    if (canSell) {
        canSell = false;
        console.log('withdrawing...');
        farmerContract.methods.withdraw().send({ from: currentAddr }).then(result => {
            refreshData()
        }).catch((err) => {
            console.log(err)
        });
        setTimeout(function () {
            canSell = true;
        }, 10000);
    } else {
        console.log('Cannot withdraw yet...')
    };
}


function reinvestInPlan(plan) {
    farmerContract.methods.reinvest(plan).send({ from: currentAddr }).then(result => {
        refreshData();
    }).catch((err) => {
        console.log(err)
    });
}

function approveFarm() {
    let spendDoc = document.getElementById("approve-spend");
    let _amount = spendDoc.value;
    approve(_amount);
}

function investInPlan(plan) {
    let spendDoc = document.getElementById(`eth-to-spend${plan + 1}`);
    let _amount = spendDoc.value;
    if (_amount == "" || undefined) {
        _amount = 0
    }
    let ref = getQueryVariable('ref');
    if (!web3.utils.isAddress(ref)) { ref = currentAddr }

    if (_amount == 0) {
        alert("Must enter an amount greater than 0");
    } else if (+_amount > +spend) {
        alert("You cannot spend more than you have approved");
    } else if (+_amount > +usrBal) {
        alert("You don't have " + _amount + " AVAX in your wallet");
    } else {
        invest(ref, plan, _amount);
    }
}

// on load

function loadContracts() {
    console.log('Loading contracts...')
    web3 = window.web3
    farmerContract = new web3.eth.Contract(farmerAbi, farmerAddress);
    tokenContract = new web3.eth.Contract(tokenAbi, tokenAddr);
    console.log('Done loading contracts.')
}

function myReferralLink(address) {
    var prldoc = document.getElementById('reflink')
    prldoc.textContent = window.location.origin + "?ref=" + address
    var copyText = document.getElementById("reflink");
    copyText.value = prldoc.textContent
}

async function connect() {
    console.log('Connecting to wallet...')
    try {
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        if (accounts.length == 0) {
            console.log('Please connect to MetaMask.');
            $('#enableMetamask').html('Connect Metamask')
        } else if (accounts[0] !== currentAddr) {
            currentAddr = accounts[0];
            if (currentAddr !== null) {

                myReferralLink(currentAddr)
                console.log('Wallet connected = '+ currentAddr)

                loadContracts()
                refreshData()

                let shortenedAccount = currentAddr.replace(currentAddr.substring(5, 38), "***")
                $('#enableMetamask').html(shortenedAccount)
                $('.withdraw-btn').each(function () {
                    $(this).attr('disabled', false);
                });
            }
            $('#enableMetamask').attr('disabled', true)
        }
    } catch (err) {
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert('Please connect to MetaMask.');
        } else {
            console.error(err);
        }
        $('#enableMetamask').attr('disabled', false)
    }
}

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        $('#enableMetamask').attr('disabled', false)
        if (window.ethereum.selectedAddress !== null) {
            await connect();
            setTimeout(function () {
                controlLoop()
                controlLoopFaster()
            }, 1000)
        }
    } else {
        $('#enableMetamask').attr('disabled', true)
    }
}

$(document).ready(function () {
    loadWeb3()
 })

$('#enableMetamask').click(function () {
    connect()
});

function controlLoop() {
    refreshData()
    setTimeout(controlLoop, 25000)
}

function controlLoopFaster() {
    setTimeout(controlLoopFaster, 30)
}

function refreshData() {
    console.log('Refreshing data...')

    farmerContract.methods.getSiteInfo().call().then(function (result) {
        var invested = web3.utils.fromWei(result._totalInvested)
        $('#total-invested').html(roundNum(invested))
        calcNumTokens(roundNum(invested)).then(usdValue => {
            $('#total-invested-usd').html(roundNum(usdValue))
        })

        var bonus = web3.utils.fromWei(result._totalBonus)
        $('#total-bonus').html(roundNum(bonus))
        calcNumTokens(roundNum(bonus)).then(usdValue => {
            $('#total-bonus-usd').html(roundNum(usdValue))
        })

        var lottery = web3.utils.fromWei(result._totalLotteryBonus)
        $('#total-lottery').html(roundNum(lottery))
        calcNumTokens(roundNum(lottery)).then(usdValue => {
            $('#total-lottery-usd').html(roundNum(usdValue))
        })
    }).catch((err) => {
        console.log(err)
    });

    tokenContract.methods.balanceOf(currentAddr).call().then(userBalance => {
        let amt = web3.utils.fromWei(userBalance);
        usrBal = userBalance;
        $('#user-balance').html(roundNum(amt))
    }).catch((err) => {
        console.log(err)
    });

    tokenContract.methods.allowance(currentAddr, farmerAddress).call().then(result => {
        spend = web3.utils.fromWei(result)
        if (spend > 0) {
            $('#user-approved-spend').html(roundNum(spend));
            for (var j = 0; j < 4; j++) {
                $(`#invest-btn${j+1}`).attr('disabled', false);
                $(`#eth-to-spend${j+1}`).attr('hidden', false)
                $(`#eth-to-spend${j+1}`).attr('value', "5")
            }
        }
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserActiveInvestments(currentAddr, 0).call().then(result => {
        var amt = web3.utils.fromWei(result);
        if (amt > 0) {
            $('#reinvest-btn1').attr('disabled', false)
            $('#active-invest1').html(roundNum(amt));
             farmerContract.methods.getUserDividends(currentAddr, 0).call().then(dividends => {
                var divs = web3.utils.fromWei(dividends);
                $('#available1').html(roundNum(divs))
            });
        } else {
            $('#reinvest-btn1').attr('disabled', true)
        }

    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserActiveInvestments(currentAddr, 1).call().then(result => {
        var amt = web3.utils.fromWei(result);
        if (amt > 0) {
            $('#reinvest-btn2').attr('disabled', false)
            $('#active-invest2').html(roundNum(amt));
            farmerContract.methods.getUserDividends(currentAddr, 1).call().then(dividends => {
                var divs = web3.utils.fromWei(dividends);
                $('#available2').html(roundNum(divs))
            });
        } else {
            $('#reinvest-btn2').attr('disabled', true)
        }

    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserActiveInvestments(currentAddr, 2).call().then(result => {
        var amt = web3.utils.fromWei(result);
        if (amt > 0) {
            $('#reinvest-btn3').attr('disabled', false)
            $('#active-invest3').html(roundNum(amt));
            farmerContract.methods.getUserDividends(currentAddr, 2).call().then(dividends => {
                var divs = web3.utils.fromWei(dividends);
                $('#available3').html(roundNum(divs))
            });
        } else {
            $('#reinvest-btn3').attr('disabled', true)
        }

    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserActiveInvestments(currentAddr, 3).call().then(result => {
        var amt = web3.utils.fromWei(result);
        if (amt > 0) {
            $('#reinvest-btn4').attr('disabled', false)
            $('#active-invest4').html(roundNum(amt));
            farmerContract.methods.getUserDividends(currentAddr, 3).call().then(dividends => {
                var divs = web3.utils.fromWei(dividends);
                $('#available4').html(roundNum(divs))
            });
        } else {
            $('#reinvest-btn4').attr('disabled', true)
        }

    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserTotalDeposits(currentAddr).call().then(result => {
        let amt = web3.utils.fromWei(result)
        $('#user-total-deposits').html(roundNum(amt))
        calcNumTokens(roundNum(amt)).then(usdValue => {
            $('#user-total-deposits-usd').html(roundNum(usdValue))
        })
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserTotalWithdrawn(currentAddr).call().then(result => {
        let amt = web3.utils.fromWei(result)
        $('#user-total-withdrawn').html(roundNum(amt))
        calcNumTokens(roundNum(amt)).then(usdValue => {
            $('#user-total-withdrawn-usd').html(roundNum(usdValue))
        })
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getContractBalance().call().then(result => {
        let amt = web3.utils.fromWei(result)
        $('#contract-balance').html(roundNum(amt))
        calcNumTokens(roundNum(amt)).then(usdValue => {
            $('#contract-balance-usd').html(roundNum(usdValue))
        })
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserReferralTotalBonus(currentAddr).call().then(result => {
        let amt = web3.utils.fromWei(result)
        $('#user-total-referrals').html(roundNum(amt))
        calcNumTokens(roundNum(amt)).then(usdValue => {
            $('#user-total-referrals-usd').html(roundNum(usdValue))
        })
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserAvailable(currentAddr).call().then(result => {
        let amt = web3.utils.fromWei(result)
        $('#user-dividends-and-referrals').html(roundNum(amt));
        calcNumTokens(roundNum(amt)).then(usdValue => {
            $('#user-divs-and-refs-usd').html(roundNum(usdValue))
        })
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserTotalReferrals(currentAddr).call().then(result => {
        $('#user-referral-count').html(result);
    }).catch((err) => {
        console.log(err)
    });

    farmerContract.methods.getUserCutoff(currentAddr).call().then(result => {
        var countDownDate = new Date(result*1000).getTime();
        var x = setInterval(function() {
            // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("claim-timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("claim-timer").innerHTML = "0";
        }
        }, 1000);
    }).catch((err) => {
        console.log(err)
    });

    function userAmountOfDeposits(callback) {
        farmerContract.methods.getUserAmountOfDeposits(currentAddr).call().then(result => {
            callback(result);
        }).catch((err) => {
            console.log(err)
        });
    }

    function getUserDeposits(callback) {
        userAmountOfDeposits((result) => {
            if (result && result > 0) {
                const promises = []
                for (let i = 0; i < result; i++) {
                    promises.push(farmerContract.methods.getUserDepositInfo(currentAddr, i).call())
                }
                Promise.all(promises).then(deposits => {
                    callback(deposits)
                })
            } else {
                callback([])
            }
        })
    }


    getUserDeposits(function (results) {
        if (results.length > 0) {
            $("table tbody").children().each(function () {
                $(this).remove();
            })
        }
        for (let i = 0; i < results.length; i++) {
            var deposit = results[i];
            const dateStart = new Date(deposit.start * 1000).toLocaleString();
            const dateEnd = deposit.finish > 2000000000 ? 'Never' : new Date(deposit.finish * 1000).toLocaleString();
            const markup = `<tr><td>${i+1}</td><td>Plan ${+deposit.plan + 1}</td><td>${deposit.percent / 10}%</td><td>${
                Number(web3.utils.fromWei(deposit.amount)).toFixed(2)
            } AVAX</td><td>${dateStart}</td><td>${dateEnd}</td></tr>`
            $("table tbody").append(markup);
        }
    })

    /* lottery stuff */
    farmerContract.methods.getLotteryInfo().call().then(result => {
        var round = result.getLotteryRound;
        if (round) {
            $("#lottery-round").html(+result.getLotteryRound+1);
            farmerContract.methods.ticketOwners(round, currentAddr).call().then(numTix => {
                if (numTix) {
                    var max = result.getMaxLotteryTicket;
                    $("#your-tickets").html(numTix);
                    $("#max-user-tickets").html(max-numTix);
                }
            }).catch((err) => {
                console.log(err)
            });
            if (round >= 1) {
                farmerContract.methods.getLotteryHistory(round-1).call().then(winner => {
                    var winnerAddress = winner.winnerAddress;
                    let shortenedAddr = winnerAddress.replace(winnerAddress.substring(6, 38), "***")
                    $("#previous-winner").html(shortenedAddr);
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
        var participants = result.getLotteryParticipants;
        $("#round-participants").html(participants);
        var totalTickets = result.getTotalLotteryTickets;
        $("#total-tickets").html(totalTickets);

        var currentPot = result.getLotteryCurrentPot;
        var amt = web3.utils.fromWei(currentPot)
        $("#lottery-pot").html(roundNum(amt));
        calcNumTokens(roundNum(amt)).then(usdValue => {
            $('#lottery-pot-usd').html(roundNum(usdValue))
        })
        var start = result.getLotteryStartTime;
        const dateStart = new Date(start*1000).toLocaleString();

        $("#lottery-start").html(dateStart);
        var step = result.getLotteryStep;
        var numStart = +start;
        var numStep = +step;
        const dateEnd = new Date((numStart+numStep)*1000).toLocaleString();
        $("#lottery-end").html(dateEnd);

        var price = result.getLotteryTicketPrice;
        if (price) {
            var _price = web3.utils.fromWei(price);
            $("#ticket-price").html(roundNum(_price))
            calcNumTokens(roundNum(_price)).then(usd => {
                $('#ticket-price-usd').html(roundNum(usd))
            })
        }
    }).catch((err) => {
        console.log('err')
    })

    console.log('Done refreshing data...')
}


// utils

function roundNum(num) {
    if (num == 0) { return 0};
    if (num < 1) {
        return parseFloat(parseFloat(num).toFixed(4));
    }
    return parseFloat(parseFloat(num).toFixed(2));
}

async function calcSell( tokensToSell, tokenAddres){
    const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB

   let tokenRouter = await new web3.eth.Contract( tokenAbi, tokenAddres );
   let tokenDecimals = await tokenRouter.methods.decimals().call();

   tokensToSell = setDecimals(tokensToSell, tokenDecimals);
   let amountOut;
   try {
       let router = await new web3.eth.Contract( pancakeSwapAbi, pancakeSwapContract );
       amountOut = await router.methods.getAmountsOut(tokensToSell, [tokenAddres ,BNBTokenAddress]).call();
       amountOut =  web3.utils.fromWei(amountOut[1]);
   } catch (error) {}

   if(!amountOut) return 0;
   return amountOut;
}
async function calcBNBPrice(){
   const BNBTokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
   const USDTokenAddress  = "0x55d398326f99059fF775485246999027B3197955" //USDT
   let bnbToSell = web3.utils.toWei("1", "ether") ;
   let amountOut;
   try {
       let router = await new web3.eth.Contract( pancakeSwapAbi, pancakeSwapContract );
       amountOut = await router.methods.getAmountsOut(bnbToSell, [BNBTokenAddress ,USDTokenAddress]).call();
       amountOut =  web3.utils.fromWei(amountOut[1]);
   } catch (error) {}
   if(!amountOut) return 0;
   return amountOut;
}
function setDecimals( number, decimals ){
   number = number.toString();
   let numberAbs = number.split('.')[0]
   let numberDecimals = number.split('.')[1] ? number.split('.')[1] : '';
   while( numberDecimals.length < decimals ){
       numberDecimals += "0";
   }
   return numberAbs + numberDecimals;
}

async function calcNumTokens(tokensToSell) {
    if (tokensToSell == 0) {
       return 0;
   }
   let bnbPrice = await calcBNBPrice();
   let priceInBnb = await calcSell(tokensToSell, tokenAddr)
   var tokenPrice = priceInBnb*bnbPrice;
   if (tokenPrice < 1) {
       return parseFloat(tokenPrice).toFixed(7)
   }
   return tokenPrice.toFixed(2)
}

function copyRef() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#reflink').text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#copied").html("<i class='ri-checkbox-circle-line'> copied!</i>")
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}