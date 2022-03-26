import {
  getFirestore,
  DocumentData,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

export const DbRead = {
  games: {
    fetch: fetchGames,
  },
};

async function fetchGames(): Promise<DocumentData[]> {
  const coll = collection(db, "games");
  const q = query(coll);
  const docs = await getDocs(q);
  return docs.docs.map((snapshot) => snapshot.data());
}
