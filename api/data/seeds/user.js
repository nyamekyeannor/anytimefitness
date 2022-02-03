// creating users

exports.seed = function (knex) {
  return knex("users").insert([
    {
      name: "John Spade",
      username: "JohnS123",
      password: "Test123",
      email: "Js@yahoo.com",
      role: "coach",
    },
    {
      name: "ter fame",
      username: "fame123",
      password: "pass123!",
      email: "fame@gmail.com",
      role: "client",
    },
    {
      name: "tim kos",
      username: "kos1",
      password: "hello123!",
      email: "kos@outlook.com",
      role: "coach",
    },
    {
      name: "mit tot",
      username: "tot1",
      password: "hefd123!",
      email: "mit@outlook.com",
      role: "client",
    },
    {
      name: "yoo oso",
      username: "yoo1",
      password: "heff23!",
      email: "yoo@outlook.com",
      role: "coach",
    },
    {
      name: "love rain",
      username: "rain44",
      password: "testing3!",
      email: "love@yahoo.com",
      role: "coach",
    },
  ]);
};
