import { Card } from "@/components/ui/card";

const PopularCourses = () => {
  const courses = [
    { icon: "🎨", title: "UI Design", subtitle: "Basics" },
    { icon: "📊", title: "Business", subtitle: "Marketing" },
    { icon: "💻", title: "Website", subtitle: "Development" },
    { icon: "📝", title: "Article", subtitle: "Writing" },
    { icon: "📦", title: "Storage", subtitle: "Management" },
  ];

  return (
    <section id="courses" className="px-4 md:px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-indigo-950 mb-12">
        Our Popular Courses
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col items-center text-center transition-transform duration-200 ease-in-out bg-white hover:bg-indigo-950 hover:!text-white"
          >
            <div className="text-3xl mb-3">{course.icon}</div>
            <h3 className="font-medium text-indigo-950 hover:text-white">
              {course.title}
            </h3>
            <p className="text-sm text-gray-400 hover:text-white">
              {course.subtitle}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;