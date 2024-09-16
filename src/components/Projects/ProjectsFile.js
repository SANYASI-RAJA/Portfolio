import Expense from '../../assets/projects/Expense.png';
import Editor from '../../assets/projects/Editor.png';
import CV from "../../assets/projects/CV.png"
import Tasklog from "../../assets/projects/Tasklog.png"
export const projectsFile1 = [
    {
        name: "NIT JSR Complaint App(CampusVoice)",
        desc: "This is MERN based app focusing on student complaint for NIT Jamshedpur, Here student can sign and login and can admit thier complaints. email: dummy@gmail.com, password: 123456",
        github: "https://github.com/SANYASI-RAJA/Campus_Voice",
        image: CV,
        demo: "https://campusvoice.vercel.app/",
        tech: ["MERN", "JWT", "AntDesign", "Tailwind", "Nodemailer", "Cloudinary"],
        flag: false
    },
    {
        name: "Expenses Management App",
        desc: "This is an Expense Management App. User can sign and login and then user can manage thier expenses",
        github: "https://github.com/SANYASI-RAJA/ExpanseFront",
        image: Expense,
        demo: "https://expanse-front.vercel.app/",
        tech: ["React", "Node", "Expressjs", "MongoDB", "AntDesign"],
        flag: true
    },
    {
        name: "Realtime Editor",
        desc: "The app facilitates real-time collaboration by allowing multiple users to work together seamlessly. It automatically generates unique room IDs for easy session management, and provides real-time editor updates to ensure a smooth, synchronized user experience.",
        github: "https://github.com/SANYASI-RAJA/Chroma-Editor",
        image: Editor,
        demo: "https://github.com/SANYASI-RAJA/Chroma-Editor",
        tech: ["React", "Node", "Expressjs", "WebSocket", "CodeMirror"],
        flag: false
    },
    
    {
        name: "TaskLog App",
        desc: "The TaskLog app helps users manage their routines by allowing them to add and remove tasks. It also displays timestamps for when tasks are created and updated, helping users keep track of their progress and schedule efficiently.",
        github: "https://github.com/SANYASI-RAJA/tasklog",
        image: Tasklog,
        demo: "https://tasklogg.netlify.app/",
        tech: ["React"],
        flag: true
    },  
]

// name, desc, github, image, demo, tech, flag 