// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title EspressoIntegration
 * @dev A contract that demonstrates integration with Espresso Systems
 */
contract EspressoIntegration is Ownable {
    // Events
    event TransactionSubmitted(bytes32 indexed txHash, uint256 timestamp);
    event BlockReceived(uint256 blockNumber, bytes32 blockHash);
    event BlockProcessed(uint256 blockNumber, bytes32 blockHash);

    // State variables
    mapping(bytes32 => bool) public processedTransactions;
    uint256 public lastProcessedBlock;

    constructor(address initialOwner) Ownable(initialOwner) {
        lastProcessedBlock = 0;
    }

    /**
     * @dev Submit a transaction to Espresso's sequencer
     * @param payload The transaction payload to submit
     * @return txHash The hash of the submitted transaction
     */
    function submitTransaction(bytes memory payload) external returns (bytes32) {
        bytes32 txHash = keccak256(abi.encodePacked(payload, block.timestamp));
        processedTransactions[txHash] = true;
        
        emit TransactionSubmitted(txHash, block.timestamp);
        return txHash;
    }

    /**
     * @dev Process a block from Espresso's sequencer
     * @param blockNumber The block number
     * @param blockHash The hash of the block
     */
    function processBlock(uint256 blockNumber, bytes32 blockHash) external {
        require(blockNumber > lastProcessedBlock, "Block already processed");
        lastProcessedBlock = blockNumber;
        emit BlockProcessed(blockNumber, blockHash);
    }

    /**
     * @dev Check if a transaction has been processed
     * @param txHash The transaction hash to check
     * @return bool Whether the transaction has been processed
     */
    function isTransactionProcessed(bytes32 txHash) external view returns (bool) {
        return processedTransactions[txHash];
    }
} 