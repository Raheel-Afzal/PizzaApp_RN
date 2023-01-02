import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';
import { Icon } from '@rneui/base';
import CartCard from '../components/CartCard';
const CartScreen = ({ navigation, route }) => {

  const { cartItems, price } = route.params;



  const TaxPrice = () => {
    let TaxPrice = price * 0.16
    return TaxPrice

  }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={cartItems}
          renderItem={({ item }) => {
            return (
              item.qty > 0 ?
                <CartCard item={item} /> :
                null
            )
          }}
        />
      </View>
      <View style={style.Footer}>
        <View style={style.LabelContainer}>
          <Text style={style.FooterLabel}>SubTotal:</Text>
          <Text style={style.FooterLabel}>{`GST (16%)`}</Text>
          <Text style={style.FooterLabel}>Total:</Text>
        </View>
        <View style={style.line}></View>
        <View style={style.PriceContainer}>
          <Text style={style.FooterPrice}>Rs. {price}.00</Text>
          <Text style={style.FooterPrice}>Rs. {Number(TaxPrice().toFixed(2))}</Text>
          <Text style={style.FooterPrice}>Rs. {Number((price + TaxPrice()).toFixed(2))}</Text>
        </View>
        <View style={style.line2}></View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  LabelContainer: {
    flex: 1.8,
  },
  PriceContainer: {
    flex: 1,
  },
  Footer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 30,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',


  },
  FooterLabel: {
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.white

  },
  FooterPrice: {
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.white
  },
  line: {
    height: 1,
    left: 22,
    bottom: 60,
    width: "98%",
    backgroundColor: COLORS.light,
    position: "absolute",

  },
  line2: {
    height: 1,
    left: 22,
    bottom: 30,
    width: "98%",
    backgroundColor: COLORS.light,
    position: "absolute",

  },
});

export default CartScreen;
