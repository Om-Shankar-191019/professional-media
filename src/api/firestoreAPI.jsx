import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import { toast } from "react-toastify";

export const postMessageToFirestore = async (object) => {
  try {
    const docRef = await addDoc(collection(firestore, "post"), object);
    toast.success("Successfully posted");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPostMessages = (setAllPost) => {
  onSnapshot(
    collection(firestore, "post"),
    (response) => {
      setAllPost(
        response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    },
    (error) => {
      // ...
    }
  );
};
