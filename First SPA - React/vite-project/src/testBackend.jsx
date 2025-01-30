import { useEffect, useState } from "react";
import axios from "axios";

function TestBackend() {
    const [array, setArray] = useState([]);

    const fetchAPI = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api");
            setArray(response.data.map(item => item.NOME));
            console.log(response.data.map(item => item.NOME));
        } catch (error) {
            console.error("Erro ao buscar API:", error);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div>
            {array.map((fruit, index) => (
                <div key={index}>
                    <p>{fruit}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default TestBackend;
