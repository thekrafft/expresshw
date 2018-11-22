pipeline {
  agent any
  stages {
    stage('Npm install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Running tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Buildning container') {
      steps {
        sh 'docker build .'
      }
    }
  }
}