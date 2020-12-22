const mCredentials= db.mcredentials;

exports.getCreds = (req, res) => {
  mCredentials.find({deleteflag:false},{password:0})
    .then(data => { console.log(data)
        res.send( data );
    })
    .catch(err => {
      res
        .status(500)
        .send({ status: "Error retrieving moments" });
    });
}

exports.checkSession=(req, res)=>{
    if(req.session.email!=null){
      res.send({status:true})
    }else{
      res.send({status:false})
    }
}

exports.logout =(req,res)=>{
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send({message:false});
    } else {
      res.status(200).send({message:true});
    }
  });

  }
  exports.deleteUser = (req, res) => {
    const id= req.params.id;
    mCredentials.updateOne({_id:id}, {$set:{deleteflag:true}})
      .then(data => { console.log(data)
         res.send({status:true});
        })
      .catch(err => { 
        res
        .status(500)
        .send({ message: "Error while deleting"});
      });
  
}

exports.editUser = (req, res) => {
  console.log(req.body)
  const id= req.body.id;
  mCredentials.updateOne({_id:id}, {$set:{fullname:req.body.form.fullname, email: req.body.form.email, mobile:req.body.form.mobile,city:req.body.form.city}})
    .then(data => { //console.log(data)
       res.send({status:true});
      })
    .catch(err => { 
      res
      .status(500)
      .send({ message: "Error while editing user"});
    });
}
