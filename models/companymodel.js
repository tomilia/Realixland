var mongoose= require('mongoose');
var Schema=mongoose.Schema;
mongoose.Promise=Promise;
var useDataScheme=new Schema({
  company:{type:String,required:true},
  address:{type:String,required:true}
});
useDataScheme.index({company: 'text', address: 'text'});
module.exports=mongoose.model('ComData',useDataScheme);
