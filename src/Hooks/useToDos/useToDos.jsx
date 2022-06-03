import { useState, useEffect } from "react";
import { getToDo } from "../../Services/api";

export default function useToDos() {
  const [allToDos, setAllToDos] = useState({
    items: {},
    isLoading: true
  });

  useEffect(() => {
    setAllToDos({
      items: TO_DO_MOCKS,
      isLoading: false
    });
    // const teste = async () => {
    // const res = await getToDo();
    // setAllToDos({
    // items: res.data,
    // isLoading: false
    // })
    // };
    // return () => teste();
  }, [])

  return {
    allToDos
  }

}

const TO_DO_MOCKS = [
  {
    "createdAt": "2022-05-27T14:54:43.562Z",
    "description": "Omnis et ea recusandae eos voluptates temporibus velit. Omnis nihil mollitia perspiciatis ut voluptates. Nisi quos consequatur quae nobis quasi autem nihil rerum. Eos et enim ex pariatur numquam tempora.",
    "dueDate": "2022-05-28T02:44:02.243Z",
    "id": 1,
    "isCompleted": false,
    "title": "title 1 for testing",
  },
  {
    "createdAt": "2022-05-27T14:54:43.562Z",
    "description": "Omnis et ea recusandae eos voluptates temporibus velit. Omnis nihil mollitia perspiciatis ut voluptates. Nisi quos consequatur quae nobis quasi autem nihil rerum. Eos et enim ex pariatur numquam tempora.",
    "dueDate": "2022-05-28T02:44:02.243Z",
    "id": 2,
    "isCompleted": false,
    "title": "title 2",
  },
  {
    "createdAt": "2022-05-27T14:54:43.562Z",
    "description": "Omnis et ea recusandae eos voluptates temporibus velit. Omnis nihil mollitia perspiciatis ut voluptates. Nisi quos consequatur quae nobis quasi autem nihil rerum. Eos et enim ex pariatur numquam tempora.",
    "dueDate": "2022-05-28T02:44:02.243Z",
    "id": 3,
    "isCompleted": true,
    "title": "title 3",
  }
]
