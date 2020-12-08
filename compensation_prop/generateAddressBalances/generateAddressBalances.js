const Web3 = require('web3');
const fs = require('fs');

const wssUrl = process.env.WSS_URL
if(wssUrl == undefined) {
	throw new Error('WSS_URL env must be set');
}
const web3 = new Web3(wssUrl);
const daiAbi = JSON.parse(fs.readFileSync('generateAddressBalances/cDAI.abi'));
const cDAI = new web3.eth.Contract(daiAbi,"0x5d3a536e4d6dbd6114cc1ead35777bab948e3643");

const FROM_BLOCK = 11332733;
const TO_BLOCK = 11335286;
const COMP_VALUE = BigInt(100e18);
// DAI VALUE ASSUMED $1 USD


async function getLiquidatedAddresses() {
	let effectedAddresses = {};
	let totalOwed = 0n;
	await cDAI.getPastEvents("LiquidateBorrow",{fromBlock: FROM_BLOCK, toBlock:TO_BLOCK}, function(error,events) {
		for(let i = 0; i < events.length; i++) {
			const event = events[i];
			if(event != null && event != undefined) {
				totalOwed = totalOwed + BigInt((event["returnValues"]["repayAmount"])) * 8n / 100n;
				if(effectedAddresses[event["returnValues"]["borrower"]] == undefined) {
					effectedAddresses[event["returnValues"]["borrower"]] = BigInt((event["returnValues"]["repayAmount"])) * 8n / 100n;
				}
				else {
					effectedAddresses[event["returnValues"]["borrower"]] = BigInt((event["returnValues"]["repayAmount"])) * 8n / 100n + effectedAddresses[event["returnValues"]["borrower"]]; 
				}
				
			}
		}
	});
	return [effectedAddresses, totalOwed];

}

async function interact() {
	let effectedAddresses;
	let totalOwed;

	[effectedAddresses, totalOwed] = await getLiquidatedAddresses();
	let compOwed = {};
	let totalCompOwed = 0n;
	for(let add in effectedAddresses) {
		compOwed[add] = effectedAddresses[add] * BigInt(1e18) / COMP_VALUE;
		totalCompOwed += effectedAddresses[add] * BigInt(1e18) / COMP_VALUE;
	}

	for(let add in compOwed) {
		compOwed[add] = compOwed[add].toString(16);
	}
	fs.writeFileSync('generateAddressBalances/addressBalances.json', JSON.stringify(compOwed));
	console.log('Address balances succesfully written to generateAddressBalances/addressBalances.json')
	process.exit();
}

interact();


