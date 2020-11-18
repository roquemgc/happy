import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Map, Marker, TileLayer,  } from 'react-leaflet';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import ConfirmModal from '../utils/ConfirmModal/ConfirmModal'
import { FiTrash, FiEdit3, FiArrowRight } from 'react-icons/fi'
import mapIcon from '../utils/mapIcon'

import '../styles/components/orphanageCard.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface Props {
  dashboard?: boolean;
  orphanages: Orphanage[];
}

function OrphanageCard(props: Props) {
  const classes = useStyles();
  const childRef = useRef();
  console.log(useRef())

  return ( 
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            {props.orphanages.map((orphanage) => (
              <Grid key={orphanage.id} item>
                <div className="orphanage-card">         
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
                  <div className="orphanage-menu">
                    <h2>{orphanage.name}</h2>
                    { props.dashboard ? (
                      <div className="button-container"> 
                        <Link to={`/orphanages/${orphanage.id}/edit`}>
                          <FiEdit3 size={20} color="#15C3D6" />
                        </Link>

                        
                        <button type="button" onClick={childRef.current.showAlert()}>
                          <FiTrash size={20} color="#15C3D6" />
                        </button>
                        <ConfirmModal type="delete" name={orphanage.name} ref={childRef} />
                      </div>
                    ) : (
                      <div className="button-container">
                        <Link to={`/orphanages/1`}>
                          <FiArrowRight size={20} color="#15C3D6" />
                        </Link> 
                      </div>
                    )}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
  );
}

export default OrphanageCard;