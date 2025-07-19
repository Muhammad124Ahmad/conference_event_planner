import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      name:"Projectors",
      cost:200,
      quantity:0,
      img:"https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg"
    },
    {
      name:"Speaker",
      cost:35,
      quantity:0,
      img:"https://cdn.pixabay.com/photo/2018/08/27/10/11/radio-cassette-3634616_1280.png"
    },
    {
      name:"Microphones",
      cost:45,
      quantity:0,
      img:"https://cdn.pixabay.com/photo/2024/11/30/07/22/ai-generated-9234256_1280.jpg"
    },
    {
      name:"Whiteboards",
      cost:80,
      quantity:0,
      img:"https://cdn.pixabay.com/photo/2024/07/28/15/11/ai-generated-8927764_1280.jpg"
    },
    {
      name:"Signage",
      cost:80,
      quantity:0,
      img:"https://cdn.pixabay.com/photo/2014/12/21/23/53/sign-576261_1280.png"
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const toInc=state[action.payload];
      if(toInc){
        toInc.quantity+=1;
      }
    },
    decrementAvQuantity: (state, action) => {
      const toDec=state[action.payload];
      if(toDec && toDec.quantity>0){
        toDec.quantity-=1;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
