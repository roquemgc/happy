import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Map, Marker, TileLayer,  } from 'react-leaflet';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade';

import ConfirmModal from './ConfirmModal'
import { FiTrash, FiEdit3, FiArrowRight } from 'react-icons/fi'
import mapIcon from '../utils/mapIcon'

import '../styles/components/orphanage-cards.css';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface Props {
  dashboard?: boolean;  
  handleDelete?: (id: number) => void;
  orphanages: Orphanage[];
}

function OrphanageCard(props: Props) {
  const [orphanage, setOrphanage] = useState(null);
  const [checked, setChecked] = React.useState(false);

  const childRef = useRef(ConfirmModal);  

  const handleOpen = (item: any) => {
    setOrphanage(item);
    (childRef.current as any).handleOpen();
  }

  useEffect(() => {
    setChecked((prev) => !prev);
  }, []);

  return (
    <Fade in={checked} >
    <Grid container spacing={5}>
      {props.orphanages.map((orphanage) => (
        <Grid key={orphanage.id} item xs={6} >
          <Paper className="orphanage-card">
            <Map 
              center={[orphanage.latitude, orphanage.longitude]} 
              style={{ width: '100%', height: 200 }}
              zoom={15}
              onClick={()=>{}}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
              />
              <Marker 
                interactive={false} 
                icon={mapIcon} 
                position={[orphanage.latitude, orphanage.longitude]}
              /> 
            </Map>
            <div className="card-menu">
              <h2>{orphanage.name}</h2>
              { props.dashboard ? (
                <div className="actions-container"> 
                  <Link to={`/orphanages/${orphanage.id}/edit`}>
                    <FiEdit3 size={20} color="#15C3D6" />
                  </Link>
                  <button type="button" onClick={() => handleOpen(orphanage) } >
                    <FiTrash size={20} color="#15C3D6" />
                  </button>
                </div>
              ) : (
                <div className="actions-container">
                  <Link to={`/orphanages/1`}>
                    <FiArrowRight size={20} color="#15C3D6" />
                  </Link> 
                </div>
              )}
            </div>
          </Paper>
        </Grid>
      ))}
      <ConfirmModal 
        type="delete" 
        handleDelete={props.handleDelete} 
        orphanage={orphanage}
        ref={childRef} 
      />
    </Grid>
    </Fade> 
  );
}

export default OrphanageCard;