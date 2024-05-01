

export const findBestMatch = (users) => {
  let bestMatch1 = null;
  let bestMatch2 = null;
  let bestScore = -1;

 
  for (const username1 in users) {
    const user1 = users[username1];

   
    for (const username2 in users) {
      if (username1 !== username2) {
        const user2 = users[username2];
        const score = calculateMatchScore(user1, user2);

      
        if (score > bestScore) {
          bestScore = score;
          bestMatch1 = {...user1 ,name: username1 };
          bestMatch2 = {...user2 ,name: username2};;
        }
      }
    }
  }


  return { first: bestMatch1, Second: bestMatch2, score: bestScore };
};

// console.log(findBestMatch(users));





function calculateGameModeScore(mode1, mode2) {
  if (mode1 === mode2) {
    return 40;
  }

  if (mode1.includes("Team") && mode2.includes("Team")) {
    return 20;
  }

  return 0;
}
function calculateMatchScore(user1, user2) {
  let score = 0;

  if (user1.preferences.communication === user2.preferences.communication) {
    score += 20;
  }

  if (user1.preferences.playstyle === user2.preferences.playstyle) {
    score += 30;
  }


  const LOW_TOXICITY_THRESHOLD = 25;
  const MEDIUM_TOXICITY_THRESHOLD = 50;

 
  const toxicity1 = parseInt(user1.Attributes.toxicity);
  const toxicity2 = parseInt(user2.Attributes.toxicity);


  let toxicityLevel1, toxicityLevel2;
  if (toxicity1 < LOW_TOXICITY_THRESHOLD) {
    toxicityLevel1 = "low";
  } else if (toxicity1 < MEDIUM_TOXICITY_THRESHOLD) {
    toxicityLevel1 = "medium";
  } else {
    toxicityLevel1 = "high";
  }

  if (toxicity2 < LOW_TOXICITY_THRESHOLD) {
    toxicityLevel2 = "low";
  } else if (toxicity2 < MEDIUM_TOXICITY_THRESHOLD) {
    toxicityLevel2 = "medium";
  } else {
    toxicityLevel2 = "high";
  }


  if (toxicityLevel1 === toxicityLevel2) {

    if (toxicityLevel1 === "low") {
      score += 20; 
    } else if (toxicityLevel1 === "medium") {
      score += 15; 
    } else {
      score += 10; 
    }
  }


  if (user1.Attributes.sportsmanship === user2.Attributes.sportsmanship) {
    score += 20;
  }

  const GOOD_THRESHOLD = 50;
  const AVERAGE_THRESHOLD = 100;


  const latencyDifference = Math.abs(
    parseInt(user1.Attributes.Network) - parseInt(user2.Attributes.Network)
  );

  
  let networkScore = 0;
  if (
    parseInt(user1.Attributes.Network) < GOOD_THRESHOLD &&
    parseInt(user2.Attributes.Network) < GOOD_THRESHOLD
  ) {

    networkScore = 20;
  } else if (
    parseInt(user1.Attributes.Network) >= GOOD_THRESHOLD &&
    parseInt(user1.Attributes.Network) < AVERAGE_THRESHOLD &&
    parseInt(user2.Attributes.Network) >= GOOD_THRESHOLD &&
    parseInt(user2.Attributes.Network) < AVERAGE_THRESHOLD
  ) {

    networkScore = 10;
  } else {
    
    networkScore = 5;
  }

  score += networkScore;

 
  if (user1.Skill.Rank === user2.Skill.Rank) {
    score += 50;
  }


  const level1 = parseInt(user1.Skill.Level);
  const level2 = parseInt(user2.Skill.Level);
  if (Math.abs(level1 - level2) < 10) {
    score += 30;
  }

  const gameModeScore = calculateGameModeScore(
    user1.favoriteGameMode,
    user2.favoriteGameMode
  );
  score += gameModeScore;
  // console.log(score);
  return score;
}