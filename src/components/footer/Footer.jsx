import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/babladey275"
            className="text-2xl font-bold"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/babla-dey/"
            className="text-2xl font-bold"
          >
            <FaLinkedin />
          </a>

          <a href="https://www.facebook.com/babla.dey.50/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Better
          Emart
        </p>
      </aside>
    </footer>
  );
}
