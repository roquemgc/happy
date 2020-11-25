import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import HandleUser from './pages/HandleUser';

import Dashboard from './pages/Dashboard'
import PendingRegistrations from './pages/PendingRegistrations'

import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import HandleOrphanage from './pages/HandleOrphanage'

function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/login" component={HandleUser} />
        <Route path="/forgot-password" component={HandleUser} />
        <Route path="/password-reset" component={HandleUser} />

        <Route path="/orphanages/create" component={HandleOrphanage} />
        <Route path="/orphanages/:id/edit" component={HandleOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>

      <Switch>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/dashboard/pending-registrations" component={PendingRegistrations} />
      </Switch>   
    </BrowserRouter>
  );
}

export default Routes;
