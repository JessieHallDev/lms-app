const TeacherDashboard = () => {
    const [courses] = useState([
      { id: 1, title: "Intro to Programming", students: 45, code: "CS101" },
      { id: 2, title: "Data Structures", students: 38, code: "CS202" },
      { id: 3, title: "Web Development", students: 52, code: "CS303" },
    ]);
  
    return (
      <div className="dashboard">
        <Sidebar />
        <div style={styles.content}>
          <DashboardHeader teacherName="Dr. Smith" />
          <div style={styles.courseSection}>
            <h2>My Courses</h2>
            <div style={styles.courseGrid}>
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: { display: "flex", minHeight: "100vh", background: "#f9fafc" },
    content: { flex: 1, padding: "20px 40px" },
    courseSection: { marginTop: "30px" },
    courseGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
    },
  };
  
  export default TeacherDashboard;