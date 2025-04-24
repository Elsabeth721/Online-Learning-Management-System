import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      location: "New York, USA",
      image: "/assets/1.jpg",
      quote:
        "This platform transformed my learning experience. The courses are well-structured and the instructors are incredibly knowledgeable. I've gained skills that directly helped me advance in my career.",
    },
    {
      id: 2,
      name: "Emma Johnson",
      location: "London, UK",
      image: "/assets/2.jpg",
      quote:
        "The flexibility of learning at my own pace made all the difference. I could balance my full-time job while acquiring new skills. The community support is also outstanding!",
    },
    {
      id: 3,
      name: "Michael Chen",
      location: "Toronto, Canada",
      image: "/assets/3.jpg",
      quote:
        "As someone who struggled with traditional education, these courses were a revelation. The interactive content and practical projects helped me understand complex concepts easily.",
    },
    {
      id: 4,
      name: "Olivia Williams",
      location: "Sydney, Australia",
      image: "/assets/4.jpg",
      quote:
        "The quality of instruction is exceptional. Each course is thoughtfully designed with real-world applications in mind. I've recommended this platform to all my colleagues.",
    },
    {
      id: 5,
      name: "James Rodriguez",
      location: "Mexico City, Mexico",
      image: "/assets/5.jpg",
      quote:
        "This was a very immersive and interesting course — a lot of self-learning to be done on your own to really understand and put together into practice the technology into your own workflow.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const getCircularIndex = (index: number) => {
    if (index < 0) return testimonials.length + index;
    if (index >= testimonials.length) return index - testimonials.length;
    return index;
  };

  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight">
            Take a look at students
            <br />
            awesome feedback
          </h2>
          <div className="p-6 border-l-4 border-indigo-500 bg-gray-50 rounded-r-lg">
            <p className="text-gray-600 italic mb-6">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-indigo-950">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {currentTestimonial.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="rounded-full !bg-indigo-950 hover:!bg-indigo-800"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="w-64 h-64 bg-indigo-600 rounded-full mx-auto relative">
            <div className="w-16 h-16 bg-white rounded-full absolute top-4 right-0 overflow-hidden">
              <img
                src={
                  testimonials[getCircularIndex(currentIndex + 1)].image ||
                  "/placeholder.svg"
                }
                alt="Student"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-full absolute top-1/4 -right-8 overflow-hidden">
              <img
                src={
                  testimonials[getCircularIndex(currentIndex + 2)].image ||
                  "/placeholder.svg"
                }
                alt="Student"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-full absolute bottom-4 right-4 overflow-hidden">
              <img
                src={
                  testimonials[getCircularIndex(currentIndex + 3)].image ||
                  "/placeholder.svg"
                }
                alt="Student"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-full absolute bottom-0 left-1/4 overflow-hidden">
              <img
                src={
                  testimonials[getCircularIndex(currentIndex + 4)].image ||
                  "/placeholder.svg"
                }
                alt="Student"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 bg-white rounded-full absolute top-1/3 -left-8 overflow-hidden">
              <img
                src={
                  testimonials[getCircularIndex(currentIndex - 1)].image ||
                  "/placeholder.svg"
                }
                alt="Student"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-lg border-2 border-white">
              <img
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;