pipeline {
    agent none
    stages {
        stage('Build') {
            agent { label 'dev' }
            steps {
                echo 'Building the application on DEV agent...'
                sh 'echo Building...'
            }
        }

        stage('Test') {
            agent { label 'qa' }
            steps {
                echo 'Running tests on QA agent...'
                sh 'echo Testing...'
            }
        }

        stage('Deploy') {
            agent { label 'prod' }
            steps {
                echo 'Deploying application on PROD agent...'
                sh 'echo Deploying...'
            }
        }
    }
}
