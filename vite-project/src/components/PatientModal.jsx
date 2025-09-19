import React from 'react'

export default function PatientModal({ patient, onClose }) {
  if (!patient) return null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{patient.firstName} {patient.lastName}</h3>
          <button onClick={onClose} className="btn">Close</button>
        </div>
        <div style={{ marginTop: 12 }}>
          <div className="small"><strong>ID:</strong> {patient.id}</div>
          <div className="small"><strong>Age:</strong> {patient.age}</div>
          <div className="small"><strong>Gender:</strong> {patient.gender}</div>
          <div className="small"><strong>Contact:</strong> {patient.contact}</div>
          <div className="small"><strong>Address:</strong> {patient.address}</div>
          <div style={{ marginTop: 10 }}>
            <strong>Notes</strong>
            <div className="small">{patient.notes || "No additional notes."}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
