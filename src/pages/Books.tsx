import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BooksContainer from '../components/BooksContainer';

const Books: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LIBROS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BooksContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Books;
