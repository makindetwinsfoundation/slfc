import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM",
      location: "Main Sanctuary",
      description: "Join us for uplifting worship, inspiring messages, and fellowship.",
      recurring: true,
      image: "https://raw.githubusercontent.com/makindetwinsfoundation/slfc/main/images/photo_2025-09-30_21-45-01.jpg"
    },
    {
      title: "Youth Christian Apologetics Hangout",
      date: "Every Sunday",
      time: "8:00 PM",
      location: "Zoom",
      description: "Learning about Who God is, what we believe and why we believe what we believe.",
      recurring: true,
      image: "https://images.pexels.com/photos/8923057/pexels-photo-8923057.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Wednesday Bible Study",
      date: "Every Wednesday",
      time: "10:00 AM",
      location: "Fellowship Hall",
      description: "Deep dive into God's Word with discussion and prayer.",
      recurring: true,
      image: "https://images.pexels.com/photos/7671116/pexels-photo-7671116.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Wednesday Word Encounter Service",
      date: "Every Wednesday",
      time: "5:55 PM",
      location: "Main Sanctuary",
      description: "Join us for a powerful mid-week service focused on the Word of God.",
      recurring: true,
      image: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Present Your Case Prayer Service",
      date: "Last Friday of the Month",
      time: "5:55 PM",
      location: "Church Auditorium",
      description: "A dedicated prayer service to bring your petitions before God.",
      recurring: true,
      image: "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-purple-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for worship services, community events, and fellowship opportunities. 
            There's always something happening at Shining Light Family Church.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="lg:flex">
                <div 
                  className="lg:w-1/3 h-48 lg:h-auto bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url('${event.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300" />
                  {event.recurring && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Recurring
                      </span>
                    </div>
                  )}
                </div>
                <div className="lg:w-2/3 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;