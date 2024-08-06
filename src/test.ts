import {
  EAS,
  MerkleValue,
  PrivateData,
  SchemaEncoder,
} from "@ethereum-attestation-service/eas-sdk";

const full = "0x4933e6479e07156f0974981f11c8b733921f5b8383ad675f28b42f934b0858f1";
const multiProof = {
  leaves: [
    {
      type: "bool",
      name: "isStudent",
      value: false,
      salt: "0x89b5e80500dd505dc6389b4eb997277ec8f143a9922ff7bc2e9e9ec0f7fc5a48",
    },
    {
      type: "bytes32",
      name: "dataHash",
      value: "0xa16d1dd997cfcb878a023580020c74ac728ae7ed5d8fac6a27b63ac178e7ca9b",
      salt: "0x9e07cca02fe15ea95e39e2273c3404968b6aa7e5bfa842bc19a00c81a758e4ce",
    },
    {
      type: "string",
      name: "name",
      value: "Alice Johnson",
      salt: "0x266d045f778cea8b550fcf0b4c9951b15836ae895e399388721d99b964b16d1e",
    },
  ],
  proof: [
    "0x0d2304df34d5444c669217aab066bbf29aae0fdea04fc1fa6c7039854f887267",
    "0x84d80096af58907b7c47bd10444a475ae407fc66037e5794e363eddb811044c5",
  ],
  proofFlags: [false, false, true, true],
};

const isValid = PrivateData.verifyMultiProof(full, multiProof);
console.log("Is Multi-Proof Valid?", isValid);
