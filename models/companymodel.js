var mongoose= require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema=mongoose.Schema;

mongoose.Promise=Promise;
var useDataScheme=new Schema({
  company:{type:String,required:true},
  address:{type:String,required:true},
  categories:{type:String,required:true}
});
useDataScheme.plugin(mongoosePaginate);
useDataScheme.index({company: 'text', address: 'text'});
module.exports=mongoose.model('ComData',useDataScheme);
