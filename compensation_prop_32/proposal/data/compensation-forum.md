**Compensation Plan**

**Objectives:**
Following the first [proposal](https://compound.finance/governance/proposals/31) to increase the DAI reserve factor with the goal of de-risking the DAI market and mitigating against future improper liquidations, this next step outlines the mechanics to compensate users for funds lost in the liquidation events of 11/26 by distributing 55,255 COMP (0.55% of total COMP supply) to affected users.

**Background:**

COMP distribution to users began on June 15, 2020, and has since distributed ~450K COMP, with approximately 4MM COMP remaining.

Behind the scenes, the distribution works through two main contracts, the [**Reservoir**](https://etherscan.io/address/0x2775b1c75658be0f640272ccb8c72ac986009e38), and the [**Comptroller**](https://etherscan.io/address/0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b). The **Reservoir** isan immutable contract that exists outside the control of governance and drips 0.50 COMP per block into the **Comptroller** contract. The Reservoir continuously adds COMP at the drip rate and is independent of the rate at which the Comptroller distributes such COMP. The Comptroller contract controls the usage and distribution rate of COMP for a number of functions including but not limited to, i) distribution to borrowers and lenders for each market, ii) [building a reserve](https://compound.finance/governance/proposals/21) that can be used for community needs, and iii) voting, among other uses.

Currently, the Comptroller distributes 0.352 COMP/block (70%) on liquidity incentives and accrues the remaining 0.148 COMP/block (30%) as treasury reserves. At the current COMP price of $155, Compound's treasury is growing at a rate of ~$149,000 per day, or $4.5MM per month.

[Gauntlet's prop30](https://compound.finance/governance/proposals/30) added the [ability](https://www.comp.xyz/t/compound-contributor-grants/756) for the Comptroller contract to send COMP to a particular user, group, address, or contract selected by a governance vote. These changes as [described by jmo](https://www.comp.xyz/t/compound-contributor-grants/756), enable a plethora of use cases, including the use of treasury assets to compensate those liquidated in the Thanksgiving Event, as [suggested by mrhen](https://www.comp.xyz/t/dai-liquidation-compensation/684/10).

**Mechanics:**

This proposal uses the `_grantComp` function introduced by Gauntlet to distribute a set quantity of COMP to a [Merkle distributor contract](https://github.com/kybx86/compound/tree/master/compensation_prop) that will automatically distribute the corresponding COMP to each of the [wallets](https://docs.google.com/spreadsheets/d/1ozVGA7mwn-xFQb1oAKsNczMRL-Dj9JgG_0UXH2IQ1s8/edit#gid=0) affected—user's don't need to interact with any contract to claim this COMP; After the proposal's execution, the relayer will claim COMP for each wallet according to the merkle distributor and distribute it.

To calculate the amount of COMP needed from the Comptroller for the compensation, this proposal uses the 14-day average closing price of COMP from [CoinMarketCap](https://coinmarketcap.com/currencies/compound/historical-data/) as of the time of writing (12/8/20) to compensate users 8% of the liquidated amount.

As an _illustrative example_, if a wallet had 100 DAI repaid by a liquidator, then that wallet would receive 8 DAI worth of COMP, which equates to 0.064 COMP of compensation (assuming a 14-day average COMP price of $125).

**Distributor Methodology**

Using the DAI liquidations [spreadsheet](https://docs.google.com/spreadsheets/d/1ozVGA7mwn-xFQb1oAKsNczMRL-Dj9JgG_0UXH2IQ1s8/edit#gid=0) published by [rleshner](https://twitter.com/rleshner), a total of 85,220,406.43 DAI was repaid on 11/26/20. Applying the 8% liquidation penalty, this proposal would pay out a total of 6,817,632.51 DAI (in COMP). Taking the 6,817,632.51 DAI and dividing by $123.39 (the 14-day average price of COMP) equals 55,254.95 COMP distributed to users. Numbers here:

![Screen Shot 2020-12-09 at 08.30.59|690x350, 75%](upload://ecqgB0Ts3FlA7eNORGJ8lQUyLDj.png) 

To preview the COMP distribution per address, [see here](https://github.com/kybx86/compound/blob/master/compensation_prop/generateAddressBalances/addressBalancesDecimal.json). 

Overall, this distribution of COMP represents only 0.55% of the fully diluted COMP 10M supply and less than 2% of the 24hr COMP volume traded globally, suggesting minimal market impact. Additionally, assuming the Comptroller earns 962 COMP per day, the 55k COMP distribution will be replenished in less than 60 days.

I propose proceeding with this approach for the following reasons:

1. **Compensate users who lost funds:** This proposal achieves the objective of compensating users who lost funds due to the abnormal DAI price action that took place on Coinbase, which reflected an [off-mark DAI price relative to the other exchanges](https://www.comp.xyz/t/dai-liquidation-event/642/36?u=kybx86) and liquidity venues, as noted by members of the community. 
![d06192d870bf08faa13faf77b6590a97eb635161_2_624x367|624x367, 75%](upload://2v1fUJREgQK4CbqC59BKkZ8e2i.jpeg) 

1. **Restore borrower confidence:** [Based on forum discussions](https://www.comp.xyz/t/dai-liquidation-event/642), it seems that the community believes that the liquidations were not in the spirit of how the Compound protocol should have affected users given the off-mark price of DAI. Community members and borrowers have expressed their frustration in the [forums](https://www.comp.xyz/t/dai-liquidation-compensation/684/42) and [suggested compensation](https://www.comp.xyz/t/dai-liquidation-compensation/684/19).
2. **Achievable:** While the community acknowledges that the exact dollar value impact of the liquidation event varies per user, with feedback from core Compound contributors, this approach executes an achievable, straightforward, and timely compensation resolution rather than constructing an overly complex approach that would look to compensate an exact amount. This proposal is a Pareto optimal solution.
3. **Parameter choice:** The 14-day average price is a middle ground between the COMP price of 2 weeks ago and the current spot prices. Backdating a price too long, and it gives affected users COMP at an unfair discount relative to the current spot prices. Too recent could lead to material differences by the time the proposal goes live after the CAP, voting, and queuing period.
4. **Relatively small distribution:** This proposal would not inflate the COMP supply and simply [allocates existing COMP](https://www.comp.xyz/t/dai-liquidation-compensation/684/46?u=kybx86) in the Comptroller to affected users, as noted by @rleshner. The distribution represents a very small % of the total COMP supply (0.55%).

**Next steps:**

If you support this proposal, please delegate COMP to this autonomous proposal to:

**[address here]**

**Disclosure:**

For full transparency, I was one of the 121 Compound users affected in the DAI liquidation event. I recently worked with the community to pass a [reserve factor change](https://www.comp.xyz/t/increase-dai-reserve-factor-from-5-to-15/765/3) to the DAI market to de-risk it and prevent repeat events.