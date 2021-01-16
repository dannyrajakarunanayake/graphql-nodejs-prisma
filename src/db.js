const users = [
  {
    id: "1",
    name: "Danny",
    email: "danny@yahoo.com",
    age: 37,
  },
  {
    id: "2",
    name: "Danu",
    email: "danu@yahoo.com",
    age: 38,
  },
];

const posts = [
  {
    id: "10",
    title: "Danny Posts",
    body: "Here danny posts",
    published: false,
    author: "1",
  },
  {
    id: "20",
    title: "Danu Posts",
    body: "Here danu posts",
    published: true,
    author: "2",
  },
];

const comments = [
  {
    id: "14",
    text: "This a commentsOne",
    author: "1",
    post: "10",
  },
  {
    id: "15",
    text: "This a commentsTwo",
    author: "2",
    post: "20",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
