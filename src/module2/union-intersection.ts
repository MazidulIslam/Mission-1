// union type
type NoobDeveloper = {
  name: string;
};
type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: 'Mazidul Islam',
  expertise: 'JavaScript',
  experience: 1,
};

// intersection type

type NoobDeveloperInter = {
  name: string;
};
type JuniorDeveloperInter = NoobDeveloperInter & {
  expertise: string;
  experience: number;
};

enum Level { //not recommendent
  Junior = 'Junior',
  Mid = 'Mid',
  Senior = 'Seninor',
}
type NextDeveloperInter = JuniorDeveloperInter & {
  leaderShipExperience: number;
  level: Level; //not recommendent
  //   level: 'Junior' | 'Mid' | 'Senior';
};

const newDeveloperInter: JuniorDeveloper = {
  name: 'Mazidul Islam',
  expertise: 'JavaScript',
  experience: 4,
};

const DeveloperInter: JuniorDeveloper | NextDeveloperInter = {
  name: 'Mazidul Islam',
  expertise: 'JavaScript',
  experience: 4,
  leaderShipExperience: 3,
  level: Level.Mid,
};
