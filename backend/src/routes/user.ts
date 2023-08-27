import express from 'express';
import { validateBodyFields, validateStringFromOptions, validateStringLength } from '../helper/validation';
import User from '../models/userModel';

const router = express.Router();

/* POST route to create users
** Expected body:
** first_name: string
** last_name: string
** email: string
** password: string
**
** Output:
** Status 200 - User created successfuly
** Status 400 - Invalid request
** Status 409 - email conflict
** Status 500 - database error
*/
router.post("/signup", async (req, res) => {

  // Validate input body
  if (!validateBodyFields(req.body, 'first_name', 'last_name', 'email', 'password', 'role')) {
    return res.status(400).json({
      message: 'INVALID REQUEST PARAMETERS'
    });
  }

  // Validate password length
  if (!validateStringLength(req.body.password, 8)) {
    return res.status(400).json({
      message: 'PASSWORD TOO SHORT SHOULD BE AT LEAST 8 CHARACTERS'
    });
  }

  // Make sure role is valid
  if (!validateStringFromOptions(req.body.role, 'student', 'teacher')) {
    return res.status(400).json({
      message: 'INVALID ROLE'
    });
  }

  // Create the user
  const user = new User(req.body);
  try {
    await user.save();
  } catch (err) {
    if (err.code == 11000) {
      return res.status(409).json({
        message: 'EMAIL ALREADY IN USE'
      });
    } else {
      return res.status(500).json({
        message: 'INTERNAL DATABASE ERROR'
      });
    }
  }

  res.status(200).json({
    message: 'USER CREATED SUCCESSFULLY'
  });

});

export default router;