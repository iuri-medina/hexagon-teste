const API_URL = "http://localhost:5281/api/pessoa";
export async function fetchData() {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log("Dados recebidos:", data); // Verifica o formato no console
    return data;
  }

export async function addItem(item: any): Promise<any> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar item");
  }

  return await response.json(); // Retorna os dados da nova pessoa criada
}

  
  export async function updateItem(id: number, item: any) {
    console.log("Atualizando item:", id, item);
  
    if (!id) {
      console.error("Erro: ID inválido ao tentar atualizar o item.");
      return;
    }
  
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
  
    if (!response.ok) {
      console.error("Erro ao atualizar o item:", response.statusText);
    } else {
      console.log("Item atualizado com sucesso!");
    }
  }
  
  
export async function deleteItem(id: number) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}