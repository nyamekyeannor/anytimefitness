// creating classes

exports.seed = function (knex) {
  return knex("classes").insert([
    {
      name: "weight lifting",
      type: "muscle building",
      date: "04-04-2022",
      duration: "1 hour",
      intensity: "medium",
      location: "florida",
      max_size: 5,
    },
    {
      name: "Yoga",
      type: "Physical/mental",
      date: "02-20-2022",
      duration: "1 hour",
      intensity: "low stress",
      location: "virginia",
      max_size: 30,
    },
    {
      name: "stretching",
      type: "Physical",
      date_time: "10-14-2022",
      duration: "30 minutes",
      intensity: "low stress",
      location: "texas",
      max_size: 50,
    },
  ]);
};
