require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift reflect noise home harvest beach bone gentle'; 
let testAccounts = [
"0x4e8838c604b870418802f39988d8b4d31cc5779d63de3def04cdc238f48df1e8",
"0x7835d897fafda1a768ac1f9011e4ab4908fb722fceaf7b8099260b924cc57a59",
"0xf24c5cb352025bcbd0a546fc8899a8b993291cd220098828d9c453e2a8a44d68",
"0x9c4e40a92c241d9f96dff6ff0a2a08a73b3a06f1c8c765fd807373971e8b35c5",
"0xacaa443e8bb1850ca7f9a195cecf3480c3b2a0c34d35da3df970e185551fc2eb",
"0xf77a2e54352794b00d2f15e6af1c912687a6a8c58802cefebd3177b8376b71ec",
"0x64246a47ac924e42b576aebe29912647b994ad5962358f7fd58e848013c3b827",
"0x1543154f3996b0d7e7d22ffe7e2346a431f5fd166aebf01e570312baf6568742",
"0x8ec804989ef843c610c5e03293c46ac99be1604d7f776c882b3aab2ae225a8f2",
"0x89a7ae87a5b60c6002f46627c1fea9eff8c50b775b22897c35ef4f5cadc58e4e"
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
