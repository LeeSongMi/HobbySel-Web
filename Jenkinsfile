pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDENTIALS = 'Docker-Hub-ID'  // Jenkins Credential ID for Docker Hub
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build image') {
        appImage = docker.build("songmi383/Hobby-Sel:latest")
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', DOCKER_HUB_CREDENTIALS) {
            appImage.push()
        }
    }
    stage('Deploy') {
      steps {
        script {
          sh 'docker-compose -f /path/to/docker-compose.yml pull'
          sh 'docker-compose -f /path/to/docker-compose.yml up -d'
        }
      }
    }
  }
}
