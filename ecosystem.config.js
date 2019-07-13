module.exports = {
  apps : [
  //{
    //name: 'vuemeituan', // pm2启动名字
    //script: './build/dev-server.js' // 网站启动文件路径
  //},
  {
    name: 'blogService', // pm2启动名字
    script: './bin/www' // 网站启动文件路径
  }],
  deploy : {
    serverall : {
      user : 'tomcat', // 用户
      host : ['101.132.46.123'], // 部署服务器ip
      ref  : 'origin/master', // 远程git上面的分支
      repo : 'git@github.com:knife1/airTMC.git', // github项目路径
      path : '/node/airtmc', // 部署路径
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env serverall' // 部署需执行的命令
    },
	serverBlogService : {
	  user : 'root', // 用户
      host : ['101.132.46.123'], // 部署服务器ip
      ref  : 'origin/master', // 远程git上面的分支
      repo : 'git@github.com:knife1/myBlogservice.git', // github项目路径
      path : '/node/blogService', // 部署路径
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env serverBlogService' // 部署需执行的命令
	},
    servermeituan : {
      user : 'root',
      host : ['101.132.46.123'],
      ref  : 'origin/master',
      repo : 'git@github.com:knife1/meituan.git',
      path : '/node/meituan',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env servermeituan'
    },
    updateWeb : {
      user : 'root',
      host : ['101.132.46.123'],
      ref  : 'origin/master',
      repo : 'git@github.com:knife1/airTMC.git',
      path : '/node/pm2-deploy-demo',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env updateWeb'
    },
  }
};
