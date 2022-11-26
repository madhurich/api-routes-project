const dummy_comments = 
  {
    e1: [
      {
        name: "john bahl",
        email: "john.bahl@gmail.com",
        text: "This needs improvement",
      },
    ],
    e2: [
      {
        name: "Kevin Kin",
        email: "kevin.kim@gmail.com",
        text: "this is kevins comment",
      },
    ],
  }

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("hello");
    const name = req.body.name;
    const email = req.body.email;
    const text = req.body.text;
    dummy_comments[req.query.eventId] = [...dummy_comments[req.query.eventId], {name: name, email: email, text: text}]
    res.status(201).json({ comments: dummy_comments });
  } else {
    console.log("get comments");
    res.status(200).json({ comments: dummy_comments });
  }
}
