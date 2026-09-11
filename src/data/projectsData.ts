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
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-1.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-3.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-4.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-5.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-6.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-7.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-8.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-9.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-10.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-11.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-12.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-13.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-14.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/rest-vid-15.mp4"
    ]
  },
  {
    id: "p2",
    category: "Hotels & Rooms",
    label: "Hotels & Rooms",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-1.mp4",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-1.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-3.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-4.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-5.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/hotel-vid-6.mp4"
    ]
  },
  {
    id: "p3",
    category: "Commercial",
    label: "Commercial",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-1.mov",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-1.mov",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-2.mov",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-3.mov",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-4.mov",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-5.mov",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/commercial-vid-6.mp4"
    ]
  },
  {
    id: "p4",
    category: "Influencer Marketing",
    label: "Influencer Marketing",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-1.mp4",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-1.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-3.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-4.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-5.mov",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-6.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-7.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-8.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/inf-marketing-vid-9.mov"
    ]
  },
  {
    id: "p5",
    category: "Trends",
    label: "Trends",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/trend-vid-1.mp4",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/trend-vid-1.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/trend-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/trend-vid-3.mp4"
    ]
  },
  {
    id: "p6",
    category: "Broadcast",
    label: "Broadcast",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/broadcast-vid-6.mp4",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/broadcast-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/broadcast-vid-3.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/broadcast-vid-4.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/broadcast-vid-5.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/broadcast-vid-6.mp4"
    ]
  },
  {
    id: "p7",
    category: "Social Media Advertisement",
    label: "Social Media Advertisement",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-1.mp4",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-1.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-3.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-4.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-5.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-6.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/social-vid-7.mp4"
    ]
  },
  {
    id: "p8",
    category: "Salon",
    label: "Salon",
    heroVideoUrl: "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-1.mp4",
    videoGallery: [
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-1.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-2.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-3.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-4.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-5.mp4",
      "https://dbyp5pkat73aaqyc.public.blob.vercel-storage.com/salon-vid-6.mp4"
    ]
  }
];
