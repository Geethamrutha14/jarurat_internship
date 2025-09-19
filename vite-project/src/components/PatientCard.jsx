import React from 'react'

export default function PatientCard({ p, onView, onDelete }) {
  const initials = `${p.firstName?.[0] || ''}${p.lastName?.[0] || ''}`.toUpperCase()

  return (
    <article className="card" aria-label={`Patient ${p.firstName} ${p.lastName}`}>
      <div className="meta">
        <div className="avatar">{initials}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700 }}>{p.firstName} {p.lastName}</div>
          <div className="small">{p.gender} • Age {p.age}</div>
        </div>
      </div>
      <div className="details">
        <div className="small">Contact: {p.contact}</div>
        <div className="small">Location: {p.address}</div>
      </div>
      <div style={{ marginTop: 'auto' }} className="row">
        <button className="btn" onClick={() => onView(p)}>View Details</button>
        <button className="btn danger" onClick={() => onDelete(p.id)}>Delete</button>
        <div className="small">ID: {p.id}</div>
      </div>
    </article>
  )
}
