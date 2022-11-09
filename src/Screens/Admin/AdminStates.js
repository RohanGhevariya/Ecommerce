import React from "react";
import { View,Text,StyleSheet,Dimensions,SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {BarChart} from "react-native-chart-kit"

const States =() =>{
    return(
        <SafeAreaView style={styles.container}>
        <View style={{
            justifyContent:'center',
            alignContent:'center',
            flex:1
        }}>
             <ScrollView
            showsVerticalScrollIndicator ={false}
            style={{height:400}}>
            <View style={{
                flex:1,
                alignContent:"center",
                justifyContent:"center",
                 
            }}>
            <Text style={styles.header}>Weekly States</Text>
      <BarChart
        data={{
          labels: ['1-7', '8-14', '15-21', '22-29'],
          datasets: [
            {
              data: [200, 400, 250, 100],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={200}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical:8,
          borderRadius: 16,
        }}
      />
      </View>
      <View style={{
                 paddingHorizontal:10,
                 width:"100%",
                 alignItems:"center",
                 
            }}>
            <Text style={styles.header}>Monthly States</Text>
      <BarChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [1220, 4500, 2800, 880, 999, 4300],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={200}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical:8,
          borderRadius: 16,
        }}
      />
      </View>
      </ScrollView>
        </View>

        </SafeAreaView>
    )
}
export default States;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });