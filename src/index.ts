import {
  EAS,
  MerkleValue,
  PrivateData,
  SchemaEncoder,
} from "@ethereum-attestation-service/eas-sdk";
import { log } from "console";
import { ethers } from "ethers";

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

async function main() {
  try {
    // Gets a default provider (in production use something else like infura/alchemy)
    const provider = ethers.getDefaultProvider("sepolia");

    // Create a signer (you need to replace this with your actual private key or other signer method)
    const privateKey = "36984476625ea828ff676cf647185954b11b4d54bcb67b2502f9da97122aa5e5";
    const signer = new ethers.Wallet(privateKey, provider);

    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress);
    // Connects an ethers style provider/signingProvider to perform read/write functions.
    eas.connect(signer);

    // Create private data
    const values: MerkleValue[] = [
      { type: "string", name: "name", value: "Alice Johnson" },
      { type: "uint256", name: "age", value: 28 },
      { type: "bool", name: "isStudent", value: false },
      {
        type: "address",
        name: "wallet",
        value: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      },
      { type: "bytes32", name: "dataHash", value: ethers.id("confidential information") },
    ];

    const privateData = new PrivateData(values);
    const fullTree = privateData.getFullTree();
    //generating a multiproof
    const proofIndexes = [0, 2, 4]; // Proving name, isStudent, and dataHash
    const multiProof = privateData.generateMultiProof(proofIndexes);
    console.log("full merkle tree", fullTree);
    console.log("merkle toot", fullTree.root);
    console.log("multiproof", multiProof);

    const isValid = PrivateData.verifyMultiProof(fullTree.root, multiProof);
    console.log("Is Multi-Proof Valid?", isValid);

    // Create an attestation with the Merkle root
    const schemaEncoder = new SchemaEncoder("bytes32 privateData");
    const encodedData = schemaEncoder.encodeData([
      { name: "privateData", value: fullTree.root, type: "bytes32" },
    ]);

    // Private data schema
    const schemaUID =
      "0x20351f973fdec1478924c89dfa533d8f872defa108d9c3c6512267d7e7e5dbc2";

    const transaction = await eas.attest({
      schema: schemaUID,
      data: {
        recipient: "0x28c0579BAC08317300fe591d42Ed66fEfc7Efcd2",
        expirationTime: BigInt(0),
        revocable: true,
        data: encodedData,
      },
    });

    const newAttestationUID = await transaction.wait();

    console.log("New attestation UID:", newAttestationUID);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
