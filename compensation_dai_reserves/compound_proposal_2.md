**Background**  
This proposal seeks to compensate users affected by the [unexpected increase](https://www.comp.xyz/t/dai-liquidation-event/642) in the DAI price to $1.30 on Coinbase Pro on November 26th, 2020. A total of 85,222,475 DAI was repaid on 11/26/20. Applying the 8% liquidation penalty, this proposal would pay out a total of 6,817,798 DAI from the 16.4 million DAI in the market [reserve](https://compound.finance/markets/DAI).

Thank you to the Compound community and investors for the weeks of feedback, iteration and discussions that have helped craft this proposal.

**Code Mechanics**  
This proposal utilizes a slightly modified version of the  [merkle distributor](https://github.com/arr00/compound-compensation-proposal)  used for the airdrop of Uniswap’s UNI token. The merkle tree contains the [addresses of those affected](https://github.com/arr00/compound-compensation-proposal/blob/master/scripts/generateAddressBalances.js) by the liquidation event, and was reconciled and analyzed against on-chain data from around the time of the liquidation event (block bounds 11332733 to 11335286).

A relayer will claim the merkle drop for each wallet according to the distributor and distribute the DAI to user’s wallets. Users do not need to interact with any contract to claim this DAI.

[@arr00](https://www.comp.xyz/u/arr00)/[arr00](https://github.com/arr00/)  is the core contributor to the code.

**Next steps:**  If you support this proposal, you can delegate COMP to this autonomous proposal.

To view the full forum post, [see here](https://www.comp.xyz/t/proposal-distribute-dai-to-users-affected-by-dai-liquidations/2110).
