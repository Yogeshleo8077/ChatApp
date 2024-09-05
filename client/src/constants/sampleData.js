export const sampleChats = [{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
},
{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png", "https://www.w3schools.com/howto/img_avatar.png", "https://www.w3schools.com/howto/img_avatar.png", "https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
},


];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
    },

]

export const sampleMotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },

    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Boi",
        },
        _id: "2",
    }
]


export const sampleMessage = [
    {
        attachments: [],

        content: "Lawda ka message hai",
        _id: "dsdfsddfs",
        sender: {
            _id: "user._id",
            name: "Chaman",
        },
        chat: "chatId",

        createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
        attachments: [
            {
                public_id: "dadad 2",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],

        content: "",
        _id: "sddsdsdsd",
        sender: {
            _id: "fsdfshfhf",
            name: "Chaman 2",
        },
        chat: "chatId",

        createdAt: "2024-02-12T10:41:30.630Z",
    }
]

export const dashboardData = {
    users: [
        {
            name: "John Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "john_doe",
            friends: 20,
            groups: 5
        },
        {
            name: "John Boi",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "john_boi",
            friends: 20,
            groups: 5
        }
    ],

    chats: [
        {
            name: "Yogesh Kushwah",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
            { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" }],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            }
        },
        {
            name: "Kushwah Yogesh",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: false,
            members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
            { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" }],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            }
        }
    ],

    messages: [
        {
            attachments: [],
            _id: "1",
            content: "Lawda ka message hai",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman",
            },
            chat: "chatId",
            group: false,
            createdAt: "2024-02-12T10:41:30.630Z",
        },


        {
            attachments: [
                {
                    public_id: "dadad 2",
                    url: "https://www.w3schools.com/howto/img_avatar.png"
                },
            ],
            _id: "2",
            content: "",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman 2",
            },
            chat: "chatId",
            group: true,
            createdAt: "2024-02-12T10:41:30.630Z",
        }
    ]
}