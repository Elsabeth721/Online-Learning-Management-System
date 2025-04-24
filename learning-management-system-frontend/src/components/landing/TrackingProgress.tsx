import { Button } from "@/components/ui/button";

const TrackingProgress = () => {
  return (
    <section className="px-4 md:px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="assets/section3.avif"
            alt="Learning Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight">
            Track your learning and
            <br />
            improve yourself more
          </h2>
          <p className="text-gray-600 max-w-md">
            Online education enables the teacher and the student to set their
            own learning pace, and there's the added flexibility of setting a
            schedule that fits everyone.
          </p>
          <Button className="bg-indigo-950 hover:bg-indigo-800">
            Enroll now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrackingProgress;