const skills = ['C#','JavaScript','React','Angular','Html','Css','Sql','Nodejs','Azure','Git'];

const projects = [
{
Id: 1,
Name: "Cinema Website",
ImgURL: ["./images/cinema.png","images/detailsMovie.png"],
Skills:['C#','Angular','Git'],
Summary: "On the website, users can browse all movies currently showing in cinemas, view their details, and search for specific movies. In the admin section, administrators can add, remove, and edit movies.",
LinkWeb: "",
LinkGitHub: "https://github.com/edengolan1/Cinema_Website"},
{
Id: 2,
Name: "Animals Store",
ImgURL: ["./images/Animals.png"],
Skills:['C#','Asp.net','Sql Server','Entity Framework','Html','Css','Git'],
Summary: "This project allows users to view all animals in the store. Users can also add comments to animals and view all comments related to each animal. Additionally, there is an admin interface where users can log in with a username and password to perform actions such as deleting, adding, and editing animals.",
LinkWeb: "",
LinkGitHub: "https://github.com/edengolan1/Animal_Store"},
{
    Id: 3,
    Name: "Shopping Store",
    ImgURL: ["./images/Store.png"],
    Skills:['Html','Css','Javascript','Git'],
    Summary: "This shopping site allows users to browse through all clothing items and other products available in the store. Users have the flexibility to select specific categories or items they wish to view and can sort the items according to their preferences, such as by price from cheap to expensive. Additionally, users can prioritize how they want to view the items, such as by color and size. Furthermore, users have the option to add items to their shopping lists.",
    LinkWeb: "https://shopping-store-swart.vercel.app/",
    LinkGitHub: "https://github.com/edengolan1/Shopping_Store"}
];

export { skills as default, projects};