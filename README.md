# Node-PSQL-Todo-BackEnd

# Tech Stack
- Node.js
- PostGreSQL
- Prisma ORM
- Typescript

# How to Run:

- Run Postgres Instance on Prisma
```bash
npx prisma migrate dev
npx prisma studio
```
- Start Server
```bash
npm run dev
```

# Query Examples :

- `POST: http://localhost:3000/api/v1/client/` -> Create User Data

![U1](./GIFs/Create_User_Data.gif)

- `PUT: http://localhost:3000/api/v1/client/` -> Update User Data

![U2](./GIFs/Update_User_Data.gif)

- `POST: http://localhost:3000/api/v1/client/job` -> Create Todo Data

![T1](./GIFs/Create_Todo_Data.gif)

- `PUT: http://localhost:3000/api/v1/client/job` -> Update Todo Data

![T2](./GIFs/Update_Todo_Data.gif)

- `GET: http://localhost:3000/api/v1/client/` -> Get Todo Data

![T3](./GIFs/Get_Todo_Data.gif)

- `GET: http://localhost:3000/api/v1/client/` -> Delete Todo Data

![T4](./GIFs/Delete_Todo_Data.gif)

- `GET: http://localhost:3000/api/v1/client/` -> Get User Data

![U3](./GIFs/Get_User_Data.gif)

- `GET: http://localhost:3000/api/v1/client/` -> Delete User Data

![U4](./GIFs/Delete_User_Data.gif)
