#!groovy

pipeline {
   agent  any
  stages {
    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t ds_ai_plateform_site:0.0.1  .'
      }
    }
    stage('Deploying ds_ai_plateform_site container to Kubernetes') {
      agent any
      steps {   
          catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'kubectl delete -f ./ds_ai_plateform_site.yaml'
                } 
     
      sh 'kubectl create -f ./ds_ai_plateform_site.yaml'
    }
      
      
    }
  }
}