export const Callout = ({ emoji = null, text = null, children }) => (
  <div className="bg-gray-200flex items-start p-3 my-6 text-base">
    <span className="block w-6 text-center mr-2 text-sm md:text-base scale-[1.2]">{emoji}</span>
    <span className="block grow text-sm md:text-base">{text ?? children}</span>
  </div>
);
