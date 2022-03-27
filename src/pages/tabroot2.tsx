import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { square, ellipse, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Tab1 from './tabroot2/Tab1';
import Tab2 from './tabroot2/Tab2';
import Tab3 from './tabroot2/Tab3';
import './tabroot2.css';


const TabRoot2: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabroot2" to="/tabroot2/tab1" />
        <Route
          path="/tabroot2/tab1"
          render={() => <Tab1 />}
          exact={true}
        />
        <Route
          path="/tabroot2/tab2"
          component={Tab2}
          exact={true}
        />
        <Route
          path="/tabroot2/tab3"
          render={() => <Tab3 />}
          exact={true}
        />
      </IonRouterOutlet>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabroot2/tab1">
          <IonIcon icon={square} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabroot2/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabroot2/tab3">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRoot2;
