import React, { useState, useEffect } from "react";

interface PatientInterface {
  id: number;
  name: string;
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<PatientInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Simuler un appel API
  useEffect(() => {
    setTimeout(() => {
      setPatients([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bon" },
        { id: 3, name: "Charlie" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  // Afficher un message à chaque modif iation des patients
  useEffect(() => {
    if (!loading) {
      console.log("La liste des patients a été mise à jour");
    }
  }, [loading, patients]);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Liste des patients</h1>
      <input
        type="text"
        placeholder="Rechercher un patient"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <p>Chargement des patients...</p>
      ) : (
        <ul>
          {filteredPatients.map((patient) => (
            <li key={patient.id}>{patient.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;
