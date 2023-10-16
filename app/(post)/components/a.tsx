import Link from "next/link";

export function A({ children, className = "", href, ...props }) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`border-b text-gray-950 transition-[border-color] border-gray-400 hover:border-gray-600 ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`border-b text-gray-950 transition-[border-color] border-gray-400 hover:border-gray-600 ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
