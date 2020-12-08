Proposal to Increase DAI Reserve Factor from 5% to 15%

**Objectives**

I am working on a series of proposals to 1) [reduce the risk in the cDAI market](https://www.comp.xyz/t/dai-market-risk/688), and 2) compensate users who were impacted in the [DAI liquidation event](https://www.comp.xyz/t/dai-market-risk/688). I am working with active community members, stakeholders, and users of the protocol to enact these changes.

**Reserve Factor Overview**

The [Reserve Factor](https://compound.finance/docs/ctokens#total-reserves) in Compound is the parameter that represents the percentage of the interest paid by borrowers that accrue to that cToken's Reserve Pool. The Reserve Pool protects lenders against borrower default.

**Raising the Reserve Factor for DAI from 5% to 15%**

Following the [DAI liquidation event](https://www.comp.xyz/t/dai-market-risk/688), many community members have [voiced](https://www.comp.xyz/t/dai-liquidation-event/642/2) concerns regarding the [state of the DAI market on Compound](https://www.comp.xyz/t/dai-market-risk/688): the cDAI market accounts for 47% of all of the assets on Compound and exceeds the total DAI in circulation by 590M, denoting the over-concentrated and over-levered risk in DAI market. Various changes have been proposed including a [revamp](https://www.comp.xyz/t/proposal-to-integrate-chainlink-price-feeds/685/7) of the oracle system. In the interim, given the additional time and discussion needed for a new oracle system and/or liquidation mechanics, adjusting existing parameters such as the reserve factor can immediately start to de-risk the DAI market.

I propose raising the DAI reserve factor from 5% to 15% for the following reasons:

1. **De-risk the DAI market:** A higher reserve factor would decrease the economics of recursively borrowing DAI and in turn reduce the concentration, leverage, and risk of the DAI market.
2. **Increase DAI reserves:** This would help build additional reserves as a safety measure for Compound and its user-base.
3. [**Standardize Reserve Factors:**](https://www.comp.xyz/t/reserve-factor-standardization/608)The reserve factors across stablecoin markets are inconsistent. For example, USDC which has a fixed price of $1.0, has the same 5% reserve factor as DAI, a stablecoin with relatively higher price volatility. A higher reserve factor would adequately move borrow/lend activity from higher-risk assets to lower risk assets to improve the overall protocol risk profile. I've consulted with various active participants and believe that a 15% reserve factor is adequate, since a 10% reserve factor may not be enough to de-risk the market, and 20% may be overly aggressive.
4. **Relatively quick change to improve security:** Adjusting the DAI reserve factor requires no changes to the contracts. Ideally, a reserve factor change would be the first of many changes to improve the security of Compound.

The community has already signaled a strong interest in raising the reserve factor through a [forum poll](https://www.comp.xyz/t/dai-market-risk/688).

**Next Steps**
If you support this change, please delegate COMP to this Autonomous Proposal.


**Disclosure**
For full transparency, I was one of the 142 Compound users affected in the DAI liquidation event. I am also currently working on a compensation plan for users affected which I will be sharing in the forums next week.