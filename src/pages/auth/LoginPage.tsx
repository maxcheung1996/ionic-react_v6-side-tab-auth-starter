import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  useIonToast,
} from "@ionic/react";
import React from "react";
// Auth
import { RouteComponentProps } from "react-router";
import { useAuth } from "./authContext";

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {

  let { logIn } = useAuth()!;
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [present, dismiss] = useIonToast();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} clearInput />
          </IonItem>
          <IonItem>
            <IonButton
              color="success"
              onClick={async () => {
                let res = await logIn(email, password);
                console.log("res:", res);
                if (res) {
                  history.replace("/tabroot1/dashboard");
                } else {
                  present('Authentication Fail! Please try again.', 2000)
                }
              }}
            >
              Login
            </IonButton>
          </IonItem>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
