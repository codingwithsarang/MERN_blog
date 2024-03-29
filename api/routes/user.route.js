import express from 'express'
import { test } from '../controller/user.controller.js'

const router = express.Router()

router.route('/').get(test)

export default router