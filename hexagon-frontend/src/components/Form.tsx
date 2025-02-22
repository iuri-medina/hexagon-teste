import React, { useState, useEffect } from "react";

const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

const validateCPF = (cpf: string) => {
  const cleanedCPF = cpf.replace(/\D/g, "");
  if (cleanedCPF.length !== 11 || /^(\d)\1{10}$/.test(cleanedCPF)) return false;
  let sum = 0,
    remainder;
  for (let i = 1; i <= 9; i++) sum += parseInt(cleanedCPF[i - 1]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder !== parseInt(cleanedCPF[9])) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cleanedCPF[i - 1]) * (12 - i);
  remainder = (sum * 10) % 11;
  return remainder === parseInt(cleanedCPF[10]);
};

const capitalizeWords = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Form = ({ onSubmit, initialData }: any) => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    estadoCivil: "",
    cpf: "",
    cidade: "",
    estado: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Função para limpar o formulário
  const clearForm = () => {
    setFormData({
      nome: "",
      idade: "",
      estadoCivil: "",
      cpf: "",
      cidade: "",
      estado: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateCPF(formData.cpf)) {
      alert("Por favor, preencha um CPF válido.");
      return;
    }
    await onSubmit(formData); // Aguarda a conclusão da função onSubmit
    clearForm(); // Limpa o formulário após o envio
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) =>
          setFormData({ ...formData, nome: capitalizeWords(e.target.value) })
        }
      />
      <input
        type="number"
        placeholder="Idade"
        value={formData.idade}
        onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
      />
      <select
        name="estadoCivil"
        value={formData.estadoCivil}
        onChange={(e) =>
          setFormData({ ...formData, estadoCivil: e.target.value })
        }
      >
        <option value="" disabled>
          Estado Civil
        </option>
        <option value="Solteiro(a)">Solteiro(a)</option>
        <option value="Casado(a)">Casado(a)</option>
        <option value="Divorciado(a)">Divorciado(a)</option>
        <option value="Viuvo(a)">Viúvo(a)</option>
      </select>
      <input
        type="text"
        placeholder="CPF"
        value={formatCPF(formData.cpf)}
        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
        maxLength={14}
      />
      <input
        type="text"
        placeholder="Cidade"
        value={formData.cidade}
        onChange={(e) =>
          setFormData({ ...formData, cidade: capitalizeWords(e.target.value) })
        }
      />
      <select
        name="estado"
        value={formData.estado}
        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
      >
        <option value="" disabled>
          Estado
        </option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minhas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Form;