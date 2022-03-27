import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Account.css';
import { useAuth } from "../auth/authContext";
import { useHistory } from 'react-router';

const Account: React.FC = () => {

  let { authInfo, logOut } = useAuth()!;
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Welcome {authInfo.user.email} !</IonLabel>
          </IonItem>
          <IonItem>
            <IonButton
              onClick={async () => {
                await logOut();
                history.replace("/login");
              }}
            >
              Logout
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Account;
