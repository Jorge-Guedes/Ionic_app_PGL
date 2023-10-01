import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ComicsContainer from '../components/ComicsContainer';

const Comics: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>COMICS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ComicsContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Comics;
