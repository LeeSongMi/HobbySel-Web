pipeline {
  agent any

  stages {
    stage('Prepare') {
      sh "npm install -g yarn"
      sh "yarn install"
    }
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Build') {
      steps{
        echo 'building the application...'
        sh 'yarn install'
        sh 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        echo 'deploying the application...'
        sh 'yarn start'
        
      }
    }
  }
}