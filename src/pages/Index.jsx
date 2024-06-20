import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = () => {
    if (description && amount) {
      setTransactions([...transactions, { description, amount: parseFloat(amount) }]);
      setDescription("");
      setAmount("");
    }
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Transaction Tracker</Text>
        <HStack width="100%">
          <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <IconButton aria-label="Add Transaction" icon={<FaPlus />} onClick={addTransaction} />
        </HStack>
        <VStack spacing={2} width="100%">
          {transactions.map((transaction, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
              <Box>
                <Text>{transaction.description}</Text>
                <Text>${transaction.amount.toFixed(2)}</Text>
              </Box>
              <IconButton aria-label="Delete Transaction" icon={<FaTrash />} onClick={() => deleteTransaction(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
