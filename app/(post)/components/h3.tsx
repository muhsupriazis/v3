import { withHeadingId } from "./utils";

export function H3({ children }) {
  return (
    <h3 className="group font-bold text-gray-900 text-lg my-8 relative">
      {withHeadingId(children)}
    </h3>
  );
}
