'use strict'

const fs = require('fs');
const path = require('path');


let assetsdir = path.join(__dirname,'../../../register-login-profile-mean-front-ex/src/assets/image');
//let assetsdir = path.join(__dirname,'../../../rlp/src/assets/image1234')


exports.createDirectory = async(user)=>{

    try{

        const makedir = assetsdir+'/'+user._id;
        
        fs.mkdir(makedir,(error)=>{
            
            if(error){
                throw error.message
            }

            console.log('new directory created');
            
            fs.copyFile(assetssource,destination,(error)=>{

                if(error){
                    throw error.message
                }

                console.log('file copied'); 

            });
                    
                  


        });        

        return true;

    }catch(error){
        throw error.message;
    }
    

}


exports.updateImageUserFile = async(id,nfile)=>{

    try{

        const direxist = assetsdir+'/'+id+'/'+nfile.name;
        //const direxist = assetsdir+'/'+id+'/';
        const dirput = assetsdir+'/'+id+'/'+nfile.name;
        fs.readdir(assetsdir+'/'+id,(error,files)=>{

            if(error){
                throw error.message;
            }

            for(const file of files){                
                

                fs.unlink(assetsdir+'/'+id+'/'+file,(error)=>{
                    if(error){
                        throw error.message;
                    }
                });                     
    
    
            }

            

        }); 

        if(fs.existsSync(direxist)){

            nfile.mv(dirput,(error)=>{
                if(error){
                    throw error.message;
                }
                console.log('file saved');
            }) 

        }        
        console.log('returning true');
        return true;

    }catch(error){
        throw error.message;
    }
    

}