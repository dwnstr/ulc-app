export const metadata = {
  title: "ULC Generator",
  description:
    "A tool to create ULC configurations using a GUI. ULC is an all-in-one lighting controller for GTA and FiveM vehicles.",
  metadataBase: new URL("https://ulc.dwnstr.com/generator/"),
};

export default function GeneratorLayout({ children }) {
  return <>{children}</>;
}
