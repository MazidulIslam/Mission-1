"use strict";
const newDeveloper = {
    name: 'Mazidul Islam',
    expertise: 'JavaScript',
    experience: 1,
};
var Level;
(function (Level) {
    Level["Junior"] = "Junior";
    Level["Mid"] = "Mid";
    Level["Senior"] = "Seninor";
})(Level || (Level = {}));
const newDeveloperInter = {
    name: 'Mazidul Islam',
    expertise: 'JavaScript',
    experience: 4,
};
const DeveloperInter = {
    name: 'Mazidul Islam',
    expertise: 'JavaScript',
    experience: 4,
    leaderShipExperience: 3,
    level: Level.Mid,
};
