#!/bin/sh
export DEFAULT_ACCOUNT="0x627306090abab3a6e1400e9345bc60c78a8bef57"
export SELLER="0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE"
export DEPOSIT_BALANCE_WETH="200 WETH"

echo "****************************************\n"
echo "\nSeller account: ${SELLER}\n"

echo "\n\nBash script running createSellOrder.js logic....\n\n"
echo "****************************************\n"


echo "****************************************\n"
echo "\n            STAGE 1: endowing seller with ${DEPOSIT_BALANCE_WETH} \n"
echo "****************************************\n"

echo "****************************************\n"
echo "\nDepositing ${DEPOSIT_BALANCE_WETH} into ${DEFAULT_ACCOUNT}\n"
echo "****************************************\n"

DEPOSIT_OUTPUT=`yarn cli deposit ${DEPOSIT_BALANCE_WETH} ${DEFAULT_ACCOUNT}`
echo "\n{$DEPOSIT_OUTPUT}\n"


echo "****************************************\n"
echo "\nWithdrawing ${DEPOSIT_BALANCE_WETH} from ${DEFAULT_ACCOUNT}\n"
echo "****************************************\n"

WITHDRAW_OUTPUT=`yarn cli withdraw ${DEPOSIT_BALANCE_WETH} ${DEFAULT_ACCOUNT}`
echo "\n{$WITHDRAW_OUTPUT}\n"

echo "****************************************\n"
echo "\nTake a look at seller balance of WETH\n"
echo "****************************************\n"

SELLER_BALANCE_BEFORE=`yarn cli balances --account ${SELLER}`
echo "\n{$SELLER_BALANCE_BEFORE}\n"


echo "****************************************\n"
echo "\nSending ${DEPOSIT_BALANCE_WETH} to seller (${SELLER})\n"
echo "****************************************\n"

SEND_OUTPUT=`yarn cli send ${DEPOSIT_BALANCE_WETH} ${SELLER}`
echo "\n{$SEND_OUTPUT}\n"

echo "****************************************\n"
echo "\nCheck if seller balance went up by ${DEPOSIT_BALANCE_WETH}\n"
echo "****************************************\n"

SELLER_BALANCE_AFTER=`yarn cli balances --account ${SELLER}`
echo "\n{$SELLER_BALANCE_AFTER}\n"


echo "****************************************\n"
echo "\n            STAGE 1: END \n"
echo "****************************************\n"


echo "****************************************\n"
echo "\n            STAGE 2: Create the first sellOrder using the default account ${DEFAULT_ACCOUNT} \n"
echo "****************************************\n"

SELLORDER_OUTPUT=`truffle exec ./createSellOrder.js`
echo "\n{$SELLORDER_OUTPUT}\n"

echo "****************************************\n"
echo "\n            STAGE 2: END \n"
echo "****************************************\n"
