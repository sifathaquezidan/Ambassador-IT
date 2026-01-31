import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg" />

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Ambassador IT</h3>
          <p>
            We deliver reliable, scalable, and modern IT solutions to help
            businesses grow in the digital era.
          </p>
          <Link href="/company/about" className="footer-btn">
            LEARN MORE →
          </Link>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link href="/services#software-development">Web Development</Link>
            </li>
            <li>
              <Link href="/services#app-development">Mobile App Development</Link>
            </li>
            <li>
              <Link href="/services#ui-ux-design">UI/UX Design</Link>
            </li>
            <li>
              <Link href="/services#cloud-devops">Cloud & DevOps</Link>
            </li>
            <li>
              <Link href="/services#ml-ai-development">ML & AI Development</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/company/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/company/team">Meet Our Team</Link>
            </li>
            <li>
              <Link href="/company/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/company/contact">Need a Consultation?</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact">
            <li>☎ +880 1234 567 890</li>
            <li>✉ support@ambassadorit.com</li>
            <li>📍 Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ambassador IT. All rights reserved.</p>
      </div>
    </footer>
  );
}
