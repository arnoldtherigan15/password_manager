const router = require('express').Router()
const userRouter = require('./userRouter')
const todoRouter = require('./todoRouter')
const projectRouter = require('./projectRouter')

router.get('/',(req,res)=>{res.json({message:'welcome to fancy-todo'})})
router.use('/users',userRouter)
router.use('/todos',todoRouter)
router.use('/projects',projectRouter)

module.exports = router