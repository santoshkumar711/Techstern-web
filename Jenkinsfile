pipeline {
    agent any

    environment {
        IMAGE_NAME = 'techstern-web'
        IMAGE_TAG = 'v1'
        CONTAINER_NAME = 'techstern-web'
        HOST_PORT = '3000'
        CONTAINER_PORT = '3000'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/santoshkumar711/Techstern-web.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '''
                    docker build -t %IMAGE_NAME%:%IMAGE_TAG% .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                    docker rm -f %CONTAINER_NAME% 2>NUL
                    exit /b 0
                '''
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                    docker run -d --name %CONTAINER_NAME% -p %HOST_PORT%:%CONTAINER_PORT% --restart unless-stopped %IMAGE_NAME%:%IMAGE_TAG%
                '''
            }
        }

        stage('Verify Container') {
            steps {
                bat '''
                    docker ps --filter "name=%CONTAINER_NAME%"
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed locally on port 3000!'
        }

        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
