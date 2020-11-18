import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'

import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import PendingRegistrations from './pages/PendingRegistrations'

import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id/edit" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>

      <Sidebar dashboard={true}></Sidebar>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/dashboard/pending-registrations" component={PendingRegistrations} />
      </Switch>   
    </BrowserRouter>
  );
}

export default Routes;
