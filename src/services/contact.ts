import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

async function createContactRequest(
  name: string,
  email: string,
  mobile: string,
  description: string
) {
  try {
    const docRef = await addDoc(collection(db, "contactRequests"), {
      name: name,
      email: email,
      mobile: mobile,
      description: description,
    });
    return docRef.id.length > 0;
  } catch (error) {
    console.log(error);

    return false;
  }
}

export default createContactRequest;
