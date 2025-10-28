import React, { useState } from "react";
import "../../index.css";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !instructor || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    setLoading(true);

    // prepare form data for file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("instructor", instructor);
    formData.append("image", image);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/courses/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("✅ Course added successfully!");
        console.log("New Course:", data);

        // Reset form
        setTitle("");
        setDescription("");
        setInstructor("");
        setImage(null);
      } else {
        const errorData = await response.json();
        console.error("❌ Failed to add course:", errorData);
        alert("Failed to add course. Check the console for details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-course">
      <h2>Add a New Course</h2>
      <form className="add-course-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Course Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter course description"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Instructor *</label>
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            placeholder="Enter instructor name"
            required
          />
        </div>

        <div className="form-group">
          <label>Course Image *</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;