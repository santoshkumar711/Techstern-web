pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    environment {
        DOCKER_HUB_USER = 'santoshkumar711'
        IMAGE_NAME = 'techstern-web'
        IMAGE_TAG = 'v1'
        CONTAINER_NAME = "techstern-web"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/santoshkumar711/Techstern-web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat "npm install"
            }
        }

        stage('Build Vite App') {
            steps {
                bat "npm run build"
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    bat "echo %PASS% | docker login -u %USER% --password-stdin"
                    bat "docker push %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG%"
                }
            }
        }

        stage('Deploy') {
            steps {
                bat "docker rm -f %CONTAINER_NAME% || echo No old container"
                bat "docker pull %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG%"

                bat """
                docker run -d --name %CONTAINER_NAME% -p 3000:3000 ^
                %DOCKER_HUB_USER%/%IMAGE_NAME%:%IMAGE_TAG%
                """
            }
        }
    }

    post {
        always {
            bat 'docker image prune -f'
        }
    }
}
