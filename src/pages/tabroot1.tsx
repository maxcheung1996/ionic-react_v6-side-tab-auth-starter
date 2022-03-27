import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { createOutline, barChartOutline, personCircleOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Dashboard from './tabroot1/Dashboard';
import Forms from './tabroot1/Forms';
import Account from './tabroot1/Account';
import './tabroot1.css';


const TabRoot1: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabroot1" to="/tabroot1/dashboard" />
        <Route
          path="/tabroot1/dashboard"
          render={() => <Dashboard />}
          exact={true}
        />
        <Route
          path="/tabroot1/forms"
          component={Forms}
          exact={true}
        />
        <Route
          path="/tabroot1/account"
          render={() => <Account />}
          exact={true}
        />
      </IonRouterOutlet>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/tabroot1/dashboard">
          <IonIcon icon={barChartOutline} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="forms" href="/tabroot1/forms">
          <IonIcon icon={createOutline} />
          <IonLabel>Forms</IonLabel>
        </IonTabButton>
        <IonTabButton tab="account" href="/tabroot1/account">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRoot1;
