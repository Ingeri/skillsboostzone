// components/Header.jsx
// import "./header.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 site-header">
      <h1 className="text-2xl font-bold text-blue-800">Skills Boost Zone</h1>
      <nav>
        <ul className="flex space-x-4 text-lg text-gray-700">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/schools">Schools</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
