const LearningJourney = () => {
    return (
      <section id="learning-journey" className="px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight">
              Make your personalized
              <br />
              learning journey
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="text-lg w-10 h-10 rounded-full bg-indigo-950 text-white flex items-center justify-center font-bold">
                    1.
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-2">
                    Create account
                  </h3>
                  <p className="text-gray-600">
                    At first create your account at our website.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="text-lg w-10 h-10 rounded-full bg-indigo-950 text-white flex items-center justify-center font-bold">
                    2.
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-2">
                    Select Course
                  </h3>
                  <p className="text-gray-600">
                    Then select your preferred course from our packet.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="text-lg w-10 h-10 rounded-full bg-indigo-950 text-white flex items-center justify-center font-bold">
                    3.
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-2">
                    Learn your skill
                  </h3>
                  <p className="text-gray-600">
                    Learn your skill from the best learning materials.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="text-lg w-10 h-10 rounded-full bg-indigo-950 text-white flex items-center justify-center font-bold">
                    4.
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-2">
                    Make success story
                  </h3>
                  <p className="text-gray-600">
                    After learning the skill make steps to success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center">
              <img
                src="/assets/section2.jpg"
                alt="Course Illustration"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LearningJourney;