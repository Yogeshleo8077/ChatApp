import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import { v2 as cloudinary } from "cloudinary";
import { getBase64 } from '../lib/helper.js';

const cookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
}

const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbName: "ChatApp" })
        .then((data) => console.log(`Connected to DataBase: ${data.connection.host}`))
        .catch((err) => {
            throw err;
        });
}

const sendToken = (res, user, code, message) => {

    const token = jwt.sign({ _id: user._id, }, process.env.JWT_SECRET);

    return res.status(code).cookie("ChatAppToken", token, cookieOptions).json({
        success: true,
        message,
    });
};

const emitEvent = (req, event, users, data) => {
    console.log("Emmiting event", event);
}

const uploadFilesToCloudinary = async (files = []) => {
    //Upload files to cloudinary
    const uploadPromises = files.map((file) => {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(
                getBase64(file),
                {
                    resource_type: "auto",
                    public_id: uuid(),
                },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            )
        });
    });


    try {
        const results = await Promise.all(uploadPromises);

        const formattedResults = results.map((result) => ({
            public_id: result.public_id,
            url: result.secure_url,
        }));
        return formattedResults;
    } catch (error) {
        throw new Error("Error uploading files to cloudinary", error);
    }
}

const deleteFilesFromCloudinary = async (public_ids) => {
    //Delete files from cloudinary
}

export { connectDB, sendToken, cookieOptions, emitEvent, deleteFilesFromCloudinary, uploadFilesToCloudinary };