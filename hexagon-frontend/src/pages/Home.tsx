import { useEffect, useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import { fetchData, addItem, updateItem, deleteItem } from "../services/api";
import "../styles.css";
import logotipo from "../assets/logotipo.png";

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  estadoCivil: string;
  cpf: string;
  cidade: string;
  estado: string;
}

const Home = () => {
  const [data, setData] = useState<Pessoa[]>([]);

  // Carregar os dados na inicialização
  useEffect(() => {
    fetchData().then(setData);
  }, []);

  // Atualizar os dados na tabela após adicionar um novo item
  const handleAddItem = async (pessoa: Pessoa) => {
    try {
      const newPessoa = await addItem(pessoa);
      if (newPessoa) {
        setData((prevData) => [...prevData, newPessoa]); // Atualiza a tabela sem recarregar
      }
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
    }
  };

  // Atualizar os dados na tabela após editar um item
  const handleUpdate = async (id: number, pessoa: Pessoa) => {
    try {
      await updateItem(id, pessoa);
      setData((prevData) =>
        prevData.map((p) => (p.id === id ? { ...pessoa } : p)) // Atualiza os dados no estado
      );
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
    }
  };

  // Atualizar os dados na tabela após excluir um item
  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id);
      setData((prevData) => prevData.filter((p) => p.id !== id)); // Remove o item da tabela sem recarregar
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };

  return (
    <div>
      <div id="logo-container">
        <img src={logotipo} width="50" alt="logotipo empresa"></img>
        <h1>Teste Hexagon</h1>
      </div>
      <Form onSubmit={handleAddItem} />
      <Table data={data} onEdit={handleUpdate} onDelete={handleDelete} />
      </div>
  );
};

export default Home;
