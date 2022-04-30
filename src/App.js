import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import ReactDOM from "react-dom";
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Card
//         img="katie.png"
//         rating="5.0"
//         reviewCount={6}
//         country="USA"
//         title="Life Lessons with Katie Zaferes"
//         price={136}
//       />
//     </div>
//   );
// }

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
