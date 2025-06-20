import { useState } from "react";
import { useScaffoldWriteContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { encodeAbiParameters, parseAbiParameters, bytesToHex, keccak256 } from "viem";

export const EspressoIntegration = () => {
  const [payload, setPayload] = useState("");
  const [txHash, setTxHash] = useState<`0x${string}`>("0x");
  const [blockNumber, setBlockNumber] = useState<number>(0);

  const { writeContractAsync } = useScaffoldWriteContract({
    contractName: "EspressoIntegration",
    disableSimulate: true,
  });

  const { data: isProcessed } = useScaffoldReadContract({
    contractName: "EspressoIntegration",
    functionName: "isTransactionProcessed",
    args: [txHash],
  });

  const { data: lastProcessedBlock } = useScaffoldReadContract({
    contractName: "EspressoIntegration",
    functionName: "lastProcessedBlock",
  });

  const handleSubmit = async () => {
    try {
      const bytes = new TextEncoder().encode(payload);
      const encodedPayload = encodeAbiParameters(
        parseAbiParameters("bytes"),
        [bytesToHex(bytes)]
      );
      const result = await writeContractAsync({
        functionName: "submitTransaction",
        args: [encodedPayload],
      });
      if (result) {
        setTxHash(result);
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const handleProcessBlock = async () => {
    try {
      const newBlockNumber = BigInt(lastProcessedBlock || 0) + BigInt(1);
      const blockHash = keccak256(new TextEncoder().encode(`block-${newBlockNumber}`));
      await writeContractAsync({
        functionName: "processBlock",
        args: [newBlockNumber, blockHash],
      });
      setBlockNumber(Number(newBlockNumber));
    } catch (error) {
      console.error("Error processing block:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Transaction Payload</span>
        </label>
        <input
          type="text"
          placeholder="Enter payload"
          className="input input-bordered w-full"
          value={payload}
          onChange={e => setPayload(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Transaction
      </button>

      {txHash !== "0x" && (
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="text-lg font-bold mb-2">Transaction Details</h3>
          <p className="mb-2">Transaction Hash: {txHash}</p>
          <p className="mb-2">Status: {isProcessed ? "✅ Processed" : "⏳ Pending"}</p>
          <p className="mb-2">Last Processed Block: {lastProcessedBlock?.toString() || "0"}</p>
          
          <div className="mt-4">
            <button 
              className="btn btn-secondary" 
              onClick={handleProcessBlock}
              disabled={isProcessed}
            >
              Process Next Block (Simulate Sequencer)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 