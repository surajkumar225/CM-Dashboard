import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      roll: 10802028,
      name: "Shashank",
      img: "https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png",
      department: "Information Technology",
      batch: "B21",
      certifications: 3,
      projects: "DX-11",
      status: "Submitted",
    },
    {
      roll: 10802037,
      name: "Bishnu",
      img: "https://images.squarespace-cdn.com/content/v1/5af0b99875f9ee930253bb0f/1532979248798-WWG5QMEXSIZXNM7ATVCF/terry-crews.png?format=1000w",
      department: "Information Technology",
      batch: "B22",
      certifications: 1,
      projects: "DX-22",
      status: "Pending",
    },
    {
      roll: 10802054,
      name: "Joy",
      img: "https://media.istockphoto.com/id/1435686874/photo/pensive-clever-indian-or-arabian-guy-student-or-freelancer-using-laptop-working-or-studying.webp?b=1&s=170667a&w=0&k=20&c=VCKT7t6UliBzLlHRrjYRyp_40KzIzziYdUWyFe9c24A=",
      department: "Information Technology",
      batch: "B21",
      certifications: 2,
      projects: "DX-33",
      status: "Pending",
    },
    {
      roll: 10802075,
      name: "Biplab",
      img: "https://post.healthline.com/wp-content/uploads/2020/11/transmasucline-person-using-mobile-phone-1200x628-facebook-1200x628.jpg",
      department: "Information Technology",
      batch: "B21",
      certifications: 3,
      projects: "DX-44",
      status: "Submitted",
    },
    {
      roll: 10802089,
      name: "Roumdip",
      img: "https://www.betterup.com/hubfs/Creative-businessman-using-laptop-in-co-working-space-characteristics-of-a-determined-person.jpg",
      department: "Information Technology",
      batch: "B22",
      certifications: 2,
      projects: "DX-55",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">University Roll</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Department</TableCell>
            <TableCell className="tableCell">Batch</TableCell>
            <TableCell className="tableCell">Certifications</TableCell>
            <TableCell className="tableCell">Projects</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.roll}>
              <TableCell className="tableCell">{row.roll}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.department}</TableCell>
              <TableCell className="tableCell">{row.batch}</TableCell>
              <TableCell className="tableCell">{row.certifications}</TableCell>
              <TableCell className="tableCell">{row.projects}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
