---
sidebar_position: 1
---

# Getting Started

Get started by **creating a new contract**.

### What you'll need

- [Phantom Wallet](https://phantom.app/):
  - It's our wallet of choice, and there's an app!
- Some Tokens to send!
  - Currently for v1, we only support the Wrapped Sol Token
  - For ease of use, we wrap the Sol for you, so you just have to have Sol in your wallet
  - If you're testing with Devnet, [airdrop](https://solfaucet.com/) yourself some Sol
- The Public Key of the wallet you're going to send tokens to
  - This can be another wallet you own, a friend's wallet or someone else's wallet
  - **It can't be the same Public Key of the wallet you're connected with**

## Create a DaPP Payment Contract

Visit [DaPP](https://dapp-frontend-cyan.vercel.app/)

Connect your **Phantom Wallet**

![Connect Phantom Wallet](/img/tutorial/select_wallet.png)

Select **Create Contract**

![Create Contract](/img/tutorial/create_a_contract.png)

Enter your payment terms in the form and submit. You'll need to know.

- Who you're paying
  - The `Public Key` of the person you're going to pay
- What token you'll be paying with
  - By default it's going to be `Wrapped Sol`
- How much you're paying
  - This is the standard denomination of value for the token.
  - To get technical, this is number is multiplied by `10^(decimals)` to calculate the total `amount` of tokens to send
  - eg. `1` = `1 Sol` which is equivalent to `1,000,000,000` lamports because it has `9` decimals
- How much time the contract should be open for
  - This is determined in `days` to make it easy. If you want to pay someone within the day, you can use decimals to denote this.
  - eg. 6 hours = `.25` days. 1 year is `365` days. etc..
- How many payments should the payee receive
  - Payments are how many times the payee can get paid from the main escrow account to their custodial token account
  - Payments are equally distanced between time intervals
  - eg. `7` payments for a `7 day` time period means the payee can withdraw `once a day`

Press submit and you're done!<br />
You can still cancel this contract after it's created for free - given the payee has not accepted it yet.
