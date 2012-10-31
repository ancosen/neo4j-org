
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { category: '', title: 'Learn, Create, Participate' });
};

/*
 * GET - "download" page
 */
exports.download = function(req, res){
  res.render('download', { category: 'download', title: 'Download' });
};


/*
 * GET - "learn" information with guided tracks
 */
exports.learn = function(req, res){
  res.render('learn', { category: 'learn', title: 'Learn' });
};


/*
 * GET - "learn about neo4j" with an explanation of Neo4j as a graph database
 */
exports.neo4j = function(req, res){
  res.render('learn/neo4j', { category: 'learn', title: 'Neo4j' });
};


/*
 * GET - "Neo4j apps" a showcase of live apps
 */
exports.apps = function(req, res){
  res.render('learn/apps', { category: 'learn', title: 'Apps' });
};

/*
 * GET - "watch" screencasts and other video content
 */
exports.watch = function(req, res){
  res.render('watch', { category: 'learn', title: 'Watch' });
};


/*
 * GET - "create" applications using Neo4j
 */
exports.create = function(req, res){
  res.render('create', { category: 'create', title: 'Create' });
};


/*
 * GET - "heroku" managed Neo4j on Heroku's PaaS
 */
exports.heroku = function(req, res){
  res.render('create/heroku', { category: 'create', title: 'Heroku Add-on' });
};


/*
 * GET - "ec2" DIY deployment on Amazon's EC2
 */
exports.ec2 = function(req, res){
  res.render('create/ec2', { category: 'create', title: 'DIY EC2' });
};


/*
 * GET - "spring" everything you need to know about SDN
 */
exports.spring = function(req, res){
  res.render('create/spring', { category: 'create', title: 'Spring Data Neo4j' });
};

/*
 * GET - "integrate" with languages and frameworks
 */
exports.integrate = function(req, res){
  res.render('integrate', { category: 'create', title: 'Integrate' });
};

/*
 * GET - "participate" in the Neo4j community
 */
exports.participate = function(req, res){
  res.render('participate', { category: 'participate', title: 'Participate' });
};

