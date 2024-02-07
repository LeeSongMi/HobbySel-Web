pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t songmi383/hobby-sel:latest .'
      }
    }

    stage('Pulssh Docker Image') {
      steps {
        script {
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