import React, { useState } from "react";
import Form from "./Form"; 

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  estadoCivil: string;
  cpf: string;
  cidade: string;
  estado: string;
}

interface TableProps {
  data: Pessoa[];
  onEdit: (id: number, pessoa: Pessoa) => void;
  onDelete: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const handleEditClick = (id: number) => {
    setEditandoId(id);
  };

  const handleSave = (pessoa: Pessoa) => {
    onEdit(pessoa.id, pessoa);
    setEditandoId(null); // Sai do modo de edição
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Estado Civil</th>
          <th>CPF</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th id="action-section">Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pessoa) => (
          <tr key={pessoa.id}>
            {editandoId === pessoa.id ? (
              <td colSpan={7}>
                <Form
                  onSubmit={handleSave}
                  initialData={pessoa} // Passa os dados atuais para o Form
                />
              </td>
            ) : (
              <>
                <td>{pessoa.nome}</td>
                <td>{pessoa.idade}</td>
                <td>{pessoa.estadoCivil}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.cidade}</td>
                <td>{pessoa.estado}</td>
                <td id="action-buttons-container">
                  <button id="action-button" onClick={() => handleEditClick(pessoa.id)}>
                    Editar
                  </button>
                  <button id="action-button" onClick={() => onDelete(pessoa.id)}>
                    Excluir
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;