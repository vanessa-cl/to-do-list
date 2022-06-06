import { useState, useEffect } from "react";
import { getToDo } from "../../Services/api";

export default function useToDos() {
  const [allToDos, setAllToDos] = useState([]);

  useEffect(() => {
    setAllToDos(TO_DO_MOCKS);
    // const getToDos = async () => {
      // const res = await getToDo();
      // setAllToDos(res.data)
    // };
    // return getToDos();
  }, [])

  return {
    allToDos
  }

}

const TO_DO_MOCKS = [
  {
    "createdAt": "2022-05-27T14:54:43.562Z",
    "description": "Omnis et ea recusandae eos voluptates temporibus velit. Omnis nihil mollitia perspiciatis ut voluptates. Nisi quos consequatur quae nobis quasi autem nihil rerum. Eos et enim ex pariatur numquam tempora.",
    "dueDate": "28/06/2022",
    "id": 1,
    "done": false,
    "title": "mock title 1 for testing",
    "tags": [
      "work",
      "other"
    ]
  },
  {
    "createdAt": "2022-05-27T14:54:43.562Z",
    "description": "Omnis et ea recusandae eos voluptates temporibus velit. Omnis nihil mollitia perspiciatis ut voluptates. Nisi quos consequatur quae nobis quasi autem nihil rerum. Eos et enim ex pariatur numquam tempora.",
    "dueDate": "06/06/2022",
    "id": 2,
    "done": false,
    "title": "mock title 2",
    "tags": [
      "fun",
      "house"
    ]
  },
  {
    "createdAt": "2022-05-27T14:54:43.562Z",
    "description": "Omnis et ea recusandae eos voluptates temporibus velit. Omnis nihil mollitia perspiciatis ut voluptates. Nisi quos consequatur quae nobis quasi autem nihil rerum. Eos et enim ex pariatur numquam tempora.",
    "dueDate": "11/12/22",
    "id": 3,
    "done": true,
    "title": "mock title 3",
    "tags": [
      "study",
    ]
  }
]
