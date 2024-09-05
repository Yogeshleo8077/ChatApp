import express from 'express';
import { accpetFriendRequest, getMyFriends, getMyNotificaitons, getMyProfile, login, logout, newUser, searchUser, sendFriendRequest } from '../controllers/user.js';
import { singleAvatar } from '../middlewares/multer.js';

import { acceptRequestValidator, loginValidator, registerValidator, sendRequestValidator, validateHandler } from '../lib/validators.js';
import { isAuthenticated } from '../middlewares/auth.js';

const app = express.Router();

app.post("/new", singleAvatar, registerValidator(), validateHandler, newUser);
app.post("/login", loginValidator(), validateHandler, login);


// After here user must be logged in to access the routes
app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.get("/logout", logout);

app.get("/search", searchUser);

app.put("/sendrequest", sendRequestValidator(), validateHandler, sendFriendRequest);

app.put("/acceptrequest", acceptRequestValidator(), validateHandler, accpetFriendRequest);

app.get("/notifications", getMyNotificaitons);

app.get("/friends", getMyFriends);
export default app;
