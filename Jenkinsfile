pipeline {
  agent any
  stages {
    stage('Build Stage') {
      steps {
        echo 'BUILD SUCCESS'
      }
    }
    stage('Development') {
      steps {
        sh 'npm run dev'
      }
    }
    stage('Running tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Linting') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Buildning container') {
      steps {
        sh 'docker build .'
      }
    }
  }
}