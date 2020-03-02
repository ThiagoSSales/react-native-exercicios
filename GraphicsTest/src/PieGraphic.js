import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions
} from 'react-native'
import {
    PieChart,
    ProgressChart
} from 'react-native-chart-kit'

const pieData = [
    {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Beijing',
        population: 527612,
        color: 'red',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'New York',
        population: 8538000,
        color: '#808080',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
    {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    },
];

export default class PieGraphic extends Component {
    render() {
        return (
            <View>
                <Text>
                    Test Pie Char
                </Text>
                <PieChart
                    data={pieData}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                        //backgroundColor: 'red',
                        backgroundGradientFrom: 'red',
                        backgroundGradientTo: 'green',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
        )
    }
}