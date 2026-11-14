export interface Project {
  id: string;
  category: string;
  label: string;
  heroVideoUrl: string;
  videoGallery: string[];
}

export const CATEGORIES = [
  "All",
  "Restaurant",
  "Hotels & Rooms",
  "Commercial",
  "Broadcast",
  "Influencer Marketing",
  "Salon",
  "Trends",
  "Social Media Advertisement"
];

export const projects: Project[] = [
  {
    id: "p1",
    category: "Restaurant",
    label: "Food",
    heroVideoUrl: "/portfolio-assets/project-1.mp4",
    videoGallery: [
      "/portfolio-assets/rest-vid-1.mp4",
      "/portfolio-assets/rest-vid-2.mp4",
      "/portfolio-assets/rest-vid-3.mp4",
      "/portfolio-assets/rest-vid-4.mp4",
      "/portfolio-assets/rest-vid-5.mp4",
      "/portfolio-assets/rest-vid-6.mp4",
      "/portfolio-assets/rest-vid-7.mp4",
      "/portfolio-assets/rest-vid-8.mp4",
      "/portfolio-assets/rest-vid-9.mp4",
      "/portfolio-assets/rest-vid-10.mp4",
      "/portfolio-assets/rest-vid-11.mp4",
      "/portfolio-assets/rest-vid-12.mp4",
      "/portfolio-assets/rest-vid-13.mp4",
      "/portfolio-assets/rest-vid-14.mp4",
      "/portfolio-assets/rest-vid-15.mp4"
    ]
  },
  {
    id: "p2",
    category: "Hotels & Rooms",
    label: "Hotels & Rooms",
    heroVideoUrl: "/portfolio-assets/hotel-vid-1.mp4",
    videoGallery: [
      "/portfolio-assets/hotel-vid-1.mp4",
      "/portfolio-assets/hotel-vid-2.mp4",
      "/portfolio-assets/hotel-vid-3.mp4",
      "/portfolio-assets/hotel-vid-4.mp4",
      "/portfolio-assets/hotel-vid-5.mp4",
      "/portfolio-assets/hotel-vid-6.mp4"
    ]
  },
  {
    id: "p3",
    category: "Commercial",
    label: "Commercial",
    heroVideoUrl: "/portfolio-assets/commercial-vid-1.mov",
    videoGallery: [
      "/portfolio-assets/commercial-vid-1.mov",
      "/portfolio-assets/commercial-vid-2.mov",
      "/portfolio-assets/commercial-vid-3.mov",
      "/portfolio-assets/commercial-vid-4.mov",
      "/portfolio-assets/commercial-vid-5.mov",
      "/portfolio-assets/poppys-vista-24-7-26.mp4"
    ]
  },
  {
    id: "p4",
    category: "Influencer Marketing",
    label: "Influencer Marketing",
    heroVideoUrl: "/portfolio-assets/inf-marketing-vid-1.mp4",
    videoGallery: [
      "/portfolio-assets/inf-marketing-vid-1.mp4",
      "/portfolio-assets/inf-marketing-vid-2.mp4",
      "/portfolio-assets/inf-marketing-vid-3.mp4",
      "/portfolio-assets/inf-marketing-vid-4.mp4",
      "/portfolio-assets/inf-marketing-vid-5.mov",
      "/portfolio-assets/inf-marketing-vid-6.mp4",
      "/portfolio-assets/inf-marketing-vid-7.mp4",
      "/portfolio-assets/inf-marketing-vid-8.mp4",
      "/portfolio-assets/inf-marketing-vid-9.mov"
    ]
  },
  {
    id: "p5",
    category: "Trends",
    label: "Trends",
    heroVideoUrl: "/portfolio-assets/trend-vid-1.mp4",
    videoGallery: [
      "/portfolio-assets/trend-vid-1.mp4",
      "/portfolio-assets/trend-vid-2.mp4",
      "/portfolio-assets/img-8480.mp4"
    ]
  },
  {
    id: "p6",
    category: "Broadcast",
    label: "Broadcast",
    heroVideoUrl: "/portfolio-assets/broadcast-vid-6.mp4",
    videoGallery: [
      "/portfolio-assets/broadcast-vid-1.mp4",
      "/portfolio-assets/broadcast-vid-2.mp4",
      "/portfolio-assets/broadcast-vid-3.mp4",
      "/portfolio-assets/broadcast-vid-4.mp4",
      "/portfolio-assets/broadcast-vid-5.mp4",
      "/portfolio-assets/broadcast-vid-6.mp4"
    ]
  },
  {
    id: "p7",
    category: "Social Media Advertisement",
    label: "Social Media Advertisement",
    heroVideoUrl: "/portfolio-assets/social-vid-1.mp4",
    videoGallery: [
      "/portfolio-assets/social-vid-1.mp4",
      "/portfolio-assets/social-vid-2.mp4",
      "/portfolio-assets/social-vid-3.mp4",
      "/portfolio-assets/social-vid-4.mp4",
      "/portfolio-assets/social-vid-5.mp4",
      "/portfolio-assets/social-vid-6.mp4",
      "/portfolio-assets/social-vid-7.mp4"
    ]
  },
  {
    id: "p8",
    category: "Salon",
    label: "Salon",
    heroVideoUrl: "/portfolio-assets/salon-vid-1.mp4",
    videoGallery: [
      "/portfolio-assets/salon-vid-1.mp4",
      "/portfolio-assets/salon-vid-2.mp4",
      "/portfolio-assets/salon-vid-3.mp4",
      "/portfolio-assets/salon-vid-4.mp4",
      "/portfolio-assets/salon-vid-5.mp4",
      "/portfolio-assets/salon-vid-6.mp4"
    ]
  }
];
