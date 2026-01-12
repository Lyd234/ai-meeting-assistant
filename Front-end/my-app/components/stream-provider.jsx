// "use client";

// import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";

// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// if (!apiKey) throw new Error("Missing NEXT_PUBLIC_STREAM_API_KEY");

// export default function StreamProvider({ children, userName }) {
//   if (!userName) {
//     return <div className="text-white">Loading...</div>;
//   }

//   const displayName = userName.trim() || "Guest";
//   // eslint-disable-next-line react-hooks/purity
//   const userId = `${displayName.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;

//   const user = {
//     id: userId,
//     name: displayName,
//     type: "guest", // Important for guest mode
//   };

//   const client = new StreamVideoClient({ apiKey, user });

//   return <StreamVideo client={client}>{children}</StreamVideo>;
// }




"use client";

import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

if (!apiKey) {
  throw new Error("Missing NEXT_PUBLIC_STREAM_API_KEY in .env.local");
}

export default function StreamProvider({ children, userName }) {
  const displayName = userName?.trim() || "Guest";

  // Create unique guest user ID
  // eslint-disable-next-line react-hooks/purity
  const userId = `${displayName.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;

  const user = {
    id: userId,
    name: displayName,
    type: "guest", // This enables guest mode — no token needed
  };

  const client = new StreamVideoClient({ apiKey, user });

  return <StreamVideo client={client}>{children}</StreamVideo>;
}