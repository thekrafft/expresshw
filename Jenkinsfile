pipeline {
  agent any
  stages {
    stage('Git checkout') {
      steps {
        git 'https://github.com/thekrafft/expresshw.git'
      }
    }
    stage('Npm install') {
      steps {
        sh '/opt/rh/rh-nodejs4/root/usr/bin/npm install'
      }
    }
    stage('Run build') {
      steps {
        sh '/opt/rh/rh-nodejs4/root/usr/bin/npm run build'
      }
    }
    stage('Running tests') {
      steps {
        sh '/opt/rh/rh-nodejs4/root/usr/bin/npm test'
      }
    }
    stage('Buildning container') {
      steps {
        sh 'docker build .'
      }
    }
  }
}