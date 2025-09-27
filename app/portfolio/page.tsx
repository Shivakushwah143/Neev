// 'use client';

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Search, Filter, Heart, Calendar, MapPin, Camera, Eye } from 'lucide-react';

// const PortfolioPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = ['All', 'Weddings', 'Events', 'Portraits', 'Commercial', 'Lifestyle'];

//   const portfolioItems = [
//     {
//       id: 1,
//       category: 'Weddings',
//       title: 'Sarah & Michael Wedding',
//       location: 'Tuscany, Italy',
//       date: '2023-09-15',
//       image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80',
//       featured: true,
//       tags: ['destination', 'outdoor', 'romantic'],
//       description: 'A romantic destination wedding in the heart of Tuscany, surrounded by vineyards and rolling hills.'
//     },
//     {
//       id: 2,
//       category: 'Weddings',
//       title: 'Emma & James Celebration',
//       location: 'Napa Valley, CA',
//       date: '2023-08-20',
//       image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
//       featured: true,
//       tags: ['vineyard', 'elegant', 'sunset'],
//       description: 'An elegant vineyard wedding with stunning sunset ceremony and sophisticated reception.'
//     },
//     {
//       id: 3,
//       category: 'Events',
//       title: 'Tech Conference 2023',
//       location: 'San Francisco, CA',
//       date: '2023-10-05',
//       image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['corporate', 'technology', 'networking'],
//       description: 'Annual technology conference capturing keynote speakers and networking moments.'
//     },
//     {
//       id: 4,
//       category: 'Portraits',
//       title: 'Johnson Family Portrait',
//       location: 'Central Park, NY',
//       date: '2023-07-12',
//       image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['family', 'outdoor', 'natural'],
//       description: 'A beautiful family portrait session capturing natural moments in Central Park.'
//     },
//     {
//       id: 5,
//       category: 'Weddings',
//       title: 'Beach Wedding Ceremony',
//       location: 'Santorini, Greece',
//       date: '2023-06-30',
//       image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
//       featured: true,
//       tags: ['beach', 'destination', 'blue'],
//       description: 'A breathtaking beach wedding ceremony overlooking the Aegean Sea.'
//     },
//     {
//       id: 6,
//       category: 'Commercial',
//       title: 'Luxury Hotel Campaign',
//       location: 'Los Angeles, CA',
//       date: '2023-11-10',
//       image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['luxury', 'interior', 'branding'],
//       description: 'Commercial photography for a luxury hotel brand showcasing elegant interiors.'
//     },
//     {
//       id: 7,
//       category: 'Events',
//       title: 'Anniversary Celebration',
//       location: 'Paris, France',
//       date: '2023-05-18',
//       image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['anniversary', 'celebration', 'elegant'],
//       description: 'A sophisticated anniversary celebration in the city of love.'
//     },
//     {
//       id: 8,
//       category: 'Portraits',
//       title: 'Executive Headshots',
//       location: 'New York, NY',
//       date: '2023-09-25',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['business', 'professional', 'corporate'],
//       description: 'Professional executive headshots for corporate leadership team.'
//     },
//     {
//       id: 9,
//       category: 'Weddings',
//       title: 'Garden Wedding',
//       location: 'Charleston, SC',
//       date: '2023-04-22',
//       image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['garden', 'southern', 'springtime'],
//       description: 'A charming garden wedding in the historic charm of Charleston.'
//     },
//     {
//       id: 10,
//       category: 'Lifestyle',
//       title: 'Urban Fashion Shoot',
//       location: 'Brooklyn, NY',
//       date: '2023-08-08',
//       image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['fashion', 'urban', 'lifestyle'],
//       description: 'Contemporary fashion photography in urban Brooklyn setting.'
//     },
//     {
//       id: 11,
//       category: 'Commercial',
//       title: 'Restaurant Opening',
//       location: 'Miami, FL',
//       date: '2023-12-03',
//       image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['food', 'restaurant', 'grand opening'],
//       description: 'Grand opening celebration photography for upscale Miami restaurant.'
//     },
//     {
//       id: 12,
//       category: 'Events',
//       title: 'Charity Gala',
//       location: 'Washington, DC',
//       date: '2023-11-28',
//       image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
//       featured: false,
//       tags: ['charity', 'gala', 'formal'],
//       description: 'Annual charity gala event photography capturing the evening\'s highlights.'
//     }
//   ];

//   const filteredItems = portfolioItems.filter(item => {
//     const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
//     const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   const featuredItems = portfolioItems.filter(item => item.featured);

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="section-padding bg-gradient-to-br from-warm-gold/10 to-champagne/5">
//         <div className="container-custom text-center">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="inline-block">
//               <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
//                 Portfolio
//               </span>
//             </div>
            
