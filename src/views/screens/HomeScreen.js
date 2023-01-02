import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ToastAndroid,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import BottomCartCard from '../components/BottomCartCard';
import Card from '../components/Card';
import ListCategories from '../components/ListCategories';


const HomeScreen = ({ navigation }) => {


  const [cartItems, setCartItems] = useState([]);
  const [itemsQty, setItemsQty] = useState(0);
  const [totalAmount,setTotalAmount]= useState(0);

  const LoadCart = (getId, getName, getImage, getPrice, getQty) => { //Function to LOAD
    const check_index = cartItems.findIndex(item => item.id === getId);
    if (check_index !== -1) {
      setCartItems([...cartItems], cartItems[check_index].qty = getQty);

    } else {
      setCartItems([...cartItems, { id: getId, image: getImage, name: getName, price: getPrice, qty: 1 }])
    }

  }

  useEffect(() => {
    let qty = [];  
    cartItems.map((item) => {    //is my pehly sari quantities nikal rha ek arry my
      return (
        qty.push(item.qty)
      )
    })

    let prices = [];
    cartItems.map((item) => {
        let totalPrice = item.price* item.qty     // apny object my qty * price kr rha         
      return (
        prices.push(totalPrice)
      )
    })

     
    const totalPrice = prices.reduce(
      (accumulator, current) => accumulator + current,   //is my sb prices ko add kr rha
      0);
      setTotalAmount(totalPrice);
    
    const totalQty = qty.reduce(
      (accumulator, current) => accumulator + current,   //is my sb quantities ko add kr rha
      0);
      setItemsQty(totalQty);
  }, [cartItems])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        renderItem={({ item }) => <Card food={item} LoadCart={LoadCart} />}
      />
        {
          itemsQty>0?
          <BottomCartCard navigation={navigation} ItemsNo={itemsQty} price={totalAmount} data={cartItems} />
          :
          null
        }
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:10,
  },
 

});

export default HomeScreen;
