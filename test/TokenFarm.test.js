// const DaiToken = artifacts.require('DaiToken')
// const DappToken = artifacts.require('DappToken')
// const TokenFarm = artifacts.require('TokenFarm')

// require('chai')
// 	.use(require('chai-as-promised'))
// 	.should()

// function tokens(n){
// 	return web3.utils.toWei(n, 'ether');
// }

// contract('TokenFarm', ([owner, investor]) => {
// 	let daiToken, dappToken, tokenFarm;

// 	before(async () => {
// 		daiToken = await DaiToken.new()
// 		dappToken = await DappToken.new()
// 		tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)

// 		await dappToken.transfer(tokenFarm.address, tokens('1000000'))

// 		await daiToken.transfer(investor, tokens('100'), { from: owner })
// 	})

// 	// describe('Mock DAI deployment', async () => {
// 	// 	it('has a name', async () => {
// 	// 		const name = await daiToken.name()
// 	// 		assert.equal(name, 'Mock DAI Token')
// 	// 	})
// 	// })

// 	// describe('Dapp Token deployment', async () => {
// 	// 	it('has a name', async () => {
// 	// 		const name = await dappToken.name()
// 	// 		assert.equal(name, 'DApp Token')
// 	// 	})
// 	// })	

// 	// describe('Token Farm deployment', async () => {
// 	// 	it('has a name', async () => {
// 	// 		const name = await tokenFarm.name()
// 	// 		assert.equal(name, 'Dapp Token Farm')
// 	// 	})
// 	// })

// 	// describe('Has tokens', async () => {
// 	// 	it('has a name', async () => {
// 	// 		let balance = await dappToken.balanceOf(tokenFarm.address)
// 	// 		assert.equal(balance.toString(), tokens('1000000'))
// 	// 	})
// 	// })

// 	// describe('stacking test', async () => {
// 	// 	it('has a stack', async () => {
// 	// 		let result, invBalance, farmBalance;

// 	// 		// Checking Investor balance before Stacking
// 	// 		result = await daiToken.balanceOf(investor);
// 	// 		assert.equal(result.toString(), tokens('100'), 'investors balance is correct');

// 	// 		// Stack Dai Tokens 
// 	// 		await daiToken.approve(tokenFarm.address, tokens('100'), {from: investor});
// 	// 		await tokenFarm.stakeTokens(tokens('100'), {from: investor});

// 	// 		// Check stacking result
// 	// 		result = await daiToken.balanceOf(investor);
// 	// 		assert.equal(result.toString(), tokens('0'), 'investor dai wallet balance correct');

// 	// 		result = await daiToken.balanceOf(tokenFarm.address);
// 	// 		assert.equal(result.toString(), tokens('100'), 'farm dai wallet balance correct');

// 	// 		result = await tokenFarm.stakeAmount(investor);
// 	// 		assert.equal(result.toString(), tokens('100'), 'investor stacking balance correct');

// 	// 		result = await tokenFarm.isStaking(investor);
// 	// 		assert.equal(result.toString(), 'true', 'investor stacking status correct after stacking');

// 	// 	})
// 	// })

// })
