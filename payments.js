node {
	stage 'Checkout'
		checkout scm

	stage 'Build'
		bat 'nuget restore SolutionName.sln'
		bat "\"${tool<Down> 'MSBuild'}\" SolutionName.sln /p:Configuration=Release /p:Platform=\"Any CPU\" /p:ProductVersion=1.1.0.${env.BUILD_NUMBER}"

	stage 'Deploy'
		archive 'ProjectName/bin/Release/**'

}
