
import { findBestMatch } from "./matchAlg";
import { fetchUsers } from "./fetchUsers";

export const FindPerfectMatch = async () => {
  try {
   
    const users = await fetchUsers()
    console.log(users)
    const perfectMatch =  findBestMatch(users)

    return perfectMatch
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}

