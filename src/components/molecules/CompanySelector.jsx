import { useState } from "react";
import Button from "../atoms/Button";

function CompanySelector() {

    const [selectedCompany, setSelectedCompany] = useState("1ª Compañía");
    const [volunteers, setVolunteers] = useState("");
    const [selectedCompanies, setSelectedCompanies] = useState([]);

    const companies = [
        "1ª Compañía",
        "2ª Compañía",
        "3ª Compañía",
        "4ª Compañía",
        "5ª Compañía",
        "6ª Compañía",
        "7ª Compañía",
        "8ª Compañía",
        "9ª Compañía",
        "10ª Compañía",
        "11ª Compañía",
        "12ª Compañía",
        "13ª Compañía",
        "14ª Compañía",
        "15ª Compañía",
        "16ª Compañía",
        "17ª Compañía",
        "18ª Compañía",
        "19ª Compañía",
        "20ª Compañía",
        "21ª Compañía",
        "22ª Compañía",
        "Oficiales Generales",
        "Comandancia"
    ];

    function addCompany() {
        const alreadyExists = selectedCompanies.some(
            (item) => item.company === selectedCompany
        );

        if (alreadyExists) {
            alert("Esta compañía ya fue agregada.");
            return;
        }

        const newCompany = {
            company: selectedCompany,
            volunteers: volunteers
        };

        setSelectedCompanies([...selectedCompanies, newCompany]);

    }

    function removeCompany(index) {
        const newCompanies = selectedCompanies.filter(
            (_, i) => i !== index
        );

        setSelectedCompanies(newCompanies);
        
    }

    return (
        <>
            <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
            >
                {companies.map((company) => (
                    <option key={company} value={company}>
                        {company}
                    </option>
                ))}
            </select>

            <label>
                Voluntarios:
                <input
                    type="number"
                value={volunteers}
                onChange={(e) => setVolunteers(e.target.value)}
                />
            </label>

            <Button onClick={addCompany}>
                Agregar
            </Button>

            <ul>
                {selectedCompanies.map((item, index) => (
                    <li key={index}>
                        {item.company} - {item.volunteers} voluntarios
                        <Button onClick={() => removeCompany(index)}>
                            Eliminar
                        </Button>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default CompanySelector;