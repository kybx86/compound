
**BACKGROUND**
On November 26th, 2020 an  [unexpected increase](https://www.comp.xyz/t/dai-liquidation-event/642) in the DAI price to $1.30 on Coinbase Pro led to 85.2 million in DAI being liquidated. An initial compensation proposal for that event did not pass an  [executive vote](https://compound.finance/governance/proposals/32), with 680k COMP voting against and 212k COMP voting for.

Since the original proposal, there have been positive  [changes in Compound’s oracle system](https://compound.finance/governance/proposals/47)  and improvements in the state of the DAI market’s reserves. The oracle fix and the increased DAI reserves address  [three key issues](https://www.comp.xyz/t/compensation-proposal-distribute-comp-to-affected-users-in-the-dai-liquidations/801/45)  voiced by the community with the previous compensation proposal:

1.  Reimbursement to users before clarity on when/how the underlying issue would be fixed.
2.  Reimbursement denominated in COMP to affected users may not necessarily align with the objectives of COMP usage or COMP holders.
3.  Setting a precedent that tail-risk events should be subsidized with COMP.

Today, the 16.4 million DAI in  [reserves](https://compound.finance/markets/DAI)  is sufficient to cover the November 26th losses as originally calculated in full. The total expected compensation amount is approximately 6.8 million DAI based on the protocol’s 8% liquidation penalty. Compensation is well within the capabilities of Compound governance today and will help give closure to a topic that’s still a point of ongoing discussion in the community and allow the protocol to move forward on stronger footing.

**CODE MECHANICS**  
This proposal utilizes a slightly modified version of the  [merkle distributor](https://github.com/arr00/compound-compensation-proposal)  used for the airdrop of Uniswap’s UNI token. The merkle tree contains the addresses of those affected by the liquidation event, and was reconciled and analyzed against on-chain data from around the time of the liquidation event. A relayer will claim the merkle drop for each wallet according to the distributor and distribute the DAI to user’s wallets. Users do not need to interact with any contract to claim this DAI.

The [script to generate the affected addresses list](https://github.com/arr00/compound-compensation-proposal/blob/master/scripts/generateAddressBalances.js)  (and distribute DAI to them) fetches the liquidation transactions which repaid DAI within the given block bounds (11332733 to 11335286). The  [repaid DAI is multiplied by 0.08 to attain the liquidation fee](https://github.com/arr00/compound-compensation-proposal/blob/master/scripts/generateAddressBalancesDecimal.js)  incurred by the affected address. If a wallet had 100 DAI repaid by a liquidator, then that wallet would receive 8 DAI as part of this compensation proposal.

Full coverage is ensured through  [unit testing](https://github.com/arr00/compound-compensation-proposal/blob/master/test/MerkleDistributor.spec.ts),  [forking simulation](https://github.com/arr00/compound-compensation-proposal/blob/master/test/ForkingCompenstionSimulation.spec.ts)  and a testrun of the whole proposal process on  [testnet](https://kovan.etherscan.io/tx/0x9ef701e33c395df0de202a03b33a01cf975a92429c47a95fe1db3dfe3581aa6b). [@arr00](https://www.comp.xyz/u/arr00)/[arr00 ](https://github.com/arr00/)  is the core contributor to the code.

**DISTRIBUTION METHODOLOGY**  
Referencing the DAI liquidations [spreadsheet](https://docs.google.com/spreadsheets/d/1ozVGA7mwn-xFQb1oAKsNczMRL-Dj9JgG_0UXH2IQ1s8/edit#gid=0)  published by  [@rleshner](https://www.comp.xyz/u/rleshner), a total of 85,220,406.43 DAI was repaid on 11/26/20. Applying the 8% liquidation penalty, this proposal would pay out a total of 6,817,632.51 DAI.

To preview the DAI distribution per address,  [see here](https://github.com/arr00/compound-compensation-proposal/blob/master/merkle-root/addressBalancesDecimal.json).

**Next steps:**  If you support this proposal, you can delegate COMP to this autonomous proposal.

Thank you to the Compound community and investors for the weeks of feedback, iteration and discussions that have helped craft this proposal.
