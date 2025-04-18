cd ui.frontend
npm run build
cd ..
cd ui.apps
mvn clean install -PautoInstallPackage -Padobe-public
echo pwd