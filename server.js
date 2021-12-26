const express = require('express');
const mongoose = require('./config/connectdb');
const Product = require('./models/product');
const Article = require('./models/article');
const User = require('./models/user');


const app = express();
app.use(express.json());

// HTTP Post to all models
app.post('/ajoutProduct', (req, res)=>{

    //étape 1
    let productFromPostman = req.body;

    //étape 2 
    let product = new Product( productFromPostman );

    //étape 3
    product.save().then(
        ( savedProduct)=>{
            res.send(savedProduct)
        },
        (err)=>{
            console.log(err);
        }
    );

});
app.post('/ajoutArticle', (req, res)=>{
    let articleFromPostman = req.body;
    let article = new Article( articleFromPostman );
    article.save().then(
        ( savedArticle)=>{
            res.send(savedArticle)
        },
        (err)=>{
            console.log(err);
        }
    );

});
app.post('/ajoutUser', (req, res)=>{
    let userFromPostman = req.body;
    let user = new User( userFromPostman );
    user.save().then(
        ( savedUser)=>{
            res.send(savedUser)
        },
        (err)=>{
            console.log(err);
        }
    );

});


//HTTP Get to all models

app.get('/getAllProduct', (req, res)=>{
    Product.find().then(
        (products)=>{
            res.send(products);
        },
        (err)=>{
            console.log(err);
        }
    )

});
app.get('/getAllArticale', (req, res)=>{
    Articale.find().then(
        (articales)=>{
            res.send(articales);
        },
        (err)=>{
            console.log(err);
        }
    )

});
app.get('/getAllUser', (req, res)=>{
    User.find().then(
        (users)=>{
            res.send(users);
        },
        (err)=>{
            console.log(err);
        }
    )

});
//HTTP Delete to all models 
app.delete('/remove/:id', (req, res)=>{
    let id = req.params.id;

    User.findByIdAndDelete({_id: id}).then(
        (deletedUser)=>{
            res.send(deletedUser);
        },
        (error)=>{
            res.send(error)
        }
    );

    Article.findByIdAndDelete({_id: id}).then(
        (deletedArticle)=>{
            res.send(deletedArticle);
        },
        (error)=>{
            res.send(error)
        }
    );

    Product.findByIdAndDelete({_id: id}).then(
        (deletedProduct)=>{
            res.send(deletedProduct);
        },
        (error)=>{
            res.send(error)
        }
    );

});


//HTTP Update to all models 
app.put('/update/:id', (req , res)=>{

    let id = req.params.id;

    let newuser = req.body;
    Product.findByIdAndUpdate({_id:id} , newuser, {new: true}).then(
        (updatedProduct)=>{
            res.send(updatedProduct);
        },
        (err)=>{
            res.send(err);
        }
    );

    Article.findByIdAndUpdate({_id:id} , newuser, {new: true}).then(
        (updatedArticle)=>{
            res.send(updatedArticle);
        },
        (err)=>{
            res.send(err);
        }
    );
    User.findByIdAndUpdate({_id:id} , newuser, {new: true}).then(
        (updated)=>{
            res.send(updated);
        },
        (err)=>{
            res.send(err);
        }
    );

});



//GetById
app.get('/getByIdProduct', (req, res)=>{
    Product.findById().then(
        (products)=>{
            res.send(products);
        },
        (err)=>{
            console.log(err);
        }
    )

});
app.get('/getByIdArticale', (req, res)=>{
    Articale.findById().then(
        (articales)=>{
            res.send(articales);
        },
        (err)=>{
            console.log(err);
        }
    )

});
app.get('/getByIdUser', (req, res)=>{
    User.findById().then(
        (users)=>{
            res.send(users);
        },
        (err)=>{
            console.log(err);
        }
    )

});


app.listen( 3000, ()=>{ 
    console.log('server work !!!');
} );