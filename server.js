var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content= 
{
    title :'Article 1 | ash',
    heading : 'ARTICLE ONE',
    date : 'Sept 21,2017',
    content :`
        <p>
    	        This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.This is the body of what is supposed to be the content of the article which i am creating wit the help of Tanmai Sir.This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.
    			</p>
    			
    			<p>
    			This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.
    			</p>
    
    			<p>
    			This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.This is the body of what is supposed to be the content of the article which i am creating with the help of Tanmai Sir.
    			</p>`
    		
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
}
        var htmlTemplate = `
        
        <html>
        <head>
        		<title>
        		 ${title}
        		 </title> 
        		 <meta name="viewpoint" content="width=device-width, initial-scale=1"/>
        		  <link href="/ui/style.css" rel="stylesheet" />
        	</head>
        	<body>
        	    <div class="container">
            		<div>
            			<a href="http://adharshh54.imad.hasura-app.io/">Home</a>
            		</div>
            		<hr/>
            		<h3>  
            			${heading}
            		</h3>
            		<div>
            			${date}
            		</div>
            		<div>
                         ${content}
            		</div>
        		</div>
        	</body>
        </html>`
        ;
    return htmlTemplate;    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1', function(req, res){
res.send(createTemplate(article1));
});

app.get('/article-2', function(req, res){
res.sendFile(path.join(__dirname,'ui','article-2.html'));
});

app.get('/article-3', function(req, res){
res.sendFile(path.join(__dirname,'ui','article-3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/ash.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ash.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
