pipeline {
  agent any

  environment {
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Build') {
      steps{
        sh 'yarn install'
        sh 'yarn build'
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'yarn start'
        }
      }
    }
  }
}