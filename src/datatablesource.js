export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "University Roll ",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,

    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Surk",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    status: "active",
    email: "surk25@gmail.com",
    age: 10802030,
  },
  {
    id: 2,
    username: "Soumya",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "soumya9@gmail.com",
    status: "passive",
    age: 10802031,
  },
  {
    id: 3,
    username: "Kunal",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "mekunal@gmail.com",
    status: "pending",
    age: 10802032,
  },
  {
    id: 4,
    username: "Abhishek",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "abhi@gmail.com",
    status: "active",
    age: 10802033,
  },
  {
    id: 5,
    username: "Kalp",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "itskalp@gmail.com",
    status: "passive",
    age: 10802034,
  },
  {
    id: 6,
    username: "Maghna",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "maghna35@gmail.com",
    status: "active",
    age: 10802035,
  },
  {
    id: 7,
    username: "Gill",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "gill7@gmail.com",
    status: "passive",
    age: 10802036,
  },
  {
    id: 8,
    username: "Tanushri",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "tanushri778@gmail.com",
    status: "active",
    age: 10802037,
  },
  {
    id: 9,
    username: "Rohit",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "rohit@gmail.com",
    status: "pending",
    age: 10802038,
  },
  {
    id: 10,
    username: "Vebhav",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "vebhav76@gmail.com",
    status: "active",
    age: 10802039,
  },
  {
    id: 11,
    username: "Nitin",
    img: "https://static01.nyt.com/images/2020/03/14/upshot/14up-colleges-remote/14up-colleges-remote-videoSixteenByNineJumbo1600.jpg",
    email: "nitin6@gmail.com",
    status: "active ",
    age: 10802040,
  },
];
