import React, { useState } from "react";

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
  const [pessoaEditada, setPessoaEditada] = useState<Pessoa | null>(null);

  // Quando clicar em "Editar", ativa o modo de edição e preenche os inputs
  const handleEditClick = (pessoa: Pessoa) => {
    setEditandoId(pessoa.id);
    setPessoaEditada({ ...pessoa });
  };

  // Atualiza os valores enquanto o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (pessoaEditada) {
      setPessoaEditada({
        ...pessoaEditada,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Salvar edição e enviar à API
  const handleSaveClick = () => {
    if (pessoaEditada) {
      onEdit(pessoaEditada.id, pessoaEditada);
      setEditandoId(null); // Sai do modo de edição
    }
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
              <>
                <td>
                  <input
                    type="text"
                    name="nome"
                    value={pessoaEditada?.nome || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="idade"
                    value={pessoaEditada?.idade || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <select
                    name="estadoCivil"
                    value={pessoaEditada?.estadoCivil || ""}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Escolher Estado Civil
                    </option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viuvo(a)">Viúvo(a)</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="cpf"
                    value={pessoaEditada?.cpf || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="cidade"
                    value={pessoaEditada?.cidade || ""}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="estado"
                    value={pessoaEditada?.estado || ""}
                    onChange={handleChange}
                  />
                </td>
              </>
            ) : (
              <>
                <td>{pessoa.nome}</td>
                <td>{pessoa.idade}</td>
                <td>{pessoa.estadoCivil}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.cidade}</td>
                <td>{pessoa.estado}</td>
              </>
            )}
            <td id="action-buttons-container">
              {editandoId === pessoa.id ? (
                <button id="action-button" onClick={handleSaveClick}>Salvar</button>
              ) : (
                <button id="action-button" onClick={() => handleEditClick(pessoa)}>Editar</button>
              )}
              <button id="action-button" onClick={() => onDelete(pessoa.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
