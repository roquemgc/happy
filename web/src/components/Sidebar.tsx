import React from 'react'

import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

import mapMarkerImg from '../images/map-marker.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { FiInfo } from 'react-icons/fi'
import { FiMapPin } from 'react-icons/fi'
import { FiPower } from 'react-icons/fi'

import '../styles/components/sidebar.css'

export default function Sidebar(props?: any) {
    const { goBack } = useHistory();
    
    return (
      <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        { props.dashboard ? (
          <div className="dashboard-itens">
            <a href="#target1" id="target1" className="target default-target">
              <FiMapPin size={24} color="#FFF" />
            </a>
            <a href="#target2" id="target2" className="target">
              <FiInfo size={24} color="#FFF" />
            </a> 
          </div>
        ): (
          <p/>
        )}
        
        { props.dashboard ? (
          <footer>
              <button type="button" onClick={goBack}>
                <FiPower strokeWidth={3} size={24} color="#FFF" />
              </button>
          </footer>
        ) : (
          <footer>
            <button type="button" onClick={goBack}>
              <FiArrowLeft size={24} color="#FFF" />
            </button>
          </footer>
        ) }


      </aside>
    );
}