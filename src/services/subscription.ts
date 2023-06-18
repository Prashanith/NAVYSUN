import { query, collection, where, getDocs, addDoc } from "firebase/firestore";
import db from "../firebase";

export async function subscribeToNewsLetter(email: string) {
  const docQuery = query(
    collection(db, "subscription"),
    where("email", "==", email)
  );
  const docs = await getDocs(docQuery);
  if (docs.empty) {
    const docRef = await addDoc(collection(db, "subscription"), {
      email: email,
    });
    return docRef.id.length>0? "SUCCESS":"FAILED TO SUBSCRIBE"
  } else {
    return "Already Subscribed";
  }
}
