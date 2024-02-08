pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Prepare') {
      steps {
        sh "npm install -g yarn"
        sh "yarn install"
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