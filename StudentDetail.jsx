import { useParams, Outlet, NavLink } from 'react-router-dom';

const students = {
  '1': { name: 'Alice Sharma', age: 20, email: 'alice@example.com' },
  '2': { name: 'Ravi Kumar', age: 21, email: 'ravi@example.com' },
  '3': { name: 'Meena Patel', age: 22, email: 'meena@example.com' },
  '4': { name: 'Arjun Reddy', age: 23, email: 'arjun@example.com' },
  '5': { name: 'Simran Kaur', age: 24, email: 'simran@example.com' },
};

const StudentDetail = () => {
  const { id } = useParams();
  const student = students[id];

  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Email: {student.email}</p>

      <nav>
        <NavLink to="profile">Profile</NavLink> |{' '}
        <NavLink to="marks">Marks</NavLink> |{' '}
        <NavLink to="attendance">Attendance</NavLink>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default StudentDetail;
