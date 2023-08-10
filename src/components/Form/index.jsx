import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [celu, setCelu] = useState("");
  const [cpf, setCpf] = useState("");
  const [ende, setEnde] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount || !name || !celu) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 0) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      name: name,
      desc: desc,
      amount: amount,
      celu: celu,
      cpf: cpf,
      ende: ende,
      expense: isExpense,
    };

    handleAdd(transaction);

    setCelu("");
    setName("");
    setDesc("");
    setCpf("");
    setEnde("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
      <C.InputContent>
          <C.Label>Nome</C.Label>
          <C.Input value={name} onChange={(e) => setName(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Serviço</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Celular</C.Label>
          <C.Input
            value={celu}
            onChange={(e) => setCelu(e.target.value)}
            type="number"
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>CPF</C.Label>
          <C.Input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="number"
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Endereço</C.Label>
          <C.Input value={ende} onChange={(e) => setEnde(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
