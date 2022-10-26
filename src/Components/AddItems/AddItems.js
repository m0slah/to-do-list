import React from 'react'
import FormItems from './FormItems';

const AddItems=(props)=> {

    const saveExpenseDataHandler = (entereddItemsData) => {
        const ItemData = {
          ...entereddItemsData,
          id: Math.random().toString(),
        };
        props.onAddItems(ItemData);
      };

  return (
    <div>
        <FormItems onSaveItemsDataHandler={saveExpenseDataHandler}/>
    </div>
  )
}

export default AddItems