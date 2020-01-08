 formFields=[{
    firstname:'',
    lastname:'',
    dropdown:'',
  }];
  formDOM='';
  
  updateDOM(id){
      this.formDOM=`<div class="newDefDivControlClass" id="field${id}">
        <div class="divNewDefNameText">
          <input type="text" (change)="updateValues('firstname${id},${id}')" (blur)="validate('firstname${id}')" id="firstname${id}" name="firstname${id}" class="inputModelDef">
        </div>
        <div  class="divNewDefNameText">
          <input type="text" id="lastname${id}" name="lastname${id}" (change)="updateValues('lastname${id},${id}')" (blur)="validate('lastname${id}')" class="inputModelDef">      
        </div>
        <div  class="newDefDivControlClass">
          <div class="divNewDefNameText">
            <select id="dropdown${id}" name="dropdown${id}" class="dropdownModelDef "(change)="updateValues('dropdown${id},${id}')"  (blur)="validate('dropdown${id}')">
              <option> option1 </option>
              <option> option1 </option>
              <option> option1 </option>
            </select>
        
          </div>
        </div>
      </div>`;
    $("#elements").append(this.formDOM);
  }
  addMore(){
    let formSize = this.formFields.length;
    this.formFields.push({
      firstname:'',
      lastname:'',
      dropdown:'',
    });
    this.updateDOM(formSize);
  }
  validate(id){
    let inputVal = $("#"+id).val();
    if(inputVal=='' || inputVal){
      $("#"+id).append("<p> please enter any value");
    }   
  }
  updateValues(id,index){
    let inputVal = $("#"+id).val();
    if(inputVal!='' || inputVal){
      $("#"+id).next().remove();
      let keyname = id.subString(0,id.length-1)
      this.formFields[index][keyname] =inputVal;
    } 
    console.log(this.formFields); 
  }
  
