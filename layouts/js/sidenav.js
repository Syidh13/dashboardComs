const instanceMode = te.Sidenav.getInstance(
  document.getElementById("sidenav-2")
);
const modes = ["push", "over", "side"];

modes.forEach((mode) => {
  const modeSwitch = document.getElementById("over");
  modeSwitch.addEventListener("click", () => {
    console.log(mode);
    console.log('dsadsa');
    const instance = te.Sidenav.getInstance(
      document.getElementById("sidenav-2")
    );
    instance.changeMode(mode);
    modes.forEach((el) => {
      if (el === mode) {
        ["text-blue-600", "border-blue-600"].forEach((item) =>
          modeSwitch.classList.remove(item)
        );
        modeSwitch.className +=
          " bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 border-transparent";
      } else {
        const node = document.getElementById(el);
        node.className += " text-blue-600 border-blue-600";
        [
          "bg-blue-600",
          "text-white",
          "hover:bg-blue-700",
          "active:bg-blue-800",
          "focus:bg-blue-700",
          "border-transparent",
        ].forEach((item) => node.classList.remove(item));
      }
    });
  });
});