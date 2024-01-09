import express from 'express';
import { SyllabusData } from '../models/syllabusModel.js';

const router = express.Router();

//posting pdfs
router.post('/upload', async (request, response) => {
    try {

      if (!request.body.text) 
      {
        return response.status(400).send({
          message: 'Send all required fields: text',
        });
      }

      const newSyllabus = {
        text: request.body.text
      };
  
      const syllabus = await SyllabusData.create(newSyllabus);
  
      return response.status(201).send(syllabus);

    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
      const syllabuses = await SyllabusData.find({});
  
      return response.status(200).json({
        count: syllabuses.length,
        data: syllabuses,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default router;