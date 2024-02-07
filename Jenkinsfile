pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Build') {
      steps{
        sh 'npm install'
        sh 'npm build'
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'npm start'
        }
      }
    }
  }
}