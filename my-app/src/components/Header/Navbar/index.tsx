const NAV_OPTIONS: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/", title: "About us" },
  { path: "/", title: "Contact" },
  { path: "/", title: "Store" },
];

export const NavBar = () => {
  return (
    <ul className="flex w-3/12  justify-between text-indigo-700 ">
      {NAV_OPTIONS.map(({ title }, index) => (
        <li
          key={index}
          className="hover:scale-125 transition-all cursor-pointer"
        >
          {title}
        </li>
      ))}
    </ul>
  );
};
