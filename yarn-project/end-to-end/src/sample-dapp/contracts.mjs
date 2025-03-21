// docs:start:imports
import { AztecAddress } from '@aztec/aztec.js';
import { Contract, loadContractArtifact } from '@aztec/aztec.js';
import TokenContractJson from "./contracts/token/target/token-Token.json" assert { type: "json" };

import { readFileSync } from 'fs';

// docs:end:imports

// docs:start:get-tokens
const TokenContractArtifact = loadContractArtifact(TokenContractJson);

export async function getToken(wallet) {
  const addresses = JSON.parse(readFileSync('addresses.json'));
  return Contract.at(AztecAddress.fromString(addresses.token), TokenContractArtifact, wallet);
}
// docs:end:get-tokens
