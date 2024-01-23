import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Apilist } from 'src/app/variable/api-list';
@Component({
  selector: 'app-dt',
  templateUrl: './dt.component.html',
  styleUrls: ['./dt.component.scss']
})
export class DtComponent implements OnInit {
  adminform!: FormGroup;
  editform!:FormGroup
  items: any;
  isEditFormVisible = false; // Added variable to toggle edit form visibility
  selectedItem: any; // Added variable to store the selected item for editing


  constructor(private fb: FormBuilder,private api:ApiService) {
    this.adminform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.editform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.getValue()
  }
  addValue() {
    this.adminform.markAllAsTouched();

    if (this.adminform.valid) {
      let data = this.adminform.value;
      console.log(data);
      this.api.Post(Apilist.sending,data).subscribe(data=>{
        this.getValue()
      })
      
     }
    

  }
 getValue(){
  this.api.Get(Apilist.receive).subscribe((data:any) => {
       this.items=data.data;
  })
  console.log('data--------------------------',this.items);
 }
updateValue(){
  
}
editItem(item: any) {
  this
  // Show the edit form and bind the selected item's name to the form
  this.isEditFormVisible = true;
  this.selectedItem = item;
  

  this.editform.patchValue({
    name: item.name

  });
}

  get adminControl(){
    return this.adminform.controls;
  }
  
  deleteItem(itemId: number) {
    // Implement the logic to confirm deletion and make API call to delete the item
    console.log('Delete item with ID:', itemId);
    // this.api.Delete(`${Apilist.delete}/${itemId}`).subscribe(() => {
    //   this.getValue(); // Refresh the data after deletion
    // });
  }

    first = 0;

    rows = 10;



   

    pageChange(event: any) {
        // this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.items ? this.first === this.items.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.items ? this.first === 0 : true;
    }
}
