import React, { useEffect, useState } from 'react'

import OrphanageCards from '../components/OrphanageCards'
import '../styles/pages/dashboard.css';

import api from '../services/api'

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function Dashboard() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
      api.get('orphanages').then(response => {
          setOrphanages(response.data); 
      }); 
  }, []);

  return(
    <div className="dashboard-item" id="dashboard" >
      <header>
        <h1>
          Orfanatos cadastrados
        </h1>
        <p>
          {orphanages.length} orfanatos encontrados
        </p>
      </header>
      <main>
        <div className="orphanages-list">
          {orphanages ? (
            <OrphanageCards dashboard={true} orphanages={orphanages} />
          ): (
            <p>Não há orfanatos cadastrados</p>
          )} 
          
        </div>
      </main>
    </div>
  );
}

export default Dashboard;