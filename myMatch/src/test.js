


const usersSnapshot = await getDocs(collection(db, "users"));
const users = usersSnapshot.docs.map((doc) => doc.data());
// console.log(users);

const BestMatch = findBestMatch(users);
// console.log(BestMatch)

const Match1 = BestMatch["first"];

const Match2 = BestMatch["second"];

console.log(Match1);

export function findMatchButtonFunction() {
  
}
