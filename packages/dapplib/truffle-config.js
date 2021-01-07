require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food render rifle sad smart include ensure slot giant'; 
let testAccounts = [
"0xbfdaf67bd3906f3a284e6f7e878f0119383a74a430701f4ec561ef0196bd3e68",
"0x39e5647bda208d9580180f01cb0ce0a4114c0d3ef63b0a2e16756873a62a7fcd",
"0xd9e8b2b18b0330d4f01a6beac71f59e3094c6a3b85cd2be1b57660acd9b21729",
"0x0936535a55414d0b2b00b0fedcba937817bd06623d5897763d84c8d6cf5b23e1",
"0x0d7fd4b1f4f06bb06039ca1bc0814ef3982833bff637b0a19d579c817bd3afae",
"0xc72ade111c9dfdc726b58efc8c671120b1dbe3fc3aa7742263b0fd880064bd1d",
"0xac4fcd69b8267175c62613e45f42000d477d21c5bc7a662ef83112a3b478e3b0",
"0xace19482f632eaec187027efb56df2f535c9912a0143362b08d0fde157d6aad1",
"0xfaf5b4c93c78982548ba17155c6c36ed3f649c198690d4cfb98b1307620d7579",
"0xf50af1977884c417e22a2aed1a384307acbb3010df2692948d9bd88eff83addf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