//             <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
//               Our Creative
//               <span className="text-gradient block">Portfolio</span>
//             </h1>
            
//             <p className="text-xl text-muted-text leading-relaxed max-w-3xl mx-auto">
//               Explore our collection of captured moments, each telling a unique story 
//               through the lens of artistic vision and technical excellence.
//             </p>
            
//             {/* Search and Filter */}
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto">
//               <div className="relative flex-1 w-full sm:w-auto">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text h-4 w-4" />
//                 <Input
//                   placeholder="Search by title, location, or tags..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 border-champagne/30 focus:border-warm-gold bg-white"
//                 />
//               </div>
//               <Button variant="outline" className="btn-secondary">
//                 <Filter className="h-4 w-4 mr-2" />
//                 Filters
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Work */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16 space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
//               Featured Work
//             </h2>
//             <p className="text-xl text-muted-text max-w-3xl mx-auto">
//               Showcasing some of our most memorable projects and client favorites.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {featuredItems.map((item) => (
//               <Card key={item.id} className="group overflow-hidden border-0 shadow-xl card-hover bg-white">
//                 <div className="relative aspect-square overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
//                   {/* Featured Badge */}
//                   <Badge className="absolute top-4 left-4 bg-warm-gold text-white">
//                     <Heart className="h-3 w-3 mr-1 fill-current" />
//                     Featured
//                   </Badge>
                  
//                   {/* Overlay Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                     <div className="flex items-center space-x-4 text-sm text-white/80 mb-3">
//                       <div className="flex items-center space-x-1">
//                         <MapPin className="h-3 w-3" />
//                         <span>{item.location}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="h-3 w-3" />
//                         <span>{new Date(item.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                     <p className="text-white/90 text-sm mb-4 leading-relaxed">
//                       {item.description}
//                     </p>
//                     <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-charcoal">
//                       <Eye className="h-3 w-3 mr-2" />
//                       View Gallery
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="section-padding bg-ivory">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
//               All Work
//             </h2>
            
//             {/* Category Buttons */}
//             <div className="flex flex-wrap justify-center gap-3 mb-8">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={selectedCategory === category ? "default" : "outline"}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                     selectedCategory === category
//                       ? 'bg-warm-gold text-white hover:bg-warm-gold/90'
//                       : 'border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white'
//                   }`}
//                 >
//                   {category}
//                   <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
//                     {category === 'All' 
//                       ? portfolioItems.length 
//                       : portfolioItems.filter(item => item.category === category).length
//                     }
//                   </span>
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Portfolio Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
//             {filteredItems.map((item) => (
//               <Card
//                 key={item.id}
//                 className="group relative overflow-hidden border-0 shadow-lg card-hover cursor-pointer bg-white"
//               >
//                 <div className="aspect-square relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
//                   {/* Category Badge */}
//                   <Badge className="absolute top-4 left-4 bg-warm-gold text-white text-xs">
//                     {item.category}
//                   </Badge>
                  
//                   {/* View Icon */}
//                   <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <Eye className="h-4 w-4 text-white" />
//                   </div>
                  
