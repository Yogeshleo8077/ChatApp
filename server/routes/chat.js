import express from 'express';

import { attachmentsMulter } from '../middlewares/multer.js';
import {
    addMembers,
    deleteChat,
    getChatsDetails,
    getMessages,
    getMyChats,
    getMyGroups,
    leaveGroup,
    newGroupChat,
    removeMember,
    renameGroup,
    sendAttachments
} from '../controllers/chat.js';
import { addMembersValidator, chatIdValidator, newGroupValidator, removeMemberValidator, renameValidator, sendAttachmentsValidator, validateHandler } from '../lib/validators.js';
import { isAuthenticated } from '../middlewares/auth.js';

const app = express.Router();

// After here user must be logged in to access the routes
app.use(isAuthenticated);

app.post("/new", newGroupValidator(), validateHandler, newGroupChat);

app.get("/my", getMyChats);

app.get("/my/groups", getMyGroups);

app.put("/addmembers", addMembersValidator(), validateHandler, addMembers);

app.put("/removemember", removeMemberValidator(), validateHandler, removeMember);

app.delete("/leave/:id", chatIdValidator(), validateHandler, leaveGroup);

//Send attachments
app.post("/message", attachmentsMulter, sendAttachmentsValidator(), validateHandler, sendAttachments);

//Get messages
app.get("/message/:id", chatIdValidator(), validateHandler, getMessages);

//Get Chat Details, rename, delete
app
    .route("/:id")
    .get(chatIdValidator(), validateHandler, getChatsDetails)
    .put(renameValidator(), validateHandler, renameGroup)
    .delete(chatIdValidator(), validateHandler, deleteChat);

export default app;