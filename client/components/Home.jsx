import { Link } from "react-router-dom";
import About from "../src/about";
export default function Home() {

  return (
  <div>
    <h2 class="fade-in-text">Transforming Ideas into Reality.</h2>
    <h2 class="fade-in-text">Learn more <Link to="/about">about me</Link>.</h2>
  </div>
  );
}