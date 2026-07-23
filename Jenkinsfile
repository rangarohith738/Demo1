pipeline {
  agent any

  options {
    timestamps()
    timeout(time: 60, unit: 'MINUTES')
  }

  stages {
    stage('Install') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm ci || npm install'
            sh 'npx playwright install chromium'
          } else {
            bat 'npm ci || npm install'
            bat 'npx playwright install chromium'
          }
        }
      }
    }

    stage('Playwright') {
      steps {
        script {
          def mode = (params.EXECUTION_MODE ?: 'suite').trim()
          def rawTarget = (params.TARGET ?: 'regression').trim()
          def testPath = mode == 'spec' ? "tests/${rawTarget}" : "tests/${rawTarget}"
          def browser = params.BROWSER ?: 'chromium'
          def workers = params.WORKERS ?: '4'
          def headed = params.HEADED ? '--headed' : ''
          def workerFlag = (params.EXECUTION == 'series') ? '--workers=1' : "--workers=${workers}"
          def cmd = "npx playwright test \"${testPath}\" --project=${browser} ${workerFlag} ${headed}"
          if (isUnix()) {
            sh cmd
          } else {
            bat cmd
          }
        }
      }
    }

    stage('Allure Report') {
      steps {
        script {
          catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
            if (isUnix()) {
              sh 'npx allure generate reports/allure-results -o reports/allure-report --clean'
            } else {
              bat 'npx allure generate reports/allure-results -o reports/allure-report --clean'
            }
          }
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'reports/**,test-results/**,playwright-report/**', allowEmptyArchive: true
      script {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'reports/allure-results']]
          ])
        }
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          publishHTML([
            reportDir: 'reports/html',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: true
          ])
        }
      }
    }
  }
}
