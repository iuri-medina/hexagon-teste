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
    const [currentPage, setCurrentPage] = useState(1); // Página atual
    const [pageSize, setPageSize] = useState(10); // Itens por página

    // Carregar os dados na inicialização e ao mudar a página
    useEffect(() => {
        fetchData(currentPage, pageSize).then(setData);
    }, [currentPage, pageSize]);

    // Função para mudar de página
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div id="logo-container">
                <img src={logotipo} width="50" alt="logotipo empresa"></img>
                <h1>Teste Hexagon</h1>
            </div>
            <Form onSubmit={addItem} />
            <Table data={data} onEdit={updateItem} onDelete={deleteItem} />

            {/* Controles de Paginação */}
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={data.length < pageSize} // Desabilita se não houver mais dados
                >
                    Próxima
                </button>
            </div>
        </div>
    );
};

export default Home;