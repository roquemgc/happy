import React, { FormEvent, useState } from 'react'

import OrphanageCard from '../components/OrphanageCard'

import '../styles/pages/pending-registrations.css'

function PendingRegistrations() {
  return(
    <div className="dashboard-item" id="pending-registration">
      <header>
        <h1>
          Cadastro pendentes
        </h1>
        <p>
          1 orfanato
        </p>
      </header>
      <main>
        <div className="orphanage-list">
          {/* <OrphanageCard orphanages={[1, 'roque']} /> */}
        </div>
      </main>
    </div>
  );
}

export default PendingRegistrations;