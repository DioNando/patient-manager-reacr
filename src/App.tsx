import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PatientList from "./PatientList";
import AddPatient from "./AddPatient";
import './App.css';
import './assets/style/style.scss'
import { PatientProvider } from "./context/PatientContext";

function App() {

  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/patients" element={<PatientList />} />
    //     <Route path="/add-patient" element={<AddPatient />} />
    //   </Routes>
    // </Router>
    <PatientProvider>
      <div>
        <h1>Gestion des Patients</h1>
        <AddPatient />
        <PatientList />
      </div>
    </PatientProvider>
  )
}

export default App