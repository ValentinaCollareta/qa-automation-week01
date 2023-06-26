import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/users';

interface User {
  name: string,
  email: string
}

// Post
export async function createUser(user:User): Promise<void> {
  await axios.post(url, user)
}
// Get
export async function getUserData(userId:number): Promise<User> {
  const res = await axios.get(`${url}/${userId}`);
  return res.data;
}
// Delete
export async function deleteUser(userId:number): Promise<void> {
  await axios.delete(`${url}/${userId}`);
}