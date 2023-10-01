import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeContainer from '../components/HomeContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
