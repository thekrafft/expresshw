pipeline {
  agent any
  stages {
    stage('Git checkout') {
      steps {
        git 'https://github.com/thekrafft/expresshw.git'
        sh '/var/lib/jenkins/NODE/node-v10.13.0-linux-x64/bin/npm install'
      }
    }
  }
}