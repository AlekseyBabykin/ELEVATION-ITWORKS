import env from './config/index'
import app from './src/index'
import mongoose from 'mongoose'

const start = async () => {
  try {
    await mongoose.connect(git)
    console.info('Successfully connected to MongoDB Atlas')
    app.listen(env.PORT, () => {
      console.info(`Environment: ${env.NODE_ENV}`)
      console.info(`Server is running on http://localhost:${env.PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()
