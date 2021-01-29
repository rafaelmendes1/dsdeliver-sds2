import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';


function Orders() {
 
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});

export default Orders;