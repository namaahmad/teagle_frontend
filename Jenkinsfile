#!groovy

pipeline {
   agent  any
  stages {
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t teagle_frontend:0.0.1  .'
      }
    }
    stage('Deploying teagle_frontend container to Kubernetes') {
      agent any
      steps {   
          catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'kubectl delete -f ./teagle_frontend.yaml'
                } 
     
      sh 'kubectl create -f ./teagle_frontend.yaml'
    }
      
      
    }
  }
}