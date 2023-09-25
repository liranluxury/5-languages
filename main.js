const lang = prompt("What language are you speaking?");
switch (lang) {
  case "en":
    console.log("Hi! How are you?");
    break;
  case "de":
    console.log("Gutten Tag!");
    break;
  case "il":
    console.log("שלום");
    break;
  default:
    console.log("Tray again!");
}
