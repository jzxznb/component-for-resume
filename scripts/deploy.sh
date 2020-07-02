rm -rf plugins

#将插件库推送到github

npm run build

cd plugins

git init

npm init -y

git add -A

git commit -m 'publish plugins'

git push -f git@github.com:jzxComponent/jzxComponent.github.io.git master