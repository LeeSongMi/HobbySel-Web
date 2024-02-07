pipeline {
  agent any

  environment {
    DOCKER_REGISTRY = "songmi383" // Docker 레지스트리 URL
    DOCKER_HUB_CREDENTIALS = 'Docker-Hub-ID'
    DOCKER_IMAGE_TAG = "latest"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t Hobby-Sel .'

        
      }
    }
    stage('Push Docker Image') {
      steps {
        script {
          docker.build("${DOCKER_REGISTRY}/Hobby-Sel:${DOCKER_IMAGE_TAG}")
          docker.withRegistry("${DOCKER_REGISTRY}", "${DOCKER_HUB_CREDENTIALS}") {
            docker.image("${DOCKER_REGISTRY}/Hobby-Sel:${DOCKER_IMAGE_TAG}").push()
            }
        }
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
