import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> Pizzas with hygine.org</h1>;
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((n) => (
          <Pizza pizzaobj={n} key={n.name} />
        ))}
      </ul>
    </main>
  );

  function Pizza({ pizzaobj }) {
    return (
      <div className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaobj.photoName} alt={pizzaobj.name} />
        <li>
          <h3>{pizzaobj.name}</h3>
          <p>{pizzaobj.ingredients}</p>
          <span>{pizzaobj.soldOut ? "SOLDOUT" : pizzaobj.price}</span>
        </li>
      </div>
    );
  }
}
function Footer() {
  const hour = new Date().getHours();
  const open = 9;
  const close = 21;
  const isOpen = hour >= open && hour <= close;
  // if (hour >= open && hour <= close) alert("We're Open Now");
  // else alert("WE're Closed Now");ll

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open from {open} till {close}.00 . You can visit our shop or
            order online during the working hour
          </p>
          <a
            href="https://www.dominos.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Order NOW !</button>
          </a>
        </div>
      ) : (
        <div className="order">
          <p>
            Sorry,Now we're Closed Now. shop timing is from {open} to {close}{" "}
            .{" "}
          </p>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
/*import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "DSA (Java)",
    level: "intermediate",
    color: "#E76F51"
  },
  {
    skill: "Core Java (OOP, Collections)",
    level: "intermediate",
    color: "#F4A261"
  },
  {
    skill: "Multithreading",
    level: "beginner",
    color: "#2A9D8F"
  },
  {
    skill: "Spring Boot",
    level: "beginner",
    color: "#6A994E"
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "#3A86FF"
  },
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#EFD81D"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#61DBFB"
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#EB4A53"
  },
  {
    skill: "Problem Solving",
    level: "intermediate",
    color: "#9D4EDD"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Photo.jpeg" alt="image"></img>;
}

function Intro() {
  return (
    <div className="data">
      <h1>SUJAY PAUL .P</h1>
      <p>
        I am an engineering student working towards becoming a Java Full Stack
        Developer. I enjoy building projects and learning both frontend and
        backend development. Currently, I am practicing React and improving my
        problem-solving skills through DSA. My goal is to become a skilled and
        industry-ready software developer.
      </p>
    </div>
  );
}
/*
function SkillList() {
  return (
    <div>
      <Skill skill="Java " emoji="⭐⭐⭐" />
      <Skill skill="Git " emoji="⭐⭐⭐" />
      <Skill skill="React" emoji="⭐⭐" />
      <Skill skill="HTML" emoji="⭐⭐" />
      <Skill skill="CSS" emoji="⭐⭐" />
      <Skill skill="Java Script" emoji="⭐⭐" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill">
      <h3>
        {props.skill}
        {props.emoji}
      </h3>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
