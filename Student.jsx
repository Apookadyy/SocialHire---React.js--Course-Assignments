import { Link } from 'react-router-dom';

const students = [
  { id: '1', name: 'Alice Sharma' },
  { id: '2', name: 'Ravi Kumar' },
  { id: '3', name: 'Meena Patel' },
  { id: '4', name: 'Arjun Reddy' },
  { id: '5', name: 'Simran Kaur' },
];

const StudentList = () => (
  <div>
    <h2>Student List</h2>
    <ul>
      {students.map(student => (
        <li key={student.id}>
          <Link to={`/students/${student.id}/profile`}>{student.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default StudentList;
