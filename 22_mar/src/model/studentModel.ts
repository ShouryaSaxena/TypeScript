import { Schema, model, Document } from "mongoose";

interface UserSchema {
  studentName: String;
  rollno: Number;
  subjects: String;
//   img: {
//     data: String,
//     contentType: String,
//   };
}

const result =  new Schema<UserSchema> ({
    studentName:{
        type: String,
        required: true
    },
    rollno:{
        type: Number,
        required: true
    },
    subjects:{
        type: String,
        required: true
    },
    // img:{
    //     data: String,
    //     contentType: String
    // }
})

const studentResult = model < UserSchema > ("result", result);

export {studentResult} ;