//                   {/* Content Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-lg font-bold mb-1">{item.title}</h3>
//                     <div className="flex items-center space-x-3 text-sm text-white/80 mb-2">
//                       <div className="flex items-center space-x-1">
//                         <MapPin className="h-3 w-3" />
//                         <span>{item.location}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="h-3 w-3" />
//                         <span>{new Date(item.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap gap-1 mb-3">
//                       {item.tags.map((tag, tagIndex) => (
//                         <span
//                           key={tagIndex}
//                           className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs"
//                         >
//                           #{tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Load More */}
//           {filteredItems.length > 12 && (
//             <div className="text-center">
//               <Button className="btn-secondary">
//                 Load More Projects
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="section-padding bg-gradient-to-r from-warm-gold to-champagne text-white">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Portfolio by Numbers
//             </h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto">
//               A glimpse into our creative journey and the stories we've captured.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <Camera className="h-12 w-12 mx-auto mb-4 text-white/80" />
//               <div className="text-4xl font-bold mb-2">500+</div>
//               <div className="text-white/80">Projects Completed</div>
//             </div>
//             <div className="text-center">
//               <Heart className="h-12 w-12 mx-auto mb-4 text-white/80 fill-current" />
//               <div className="text-4xl font-bold mb-2">1000+</div>
//               <div className="text-white/80">Happy Clients</div>
//             </div>
//             <div className="text-center">
//               <MapPin className="h-12 w-12 mx-auto mb-4 text-white/80" />
//               <div className="text-4xl font-bold mb-2">25+</div>
//               <div className="text-white/80">Countries</div>
//             </div>
//             <div className="text-center">
//               <Eye className="h-12 w-12 mx-auto mb-4 text-white/80" />
//               <div className="text-4xl font-bold mb-2">50K+</div>
//               <div className="text-white/80">Photos Delivered</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding bg-white">
//         <div className="container-custom text-center">
//           <div className="max-w-3xl mx-auto space-y-8">
//             <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
//               Ready to Create Your Story?
//             </h2>
//             <p className="text-xl text-muted-text leading-relaxed">
//               Let's work together to create beautiful memories that you'll treasure forever. 
//               Every project is unique, and we can't wait to learn about your vision.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//               <Button className="btn-primary text-lg px-8 py-3">
//                 Start Your Project
//               </Button>
//               <Button variant="outline" className="btn-secondary text-lg px-8 py-3">
//                 Get Free Quote
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioPage;

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Filter, Heart, Calendar, MapPin, Camera, Eye } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Weddings', 'Events', 'Portraits', 'Commercial', 'Lifestyle'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Weddings',
      title: 'Traditional Punjabi Wedding',
      location: 'Amritsar, Punjab',
      date: '2023-11-15',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      featured: true,
      tags: ['sikh', 'golden temple', 'traditional'],
      description: 'A vibrant Punjabi wedding ceremony with traditional rituals at the Golden Temple.'
    },
    {
      id: 2,
      category: 'Weddings',
      title: 'South Indian Brahmin Wedding',
      location: 'Chennai, Tamil Nadu',
      date: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      featured: true,
      tags: ['tamil', 'temple', 'traditional'],
      description: 'Elegant Brahmin wedding with intricate rituals and beautiful silk sarees.'
    },
    {
      id: 3,
      category: 'Events',
      title: 'Diwali Festival Celebration',
      location: 'Varanasi, Uttar Pradesh',
      date: '2023-11-12',
      image: 'https://images.unsplash.com/photo-1603383928959-2464ecb43b8e?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['festival', 'lights', 'ganga'],
      description: 'Capturing the spiritual essence of Diwali celebrations on the ghats of Ganga.'
    },
    {
      id: 4,
      category: 'Portraits',
      title: 'Rajasthani Family Portrait',
      location: 'Jaisalmer, Rajasthan',
      date: '2023-12-05',
      image: 'https://images.unsplash.com/photo-1532635244-17d6bcd5846a?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['desert', 'traditional', 'colorful'],
      description: 'Family portraits against the beautiful backdrop of Jaisalmer desert.'
    },
    {
      id: 5,
      category: 'Weddings',
      title: 'Royal Rajput Wedding',
      location: 'Udaipur, Rajasthan',
      date: '2023-09-30',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      featured: true,
      tags: ['palace', 'royal', 'traditional'],
      description: 'Grand Rajput wedding at the City Palace with royal traditions.'
    },
    {
      id: 6,
      category: 'Commercial',
      title: 'Jaipur Jewelry Campaign',
      location: 'Jaipur, Rajasthan',
      date: '2023-08-15',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['jewelry', 'traditional', 'luxury'],
      description: 'Commercial photography for traditional Rajasthani jewelry brand.'
    },
    {
      id: 7,
      category: 'Events',
      title: 'Holi Festival Colors',
      location: 'Mathura, Uttar Pradesh',
      date: '2023-03-08',
      image: 'https://images.unsplash.com/photo-1548869206-93b0366e8cb9?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['holi', 'colors', 'festival'],
      description: 'Vibrant Holi festival celebrations in the birthplace of Lord Krishna.'
    },
    {
      id: 8,
      category: 'Portraits',
      title: 'Kathakali Dancer Portrait',
      location: 'Kochi, Kerala',
      date: '2023-07-22',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['dance', 'traditional', 'kerala'],
      description: 'Professional portraits of Kathakali dancers in traditional makeup.'
    },
    {
      id: 9,
      category: 'Weddings',
      title: 'Bengali Wedding Ceremony',
      location: 'Kolkata, West Bengal',
      date: '2023-12-18',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['bengali', 'cultural', 'traditional'],
      description: 'Traditional Bengali wedding with sindoor daan and other rituals.'
    },
    {
      id: 10,
      category: 'Lifestyle',
      title: 'Kashmir Houseboat Life',
      location: 'Srinagar, Jammu & Kashmir',
      date: '2023-06-10',
      image: 'https://images.unsplash.com/photo-1588666305588-43a8f805e7a9?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['houseboat', 'dal lake', 'kashmir'],
      description: 'Lifestyle photography capturing daily life on Kashmir houseboats.'
    },
    {
      id: 11,
      category: 'Commercial',
      title: 'Mumbai Street Food',
      location: 'Mumbai, Maharashtra',
      date: '2023-05-25',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['food', 'street', 'mumbai'],
      description: 'Food photography for Mumbai street food restaurant campaign.'
    },
    {
      id: 12,
      category: 'Events',
      title: 'Ganesh Chaturthi Festival',
      location: 'Mumbai, Maharashtra',
      date: '2023-09-19',
      image: 'https://images.unsplash.com/photo-1562674261-3a29e0109d6f?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['ganesh', 'festival', 'mumbai'],
      description: 'Grand Ganesh Chaturthi celebrations and visarjan ceremony.'
    },
    {
      id: 13,
      category: 'Portraits',
      title: 'Himachali Traditional Wear',
      location: 'Shimla, Himachal Pradesh',
      date: '2023-04-15',
      image: 'https://images.unsplash.com/photo-1532635244-17d6bcd5846a?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['traditional', 'mountains', 'himachal'],
      description: 'Portrait session showcasing traditional Himachali attire.'
    },
    {
      id: 14,
      category: 'Weddings',
      title: 'Goan Catholic Wedding',
      location: 'Goa',
      date: '2023-02-14',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['christian', 'goa', 'beach'],
      description: 'Beautiful Goan Catholic wedding with beachside ceremony.'
    },
    {
      id: 15,
      category: 'Lifestyle',
      title: 'Varanasi Morning Rituals',
      location: 'Varanasi, Uttar Pradesh',
      date: '2023-01-20',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['spiritual', 'ganga', 'morning'],
      description: 'Documenting morning rituals and prayers on the Ganga ghats.'
    },
    {
      id: 16,
      category: 'Commercial',
      title: 'Delhi Handicrafts',
      location: 'Delhi',
      date: '2023-03-30',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['handicraft', 'traditional', 'delhi'],
      description: 'Product photography for traditional Indian handicrafts.'
    }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredItems = portfolioItems.filter(item => item.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-warm-gold/10 to-champagne/5">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="bg-warm-gold/10 text-warm-gold px-4 py-2 rounded-full text-sm font-medium">
                Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
              Indian Photography
              <span className="text-gradient block">Portfolio</span>
            </h1>
            
            <p className="text-xl text-muted-text leading-relaxed max-w-3xl mx-auto">
              Capturing the vibrant colors, rich traditions, and diverse cultures of India 
              through artistic photography and storytelling.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text h-4 w-4" />
                <Input
                  placeholder="Search weddings, festivals, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-champagne/30 focus:border-warm-gold bg-white"
                />
              </div>
              <Button variant="outline" className="btn-secondary">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Featured Indian Weddings
            </h2>
            <p className="text-xl text-muted-text max-w-3xl mx-auto">
              Showcasing the diversity and beauty of Indian wedding traditions across different cultures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-xl card-hover bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  <Badge className="absolute top-4 left-4 bg-warm-gold text-white">
                    <Heart className="h-3 w-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-white/80 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-charcoal">
                      <Eye className="h-3 w-3 mr-2" />
                      View Gallery
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
              Indian Photography Collection
            </h2>
            
            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-warm-gold text-white hover:bg-warm-gold/90'
                      : 'border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-white'
                  }`}
                >
                  {category}
                  <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category === 'All' 
                      ? portfolioItems.length 
                      : portfolioItems.filter(item => item.category === category).length
                    }
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden border-0 shadow-lg card-hover cursor-pointer bg-white"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-warm-gold text-white text-xs">
                    {item.category}
                  </Badge>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <div className="flex items-center space-x-3 text-sm text-white/80 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          {filteredItems.length > 12 && (
            <div className="text-center">
              <Button className="btn-secondary">
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-warm-gold to-champagne text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Indian Photography Journey
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Capturing the essence of India across diverse cultures and traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Camera className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-white/80">Indian States Covered</div>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-white/80 fill-current" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Indian Weddings</div>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Heritage Sites</div>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Cultural Moments</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Ready to Capture Your Indian Story?
            </h2>
            <p className="text-xl text-muted-text leading-relaxed">
              Let's create beautiful memories that celebrate your unique Indian traditions and culture. 
              Every ceremony, every ritual, every moment deserves to be captured with authenticity and artistry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="btn-primary text-lg px-8 py-3">
                Book Your Shoot
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-3">
                Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;