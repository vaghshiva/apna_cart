const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Report",
                "taskDescription": "Complete the financial report for Q3.",
                "taskDate": "2024-12-01",
                "category": "Reporting"
            },
            {
                "active": true,
                "new": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team sync-up meeting.",
                "taskDate": "2024-11-29",
                "category": "Meetings"
            },
            {
                "active": false,
                "new": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Client Presentation",
                "taskDescription": "Prepare the presentation for the upcoming client meeting.",
                "taskDate": "2024-12-05",
                "category": "Presentations"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "new": 2,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review the latest pull requests from the dev team.",
                taskDate: "2024-11-30",
                category: "Development"
            },
            {
                active: true,
                new: false,
                completed: true,
                failed: false,
                taskTitle: "Bug Fixing",
                taskDescription: "Fix bugs reported by the QA team in the latest build.",
                taskDate: "2024-11-28",
                category: "Development"
            },
            {
                active: true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "Sprint Planning",
                taskDescription: "Attend the sprint planning meeting and contribute to task allocation.",
                taskDate: "2024-12-02",
                category: "Meetings"
            }
        ],
        taskNumbers: {
            active: 3,
            new: 2,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 3,
        firstName: "Ananya",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "User Feedback Analysis",
                taskDescription: "Analyze the user feedback from the latest product release.",
                taskDate: "2024-11-30",
                category: "Analysis"
            },
            {
                active: false,
                new: false,
                completed: true,
                failed: false,
                taskTitle: "SEO Audit",
                taskDescription: "Conduct an SEO audit of the company website.",
                taskDate: "2024-11-20",
                category: "Marketing"
            },
            {
                active: true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "Content Strategy Meeting",
                taskDescription: "Join the content strategy brainstorming session with the marketing team.",
                taskDate: "2024-12-03",
                category: "Meetings"
            }
        ],
        taskNumbers: {
            active: 2,
            new: 2,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 4,
        firstName: "Riya",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "Product Design Review",
                taskDescription: "Review the latest design mockups for the new product.",
                taskDate: "2024-12-01",
                category: "Design"
            },
            {
                active: true,
                new: false,
                completed: true,
                failed: false,
                taskTitle: "Market Research",
                taskDescription: "Conduct market research for the upcoming product launch.",
                taskDate: "2024-11-25",
                category: "Research"
            },
            {
                active: true,
                new: false,
                completed: false,
                failed: true,
                taskTitle: "Prototype Testing",
                taskDescription: "Test the first prototype with a focus group.",
                taskDate: "2024-12-05",
                category: "Testing"
            }
        ],
        taskNumbers: {
            active: 3,
            new: 1,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 5,
        firstName: "Kavya",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "Client Call",
                taskDescription: "Attend the client call to discuss project updates.",
                taskDate: "2024-11-30",
                category: "Meetings"
            },
            {
                active: true,
                new: true,
                completed: false,
                failed: false,
                taskTitle: "Technical Documentation",
                taskDescription: "Write documentation for the latest software updates.",
                taskDate: "2024-12-02",
                category: "Documentation"
            },
            {
                active: false,
                new: false,
                completed: true,
                failed: false,
                taskTitle: "Server Migration",
                taskDescription: "Migrate the database to the new server.",
                taskDate: "2024-11-15",
                category: "Operations"
            }
        ],
        taskNumbers: {
            active: 2,
            new: 2,
            completed: 1,
            failed: 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}
}