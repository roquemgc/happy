import React, { useEffect, useState } from 'react'

import OrphanageCards from '../components/OrphanageCards'
import emptyOrphanageListIcon from '../images/emptyOrphanagesList.svg'
import Zoom from '@material-ui/core/Fade';
import '../styles/pages/dashboard.css';

import api from '../services/api'

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function Dashboard() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data); 
    }); 
    setChecked((prev) => !prev);
  }, []);

  function handleDelete(id: number) {
    api.delete(`orphange/${id}`).then(response => {
      console.log(response);
    })
  }

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
        <Zoom>
          <div className="orphanages-list">
            { orphanages.length ? (
              <OrphanageCards 
                dashboard={true} 
                handleDelete={handleDelete} 
                orphanages={orphanages} 
              />
            ): (
              <div className="empty-list">
                <img src={emptyOrphanageListIcon} alt="Não há orfanatos" />
                <p>Não há orfanatos cadastrados</p>
              </div> 
            )} 
          </div>
        </Zoom>
      </main>
    </div>
  );
}