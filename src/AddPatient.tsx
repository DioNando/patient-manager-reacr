import { useState } from "react";

const AddPatient = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau patient : ${name}");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom du patient :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddPatient;
