import React from 'react'
import PatientCard from '../components/PatientCard'
import PatientModal from '../components/PatientModal'
import PatientFormModal from '../components/PatientFormModal'
import patientData from '../data/patients.json'   

export default function Patients() {
  const [patients, setPatients] = React.useState([])
  const [query, setQuery] = React.useState('')
  const [selected, setSelected] = React.useState(null)
  const [showForm, setShowForm] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  // Load patients (from localStorage > fallback to imported JSON)
  React.useEffect(() => {
    const saved = localStorage.getItem("patients")
    if (saved) {
      setPatients(JSON.parse(saved))
    } else {
      try {
        setPatients(patientData)
        setError(null)
      } catch (e) {
        console.error(e)
        setError("Failed to load patients")
      }
    }
    setLoading(false)
  }, [])

  // Save patients to localStorage whenever it changes
  React.useEffect(() => {
    if (patients.length > 0) {
      localStorage.setItem("patients", JSON.stringify(patients))
    }
  }, [patients])

  // Search filter
  const filtered = patients.filter(p => {
    const full = (p.firstName + ' ' + p.lastName).toLowerCase()
    return full.includes(query.trim().toLowerCase())
  })

  // Add new patient (from form)
  function handleAddPatient(newP) {
    const nextId = patients.length ? Math.max(...patients.map(p => p.id)) + 1 : 1
    const patient = { id: nextId, ...newP, notes: "Added by user." }
    setPatients([patient, ...patients])
    setShowForm(false)
  }

  // Delete patient
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      setPatients(patients.filter(p => p.id !== id))
      if (selected?.id === id) setSelected(null)
    }
  }

  return (
    <section className={showForm || selected ? "blurred" : ""}>
      <h2>Patients</h2>
      <div className="controls">
        <div className="search">
          <input
            type="search"
            placeholder="Search patients by name..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <button className="btn" onClick={() => setShowForm(true)}>
          Add New Patient
        </button>
      </div>

      {loading && <div className="small">Loading patients...</div>}
      {error && <div style={{ color: 'crimson' }}>{error}</div>}

      <div className="grid" style={{ marginTop: 12 }}>
        {filtered.map(p => (
          <PatientCard
            key={p.id}
            p={p}
            onView={setSelected}
            onDelete={handleDelete}
          />
        ))}
        {!loading && patients.length > 0 && filtered.length === 0 && (
          <div className="small">No patients match your search.</div>
        )}
        {!loading && patients.length === 0 && (
          <div className="small">No patients found.</div>
        )}
      </div>

      {selected && (
        <PatientModal
          patient={selected}
          onClose={() => setSelected(null)}
        />
      )}

      {showForm && (
        <PatientFormModal
          onClose={() => setShowForm(false)}
          onSave={handleAddPatient}
        />
      )}
    </section>
  )
}
