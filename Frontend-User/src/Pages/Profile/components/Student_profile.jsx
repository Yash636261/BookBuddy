import { Link } from "react-router-dom";

function Student_profile({ user }) {
  // Sample student data

  const student = {
    name: user.name,
    id: user.studentID,
    email: user.email,
    contact: user.phoneNumber,
    imageUrl: user.imageUrl,
    borrowedBooks: user.borrowedBooks,
  };

  // Generate a unique student ID and QR code
  const uniqueId = `#${student.id}`;
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col  lg:flex-row lg:justify-center lg:items-center bg-gray-800 border-0 rounded-lg container py-20 mx-auto px-4">
        <div className="p-5 border-0 shadow-lg shadow-black rounded-lg max-w-md mx-auto lg:w-96 lg:mx-10">
          <img
            src={student.imageUrl}
            alt="Student QR Code"
            className="w-32 h-32 my-4 object-cover border-0 rounded-full hover:shadow-xl hover:shadow-gray-900 mx-auto"
          />

          <h1 className="text-2xl font-bold mb-4">Student Details</h1>
          <p className="mb-2">
            <span className="font-bold">Name:</span> {student.name}
          </p>
          <p className="mb-2">
            <span className="font-bold">Student ID:</span> {student.id}
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> {student.email}
          </p>
          <p className="mb-2">
            <span className="font-bold">Contact:</span> {student.contact}
          </p>
          <p className="mb-2">
            <span className="font-bold">Unique ID:</span> {uniqueId}
          </p>
        </div>
        <div>
          <div className="p-5 border-0 shadow-lg shadow-black rounded-lg max-w-md mx-auto lg:w-96 lg:mx-10 my-10">
            <h2 className="text-xl font-bold mb-4">Borrowed Books</h2>
            {student.borrowedBooks.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2">Book Title</th>
                    <th className="py-2">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {student.borrowedBooks.map((book) => (
                    <tr key={book.id}>
                      <td className="py-2">{book.title}</td>
                      <td className="py-2">{book.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No books currently borrowed.</p>
            )}
          </div>
        </div>
        {/* <div>
           <h2 className="text-xl font-bold mb-4">Links</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <Link to={`/student/${student.id}/profile`} className="text-blue-500 hover:underline">
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/student/${student.id}/courses`} className="text-blue-500 hover:underline">
                  Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/student/${student.id}/grades`} className="text-blue-500 hover:underline">
                  Grades
                </Link>
              </li>
              <li className="mb-2">
                <Link to={`/student/${student.id}/library`} className="text-blue-500 hover:underline">
                  Library
                </Link>
              </li>
            </ul> 
        </div> */}
      </div>
    </div>
  );
}

export default Student_profile;