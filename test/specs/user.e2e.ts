import { createUser, getUserData, deleteUser } from "../utils/apiCommands.js";

describe('API commands', () => {
  let userId: number;
  let userName: string;
  let userEmail: string;

  afterAll(async () => {
    await deleteUser(userId);
  })

  it('POST command', async () => {
    const user = {
      name: 'Test from Automation course',
      email: 'test@automationcourse.com',
    }
    await createUser(user);
    userId = 1;
  })

  it('GET command',async () => {
    const userData = await getUserData(userId);
    userName = userData.name;
    userEmail = userData.email;
    console.log('User.name:', userName);
    console.log('User.email:', userEmail);
  })
})