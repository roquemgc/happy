import React from 'react'
import Sidebar from '../components/Sidebar';
import { Map, Marker, TileLayer,  } from 'react-leaflet';

import { FiTrash, FiEdit3, FiArrowRight } from 'react-icons/fi'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/dashboard.css';

function Dashboard() {

  return(
    <div id="dashboard" >
      <header>
        <h1>
          Orfanatos cadastrados
        </h1>
        <p>
          2 orfanatos encontrados
        </p>
      </header>
    
      <main>
        <div className="orphanages-list">
          <div className="orphanage">         
            <Map 
              center={[-22.9031684, -47.1849677]} 
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
                position={[1, -2]} 
              /> 
                )
              
            </Map>

            <div className="orphanage-menu">
              <h2>Orfanato esperança</h2>
              <div className="button-container"> 
                <button>
                  <FiEdit3 size={20} color="#15C3D6"></FiEdit3>
                </button>
                <button>
                  <FiTrash size={20} color="#15C3D6"></FiTrash>
                </button>
              </div>
            </div>
          </div>

          <div className="orphanage">         
            <Map 
              center={[-22.9031684, -47.1849677]} 
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
                position={[1, -2]} 
              /> 
                )
              
            </Map>

            <div className="orphanage-name">
              <h2>Orfanato esperança</h2>
              <span> 
                <button>
                  <FiTrash size={20} color="#15C3D6"></FiTrash>
                </button>
                <button>
                  <FiEdit3 size={20} color="#15C3D6"></FiEdit3>
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="orphanages-list">
          <div className="orphanage">         
            <Map 
              center={[-22.9031684, -47.1849677]} 
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
                position={[1, -2]} 
              /> 
                )
              
            </Map>

            <div className="orphanage-name">
              <h2>Orfanato esperança</h2>
              <span> 
                <button>
                  <FiTrash size={20} color="#15C3D6"></FiTrash>
                </button>
                <button>
                  <FiEdit3 size={20} color="#15C3D6"></FiEdit3>
                </button>
              </span>
            </div>
          </div>

          <div className="orphanage">         
            <Map 
              center={[-22.9031684, -47.1849677]} 
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
                position={[1, -2]} 
              /> 
                )
              
            </Map>

            <div className="orphanage-name">
              <h2>Orfanato esperança</h2>
              <span> 
                <button>
                  <FiArrowRight size={20} color="#15C3D6"></FiArrowRight>
                </button>
              </span>
            </div>
          </div>
        </div>
      
      </main>

    </div>
  );
}

export default Dashboard;