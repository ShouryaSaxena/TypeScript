import { Request, Response } from 'express';
import * as fs from 'fs';
import path from 'path';
import {studentResult} from '../model/studentModel';
import alert from 'alert';


const displayForm = (req:Request, res:Response) => {
    res.sendFile("C:/Users/ShouryaSaxena/Node.js/15_mar/public/index.html")
}

//---------------Adding data to the database-----------------------

const add_Student = async (req:Request, res:Response) => {
    console.log(req);
    const data = {
        studentName: req.body.studentName,
        rollno: req.body.rollno,
        subjects: req.body.subjects,
        // img: {
        //     data: path.join("uploads/" + req.file.filename),
        //     contentType: 'image/*',
        // }
    }

    if (/*!data.img ||*/ data.studentName?.trim() == "" || isNaN(data.rollno) || data.subjects?.trim() == "") {
        res.status(500).send({ message: "Invalid Data or Missing Data " });
    }
    console.log(data.studentName)
    console.log(data.rollno)
    console.log(data.subjects)
    await studentResult.create(data)
        .then(data => {
            alert("Student Data Saved.")
            res.sendFile("C:/Users/ShouryaSaxena/Node.js/15_mar/public/index.html")
            return false;
        })
        .catch(err => {
            console.log(err)
            res.send({ message: err })
        })
}

const get_result = async (req:Request, res:Response) => {
    try {
        const results = await studentResult.find();
        res.status(200).json({ results })
    } catch (err) {
        res.json({ message: err });
    }
}

export {
    displayForm,
    add_Student,
    get_result
}